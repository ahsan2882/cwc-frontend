import React, { Component } from 'react';
import './Title.css';


class Title extends Component {
    render() {
        return (
            <div className="title">
                {this.props.text}
            </div>
        );
    }
}

export default Title;
