import React, { Component } from 'react';
import { Row, Col, Input, Collapsible, CollapsibleItem, Tabs, Tab } from 'react-materialize';
import './Dashboard.css';
import CardTemplate from './card/CardTemplate';
import CardOutput from './cardOutput/CardOutput';

class Dashboard extends Component {
  state = {
    "data": mockJson,
    "selected": mockJson[0],
    "styling": mockStyleObj
  }


  handleChange = event => {
    this.setState({ selected: event.target.value })
  }
  handleCardChange = (event, element, property) => {
    let updated = event.target.value; // this is the change the user made in their input
    let updatedElement = element; // this is the element they're editing
    let updatedProperty = property; // this is the CSS property they're changing
    this.setState(previousState => ({
      styling: {
        ...previousState.styling,
        styling: {
          ...previousState.styling.styling,
          [updatedElement]: {
            ...previousState.styling.styling[updatedElement],
            [updatedProperty]: updated
          }
        }
      }
    }))
  }

  render() {
    let cardOptions = this.state.data.map(card => {
      return (
        < option value={card.code}> {card.name} </option >
      );
    })
    return (
      <div className='body-builder' >
        <Row>
          <Col s={3} className='paneGradient'>
            <div className='components'>
              <h3>Card Template</h3>
              <Input s={12} type='select' defaultValue='2' onChange={this.handleChange}>
                {cardOptions}
              </Input>
            </div>
          </Col>


          <Col s={6}>
            <div className='card-render'>
              <CardTemplate styling={this.state.styling} />
            </div>
          </Col>

          <Col s={3} className='paneGradient'>
            <div className='console'>
              <h3>Card Editor</h3>

              <Collapsible accordion>
                <CollapsibleItem header='Body' icon='dashboard'>
                  <div className='componentEditor'>
                    <Row>
                      <Input s={6} label="Max Width" defaultValue={this.state.styling.styling.card.maxWidth} onChange={(e) => this.handleCardChange(e, "card", "maxWidth")} />
                      <Input s={6} label="Text Align" defaultValue={this.state.styling.styling.card.textAlign} onChange={(e) => this.handleCardChange(e, "card", "textAlign")} />
                      <Input s={6} label="Font Family" defaultValue={this.state.styling.styling.card.fontFamily} onChange={(e) => this.handleCardChange(e, "card", "fontFamily")} />
                      <Input s={6} label="Display" defaultValue={this.state.styling.styling.card.display} onChange={(e) => this.handleCardChange(e, "card", "display")} />
                      <Input s={6} label="Border" defaultValue={this.state.styling.styling.card.border} onChange={(e) => this.handleCardChange(e, "card", "border")} />
                      <Input s={6} label="Background Color" defaultValue={this.state.styling.styling.card.backgroundColor} onChange={(e) => this.handleCardChange(e, "card", "backgroundColor")} />
                      <Input s={6} label="Box Shadow" defaultValue={this.state.styling.styling.card.boxShadow} onChange={(e) => this.handleCardChange(e, "card", "boxShadow")} />
                      <Input s={6} label="Margin" defaultValue={this.state.styling.styling.card.margin} onChange={(e) => this.handleCardChange(e, "card", "margin")} />
                    </Row>

                  </div>
                </CollapsibleItem>
                <CollapsibleItem header='Title' icon='title'>
                  <div className='componentEditor'>

                    <Row>
                      <Input s={6} label="Text" defaultValue={this.state.styling.styling.cardTitle.text} onChange={(e) => this.handleCardChange(e, "cardTitle", "text")} />
                      <Input s={6} label="Color" defaultValue={this.state.styling.styling.cardTitle.color} onChange={(e) => this.handleCardChange(e, "cardTitle", "color")} />
                      <Input s={6} label="Text Align" defaultValue={this.state.styling.styling.cardTitle.textAlign} onChange={(e) => this.handleCardChange(e, "cardTitle", "textAlign")} />
                      <Input s={6} label="Font Family" defaultValue={this.state.styling.styling.cardTitle.fontFamily} onChange={(e) => this.handleCardChange(e, "cardTitle", "fontFamily")} />
                      <Input s={6} label="Display" defaultValue={this.state.styling.styling.cardTitle.display} onChange={(e) => this.handleCardChange(e, "cardTitle", "display")} />

                    </Row>

                  </div>
                </CollapsibleItem>
                <CollapsibleItem header='Image' icon='image'>
                  <div className='componentEditor'>
                    <Row>
                      <Input s={6} label="Src" defaultValue={this.state.styling.styling.cardImg.src} onChange={(e) => this.handleCardChange(e, "cardImg", "src")} />
                      <Input s={6} label="Alt" defaultValue={this.state.styling.styling.cardImg.alt} onChange={(e) => this.handleCardChange(e, "cardImg", "alt")} />
                      <Input s={6} label="Height" defaultValue={this.state.styling.styling.cardImg.height} onChange={(e) => this.handleCardChange(e, "cardImg", "height")} />
                      <Input s={6} label="Width" defaultValue={this.state.styling.styling.cardImg.width} onChange={(e) => this.handleCardChange(e, "cardImg", "width")} />
                      <Input s={6} label="Display" defaultValue={this.state.styling.styling.cardImg.display} onChange={(e) => this.handleCardChange(e, "cardImg", "display")} />
                    </Row>
                  </div>
                </CollapsibleItem>
                <CollapsibleItem header='Paragraph 1' icon='short_text'>

                  <div className='componentEditor'>
                    <Row>
                      <Input s={6} label="Text" defaultValue={this.state.styling.styling.cardParagraph1.text} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "text")} />
                      <Input s={6} label="Font Size" defaultValue={this.state.styling.styling.cardParagraph1.fontSize} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "fontSize")} />
                      <Input s={6} label="Font Family" defaultValue={this.state.styling.styling.cardParagraph1.fontFamily} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "fontFamily")} />
                      <Input s={6} label="Color" defaultValue={this.state.styling.styling.cardParagraph1.color} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "color")} />
                      <Input s={6} label="Padding" defaultValue={this.state.styling.styling.cardParagraph1.padding} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "padding")} />
                      <Input s={6} label="Display" defaultValue={this.state.styling.styling.cardParagraph1.display} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "display")} />
                      <Input s={6} label="Border" defaultValue={this.state.styling.styling.cardParagraph1.border} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "border")} />
                    </Row>

                  </div>
                </CollapsibleItem>
                <CollapsibleItem header='Paragraph 2' icon='short_text'>
                  <div className='componentEditor'>
                    <Row>
                      <Input s={6} label="Text" defaultValue={this.state.styling.styling.cardParagraph2.text} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "text")} />
                      <Input s={6} label="Font Size" defaultValue={this.state.styling.styling.cardParagraph2.fontSize} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "fontSize")} />
                      <Input s={6} label="Font Family" defaultValue={this.state.styling.styling.cardParagraph2.fontFamily} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "fontFamily")} />
                      <Input s={6} label="Color" defaultValue={this.state.styling.styling.cardParagraph2.color} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "color")} />
                      <Input s={6} label="Padding" defaultValue={this.state.styling.styling.cardParagraph2.padding} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "padding")} />
                      <Input s={6} label="Display" defaultValue={this.state.styling.styling.cardParagraph2.display} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "display")} />
                      <Input s={6} label="Padding" defaultValue={this.state.styling.styling.cardParagraph2.border} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "border")} />
                    </Row>
                  </div>
                </CollapsibleItem>
                <CollapsibleItem header='Paragraph 3' icon='short_text'>
                  <div className='componentEditor'>
                    <Row>
                      <Input s={6} label="Text" defaultValue={this.state.styling.styling.cardParagraph3.text} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "text")} />
                      <Input s={6} label="Font Size" defaultValue={this.state.styling.styling.cardParagraph3.fontSize} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "fontSize")} />
                      <Input s={6} label="Font Family" defaultValue={this.state.styling.styling.cardParagraph3.fontFamily} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "fontFamily")} />
                      <Input s={6} label="Color" defaultValue={this.state.styling.styling.cardParagraph3.color} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "color")} />
                      <Input s={6} label="Padding" defaultValue={this.state.styling.styling.cardParagraph3.padding} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "padding")} />
                      <Input s={6} label="Display" defaultValue={this.state.styling.styling.cardParagraph3.display} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "display")} />
                      <Input s={6} label="Padding" defaultValue={this.state.styling.styling.cardParagraph3.border} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "border")} />
                    </Row>
                  </div>
                </CollapsibleItem>
                <CollapsibleItem header='Button' icon='radio_button_unchecked'>
                  <div className='componentEditor'>
                    <Row>
                      <Input s={6} label="Text" defaultValue={this.state.styling.styling.cardButton.text} onChange={(e) => this.handleCardChange(e, "cardButton", "text")} />
                      <Input s={6} label="Height" defaultValue={this.state.styling.styling.cardButton.height} onChange={(e) => this.handleCardChange(e, "cardButton", "height")} />
                      <Input s={6} label="Max Width" defaultValue={this.state.styling.styling.cardButton.maxWidth} onChange={(e) => this.handleCardChange(e, "cardButton", "maxWidth")} />
                      <Input s={6} label="Text Align" defaultValue={this.state.styling.styling.cardButton.textAlign} onChange={(e) => this.handleCardChange(e, "cardButton", "textAlign")} />
                      <Input s={6} label="Font Family" defaultValue={this.state.styling.styling.cardButton.fontFamily} onChange={(e) => this.handleCardChange(e, "cardButton", "fontFamily")} />
                      <Input s={6} label="Display" defaultValue={this.state.styling.styling.cardButton.display} onChange={(e) => this.handleCardChange(e, "cardButton", "display")} />
                      <Input s={6} label="Border" defaultValue={this.state.styling.styling.cardButton.border} onChange={(e) => this.handleCardChange(e, "cardButton", "border")} />
                      <Input s={6} label="Background Color" defaultValue={this.state.styling.styling.cardButton.backgroundColor} onChange={(e) => this.handleCardChange(e, "cardButton", "backgroundColor")} />
                      <Input s={6} label="Box Shadow" defaultValue={this.state.styling.styling.cardButton.boxShadow} onChange={(e) => this.handleCardChange(e, "cardButton", "boxShadow")} />
                      <Input s={6} label="Margin" defaultValue={this.state.styling.styling.cardButton.margin} onChange={(e) => this.handleCardChange(e, "cardButton", "margin")} />
                    </Row>
                  </div>
                </CollapsibleItem>
              </Collapsible>
              <CardOutput css={this.state.styling.styling} />
            </div>
          </Col>
        </Row>
      </div >
    );
  }
}



var mockStyleObj = {
  "template": "Product Card",
  "name": "Product Card",
  "styling": {
    "card": {
      "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      "maxWidth": "300px",
      "margin": "auto",
      "textAlign": "center",
      "fontFamily": "arial",
      "display": "block",
      "border": "0",
      "backgroundColor": "white",
    },
    "cardTitle": {
      "fontFamily": "arial",
      "text": "This is a demo",
      "color": "black",
      "display": "block",
      "textAlign": "center"
    },
    "cardParagraph1": {
      "fontFamily": "arial",
      "fontSize": "12px",
      "text": "This is a test",
      "border": "0",
      "padding": "0px",
      "display": "block",
      "color": "grey"
    },
    "cardParagraph2": {
      "fontFamily": "arial",
      "fontSize": "18px",
      "border": "0",
      "padding": "0px",
      "display": "block",
      "text": "This is a test",
      "color": "black"
    },
    "cardParagraph3": {
      "fontFamily": "arial",
      "fontSize": "12px",
      "border": "0",
      "padding": "0px",
      "display": "none",
      "color": "black"
    },
    "cardImg": {
      "src": "www.unsplash.com",
      "display": "none",
      "alt": "This is an image which will be used later on",
      "height": "auto",
      "width": "auto",
    },
    "cardButton": {
      "border": "name",
      "value": "0",
      "backgroundColor": "#000",
      "color": "white",
      "textAlign": "center",
      "width": "100%",
      "fontSize": "18px",
      "padding": "12px",
      "display": "block",
      "text": "This is a test"
    }

  }
}


var mockJson = [
  mockStyleObj
]

export default Dashboard;
