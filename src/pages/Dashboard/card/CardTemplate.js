import React, { Component } from 'react';
import './CardTemplate.css';
class CardTemplate extends Component {

    render() {
        let cardTitle = this.props.styling.styling.cardTitle;
        let cardBody = this.props.styling.styling.card;
        let cardParagraph1 = this.props.styling.styling.cardParagraph1;
        let cardParagraph2 = this.props.styling.styling.cardParagraph2;
        let cardParagraph3 = this.props.styling.styling.cardParagraph3;
        let cardImg = this.props.styling.styling.cardImg;
        let cardButton = this.props.styling.styling.cardButton;

        return (
            <div>
                <div style={cardBody}>
                    <h1 style={cardTitle}>{cardTitle.text}</h1>
                    <div style={cardImg} alt={cardImg.alt} />
                    <p style={cardParagraph1}>{cardParagraph1.text}</p>
                    <p style={cardParagraph2}>{cardParagraph2.text}</p>
                    <p style={cardParagraph3}>{cardParagraph3.text}</p>
                    <button style={cardButton}>{cardButton.text}</button>
                </div>
            </div>
        );
    }
}

export default CardTemplate;
