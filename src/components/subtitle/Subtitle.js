import React, { Component } from 'react';
import './Subtitle.css';


class Subtitle extends Component {
    render() {
        return (
            <div className="subtitle">
                {this.props.text}
            </div>
        );
    }
}

export default Subtitle;
