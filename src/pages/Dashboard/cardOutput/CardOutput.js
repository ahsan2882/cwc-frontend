import React, { Component } from 'react';
import { Modal, Button, Tab, Tabs } from 'react-materialize';
import './CardOutput.css';
var rename = require('deep-rename-keys');

class CardOutput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            html: "",
            css: this.props.css
        }
    }

    componentWillReceiveProps(nextProps) {

        this.state = {
            css: this.props.css
        }

    }

    turnToRegularCSS = (css) => {
        let testing = Object.assign({}, css);//make a clone of the object so we can delete stuff and not cause the app to crash
        let text = [];

        //This loops through the object and anywhere where display = none, will remove from the object
        for (var key in testing) {
            if (css.hasOwnProperty(key)) {
                if (testing[key].display === "none") {
                    delete testing[key];
                }
            }
        }
        //this will rename the keys to regular css
        var updatedCSS = rename(testing, function (key) {
            if (key === 'card') return '.card';
            if (key === 'cardTitle') return '.cardTitle';
            if (key === 'cardParagraph1') return '.cardParagraph1';
            if (key === 'cardParagraph2') return '.cardParagraph2';
            if (key === 'cardParagraph3') return '.cardParagraph3';
            if (key === 'cardImg') return '.cardImg';
            if (key === 'cardButton') return '.cardButton';
            if (key === 'maxWidth') return 'max-width';
            if (key === 'boxShadow') return 'box-shadow';
            if (key === 'textAlign') return 'text-align';
            if (key === 'fontFamily') return 'font-family';
            if (key === 'backgroundColor') return 'background-color';
            if (key === 'fontSize') return 'font-size';
            return key;
        })
        return updatedCSS;
    }

    convertToString = (updatedCSS) => {
        let cssObj = Object.assign({}, updatedCSS); // create copy of the object
        let cssString = "";
        let textObj = [];
        for (var key in cssObj) {
            cssString = cssString + key + "{ \n";

            for (var properties in cssObj[key]) {

                if (properties !== 'text') {//take out the text leave the actual css props in the css string
                    cssString += "   ";
                    cssString += properties + " : " + cssObj[key][properties] + ";\n";
                }
                else { //now we gotta save the css text for later 
                    let text = {
                        "element": key,
                        "content": cssObj[key][properties]
                    };
                    textObj.push(text);

                }

            }
            cssString += "\n } \n \n";

        }
        let everythingSeperated = {
            "css": cssString,
            "text": textObj
        }
        return everythingSeperated;

    }

    createHTMLString = (classesObj, textObject) => {
        let outputHTML = "";
        let cssClassNames = Object.assign({}, classesObj);
        console.log(textObject);
        outputHTML += '<div class="card"> \n';
        let x = 0;
        for (var key in cssClassNames) {
            if (x > 0) {//this is to skip over the card body being put in again
                let content = "";
                for (x in textObject) {
                    if (textObject[x].element === key) {
                        content = textObject[x].content
                    }
                }
                outputHTML += "     ";
                if (key === '.cardTitle') {
                    outputHTML += '<h1 class="' + key.substring(1) + '">' +
                        content
                        + '</h1> \n';
                }
                if (key === '.cardImg') {
                    outputHTML += '<img class="' + key.substring(1) + '">' +
                        content
                        + '</img> \n';
                }
                if (key.substring(0, key.length - 1) === '.cardParagraph') {
                    outputHTML += '<p class="' + key.substring(1) + '">' +
                        content
                        + '</p> \n';
                }
                if (key === '.cardButton') {
                    outputHTML += '<p><button class="' + key.substring(1) + '">' +
                        content
                        + '</button></p> \n';
                }

            }
            x++;
        }

        outputHTML += "</div>";
        return outputHTML;

    }

    render() {
        let userCSS = this.turnToRegularCSS(this.state.css); //create nice css for the user
        let cssString = this.convertToString(userCSS);
        let htmlString = this.createHTMLString(userCSS, cssString.text);
        return (
            <div>
                <Modal
                    header='HTML & CSS'
                    trigger={<Button>View Code</Button>}>
                    <Tabs className='tab-demo z-depth-1'>
                        <Tab title="HTML" active>
                            <pre>
                                <code>
                                    {htmlString}
                                </code>
                            </pre>
                        </Tab>
                        <Tab title="CSS">
                            <pre>
                                <code>
                                    {cssString.css}
                                </code>
                            </pre>
                        </Tab>
                    </Tabs>
                </Modal>
            </div>
        );
    }
}

export default CardOutput;