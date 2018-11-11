import React, { Component } from 'react';
import './Card.css';


class Card extends Component {

    render() {
        return (
            <div>
                <div class="card" contentEditable='true'>
                    <h1>Card Template</h1>
                    <p class="price">$19.99</p>
                    <p>You could replace all this text with stuff you want to talk about.</p>
                    <p><button>Click Here For More</button></p>
                </div>
            </div>
        );
    }
}

export default Card;
