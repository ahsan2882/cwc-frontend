import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';
import './CardOutput.css';

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
        let cardBody = css.card;
        let cardTitle = css.cardTitle;
        let cardImg = css.cardImg;
        let cardParagraph1 = css.cardParagraph1;
        let cardParagraph2 = css.cardParagraph2;
        let cardParagraph3 = css.cardParagraph3;
        let cardButton = css.cardButton;


        //This loops through the object and anywhere where display = none, will remove from the object
        for (var key in css) {
            if (css.hasOwnProperty(key)) {
                if (css[key].display === "none") {
                    delete css[key];
                }
            }
        }

        for (var key in css) {//go into each element
            if (css.hasOwnProperty(key)) {
                for (var properties in css[key]) {//go into each elements properties
                    if (properties === "maxWidth") {
                        console.log(css[key][properties])
                    }
                }
            }
        }


        //finally this will update the state and display the actual CSS used to the user, removing any unused css 
        this.state = {
            css: css
        }



    }

    render() {
        this.turnToRegularCSS(this.state.css);
        return (
            <div>
                <Modal
                    header='HTML & CSS'
                    trigger={<Button>Export</Button>}>
                    <p>CSS</p>
                    <pre>
                        {JSON.stringify(this.state.css, undefined, 2)}

                    </pre>
                </Modal>
            </div>
        );
    }
}

export default CardOutput;