import React, { Component } from 'react';
import './CardTemplate.css';
let x = 1;

class CardTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            styling: this.props.styling.styling
        }
    }

    componentWillReceiveProps(nextProps) {

        this.state = {
            styling: this.props.styling.styling
        }

    }
    render() {
        let cardTitle = this.state.styling.cardTitle;
        let cardBody = this.state.styling.card;
        let cardParagraph1 = this.state.styling.cardParagraph1;
        let cardParagraph2 = this.state.styling.cardParagraph2;
        let cardParagraph3 = this.state.styling.cardParagraph3;
        let cardImg = this.state.styling.cardImg;
        let cardButton = this.state.styling.cardButton;

        let ptext1 = this.state.styling.cardTitle.text;
        console.log("PROPS: CARD TITLE: ", this.props.styling.styling.cardTitle);
        console.log("STATE: CARD TITLE: ", cardTitle);
        return (
            <div>
                <div style={cardBody}>
                    <h1 style={cardTitle}>{ptext1}</h1>
                    <img style={cardImg} alt={cardImg.alt} />
                    <p style={cardParagraph1}>{cardParagraph1.text}</p>
                    <p style={cardParagraph2}>{cardParagraph2.text}</p>
                    <p style={cardParagraph3}>{cardParagraph3.text}</p>
                    <p><button style={cardButton}>{cardButton.text}</button></p>
                </div>
            </div>
        );
    }
}

export default CardTemplate;
