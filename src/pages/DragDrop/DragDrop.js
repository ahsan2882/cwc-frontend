import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Card from './card/Card';
import './DragDrop.css';
import renderHTML from 'react-render-html';


var card = require('./testing.html');

class DragDrop extends Component {

    render() {
        return (
            <div className='body-builder'>
                <Row>
                    <Col s={4}>
                        <div className='components'>

                        </div>
                    </Col>


                    <Col s={4} className='card-render'>
                        {renderHTML({ card })}
                    </Col>

                    <Col s={4}>
                        <div className='console'></div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DragDrop;
