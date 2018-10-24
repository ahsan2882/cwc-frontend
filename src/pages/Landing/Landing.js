import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Title from '../../components/title/Title';
import Subtitle from '../../components/subtitle/Subtitle';
import Button from '../../components/button/Button';
import './Landing.css';


class Landing extends Component {
    render() {
        return (
            <div className="landingBody">
                <Row>
                    <Col s={6}>
                        <Title className='landing-title' text={"Create cards without code"} />
                        <Subtitle className= 'landing-subtitle' text={"Generate CSS cards without having to touch a single line of code, speeding up your projects development time immensely."} />
                        <div className='button-group'>
                            <Button  className='button' text={"Register"} />
                            <Button className='button' text={"Login"} />
                        </div>
                    </Col>

                    <Col s={6} className='gradiant-shape'>
                        <div className='hexagon'></div>
                    </Col>


                </Row>
            </div>
        );
    }
}

export default Landing;
