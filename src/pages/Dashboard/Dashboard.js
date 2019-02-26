import React, { Component } from 'react';
import { Row, Col, Input, Collapsible, CollapsibleItem } from 'react-materialize';
import './Dashboard.css';
import CardTemplate from './card/CardTemplate';
import CardOutput from './cardOutput/CardOutput';

class Dashboard extends Component {
  state = {
    "data": mockJson,
    "styling": mockJson[0]
  }


  handleChange = event => {
    this.setState({ styling: mockJson[event.target.value] })
    this.forceUpdate();
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
  createInputBoxes = (cardProperties) => {
    let elementArray = Object.keys(cardProperties).map((element, index) => {
      let individualProps = Object.keys(cardProperties[element]).map((property, index) => {
        return (
          <p>{cardProperties[element][property]}</p>
        )
      })
      return (
        <CollapsibleItem header={element} icon='dashboard' >
          {individualProps}
        </CollapsibleItem>
      );
    })
    return elementArray

  }

  render() {
    let cardOptions = this.state.data.map((card, index) => {
      return (
        < option value={index} > {card.name} </option >
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
              <CardTemplate styling={this.state.styling} isHighlighted={this.state.highlight} />
            </div>
          </Col>

          <Col s={3} className='paneGradient'>
            <div className='console'>
              <h3>Card Editor</h3>

              <Collapsible accordion>
                <CollapsibleItem header='Body' icon='dashboard' >
                  <div className='componentEditor'>
                    <Row>
                      <Input s={6} label="Max Width" value={this.state.styling.styling.card.maxWidth} onChange={(e) => this.handleCardChange(e, "card", "maxWidth")} />
                      <Input s={6} label="Text Align" value={this.state.styling.styling.card.textAlign} onChange={(e) => this.handleCardChange(e, "card", "textAlign")} />
                      <Input s={6} label="Font Family" value={this.state.styling.styling.card.fontFamily} onChange={(e) => this.handleCardChange(e, "card", "fontFamily")} />
                      <Input s={6} label="Display" value={this.state.styling.styling.card.display} onChange={(e) => this.handleCardChange(e, "card", "display")} />
                      <Input s={6} label="Border" value={this.state.styling.styling.card.border} onChange={(e) => this.handleCardChange(e, "card", "border")} />
                      <Input s={6} label="Background Color" value={this.state.styling.styling.card.backgroundColor} onChange={(e) => this.handleCardChange(e, "card", "backgroundColor")} />
                      <Input s={6} label="Box Shadow" value={this.state.styling.styling.card.boxShadow} onChange={(e) => this.handleCardChange(e, "card", "boxShadow")} />
                      <Input s={6} label="Margin" value={this.state.styling.styling.card.margin} onChange={(e) => this.handleCardChange(e, "card", "margin")} />
                      <Input s={6} label="Border Radius" value={this.state.styling.styling.card.borderRadius} onChange={(e) => this.handleCardChange(e, "card", "borderRadius")} />
                    </Row>

                  </div>
                </CollapsibleItem>
                <CollapsibleItem header='Title' icon='title'>
                  <div className='componentEditor'>

                    <Row>
                      <Input s={6} label="Text" value={this.state.styling.styling.cardTitle.text} onChange={(e) => this.handleCardChange(e, "cardTitle", "text")} />
                      <Input s={6} label="Font Size" value={this.state.styling.styling.cardTitle.fontSize} onChange={(e) => this.handleCardChange(e, "cardTitle", "fontSize")} />
                      <Input s={6} label="Color" value={this.state.styling.styling.cardTitle.color} onChange={(e) => this.handleCardChange(e, "cardTitle", "color")} />
                      <Input s={6} label="Text Align" value={this.state.styling.styling.cardTitle.textAlign} onChange={(e) => this.handleCardChange(e, "cardTitle", "textAlign")} />
                      <Input s={6} label="Font Family" value={this.state.styling.styling.cardTitle.fontFamily} onChange={(e) => this.handleCardChange(e, "cardTitle", "fontFamily")} />
                      <Input s={6} label="Display" value={this.state.styling.styling.cardTitle.display} onChange={(e) => this.handleCardChange(e, "cardTitle", "display")} />
                      <Input s={6} label="Background Color" value={this.state.styling.styling.cardTitle.backgroundColor} onChange={(e) => this.handleCardChange(e, "cardTitle", "backgroundColor")} />
                      <Input s={6} label="Border Radius" value={this.state.styling.styling.cardTitle.borderRadius} onChange={(e) => this.handleCardChange(e, "cardTitle", "borderRadius")} />


                    </Row>

                  </div>
                </CollapsibleItem>
                <CollapsibleItem header='Image' icon='image'>
                  <div className='componentEditor'>
                    <Row>
                      <Input s={6} label="Background" value={this.state.styling.styling.cardImg.background} onChange={(e) => this.handleCardChange(e, "cardImg", "background")} />
                      <Input s={6} label="Alt" value={this.state.styling.styling.cardImg.alt} onChange={(e) => this.handleCardChange(e, "cardImg", "alt")} />
                      <Input s={6} label="Height" value={this.state.styling.styling.cardImg.height} onChange={(e) => this.handleCardChange(e, "cardImg", "height")} />
                      <Input s={6} label="Width" value={this.state.styling.styling.cardImg.width} onChange={(e) => this.handleCardChange(e, "cardImg", "width")} />
                      <Input s={6} label="Display" value={this.state.styling.styling.cardImg.display} onChange={(e) => this.handleCardChange(e, "cardImg", "display")} />
                      <Input s={6} label="Min Height" value={this.state.styling.styling.cardImg.minHeight} onChange={(e) => this.handleCardChange(e, "cardImg", "minHeight")} />
                      <Input s={6} label="Background Size" value={this.state.styling.styling.cardImg.backgroundSize} onChange={(e) => this.handleCardChange(e, "cardImg", "backgroundSize")} />
                      <Input s={6} label="Border Radius" value={this.state.styling.styling.cardImg.borderRadius} onChange={(e) => this.handleCardChange(e, "cardImg", "borderRadius")} />

                    </Row>
                  </div>
                </CollapsibleItem>
                <CollapsibleItem header='Paragraph 1' icon='short_text'>

                  <div className='componentEditor'>
                    <Row>
                      <Input s={6} label="Text" value={this.state.styling.styling.cardParagraph1.text} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "text")} />
                      <Input s={6} label="Font Size" value={this.state.styling.styling.cardParagraph1.fontSize} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "fontSize")} />
                      <Input s={6} label="Font Family" value={this.state.styling.styling.cardParagraph1.fontFamily} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "fontFamily")} />
                      <Input s={6} label="Color" value={this.state.styling.styling.cardParagraph1.color} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "color")} />
                      <Input s={6} label="Padding" value={this.state.styling.styling.cardParagraph1.padding} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "padding")} />
                      <Input s={6} label="Display" value={this.state.styling.styling.cardParagraph1.display} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "display")} />
                      <Input s={6} label="Border" value={this.state.styling.styling.cardParagraph1.border} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "border")} />
                      <Input s={6} label="Background Color" value={this.state.styling.styling.cardParagraph1.backgroundColor} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "backgroundColor")} />
                      <Input s={6} label="Border Radius" value={this.state.styling.styling.cardParagraph1.borderRadius} onChange={(e) => this.handleCardChange(e, "cardParagraph1", "borderRadius")} />

                    </Row>

                  </div>
                </CollapsibleItem>
                <CollapsibleItem header='Paragraph 2' icon='short_text'>
                  <div className='componentEditor'>
                    <Row>
                      <Input s={6} label="Text" value={this.state.styling.styling.cardParagraph2.text} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "text")} />
                      <Input s={6} label="Font Size" value={this.state.styling.styling.cardParagraph2.fontSize} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "fontSize")} />
                      <Input s={6} label="Font Family" value={this.state.styling.styling.cardParagraph2.fontFamily} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "fontFamily")} />
                      <Input s={6} label="Color" value={this.state.styling.styling.cardParagraph2.color} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "color")} />
                      <Input s={6} label="Padding" value={this.state.styling.styling.cardParagraph2.padding} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "padding")} />
                      <Input s={6} label="Display" value={this.state.styling.styling.cardParagraph2.display} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "display")} />
                      <Input s={6} label="Padding" value={this.state.styling.styling.cardParagraph2.border} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "border")} />
                      <Input s={6} label="Background Color" value={this.state.styling.styling.cardParagraph2.backgroundColor} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "backgroundColor")} />
                      <Input s={6} label="Border Radius" value={this.state.styling.styling.cardParagraph2.borderRadius} onChange={(e) => this.handleCardChange(e, "cardParagraph2", "borderRadius")} />


                    </Row>
                  </div>
                </CollapsibleItem>
                <CollapsibleItem header='Paragraph 3' icon='short_text'>
                  <div className='componentEditor'>
                    <Row>
                      <Input s={6} label="Text" value={this.state.styling.styling.cardParagraph3.text} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "text")} />
                      <Input s={6} label="Font Size" value={this.state.styling.styling.cardParagraph3.fontSize} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "fontSize")} />
                      <Input s={6} label="Font Family" value={this.state.styling.styling.cardParagraph3.fontFamily} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "fontFamily")} />
                      <Input s={6} label="Color" value={this.state.styling.styling.cardParagraph3.color} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "color")} />
                      <Input s={6} label="Padding" value={this.state.styling.styling.cardParagraph3.padding} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "padding")} />
                      <Input s={6} label="Display" value={this.state.styling.styling.cardParagraph3.display} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "display")} />
                      <Input s={6} label="Padding" value={this.state.styling.styling.cardParagraph3.border} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "border")} />
                      <Input s={6} label="Background Color" value={this.state.styling.styling.cardParagraph3.backgroundColor} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "backgroundColor")} />
                      <Input s={6} label="Border Radius" value={this.state.styling.styling.cardParagraph3.borderRadius} onChange={(e) => this.handleCardChange(e, "cardParagraph3", "borderRadius")} />


                    </Row>
                  </div>
                </CollapsibleItem>
                <CollapsibleItem header='Button' icon='radio_button_unchecked'>
                  <div className='componentEditor'>
                    <Row>
                      <Input s={6} label="Text" value={this.state.styling.styling.cardButton.text} onChange={(e) => this.handleCardChange(e, "cardButton", "text")} />
                      <Input s={6} label="Color" value={this.state.styling.styling.cardButton.color} onChange={(e) => this.handleCardChange(e, "cardButton", "color")} />
                      <Input s={6} label="Height" value={this.state.styling.styling.cardButton.height} onChange={(e) => this.handleCardChange(e, "cardButton", "height")} />
                      <Input s={6} label="Max Width" value={this.state.styling.styling.cardButton.maxWidth} onChange={(e) => this.handleCardChange(e, "cardButton", "maxWidth")} />
                      <Input s={6} label="Text Align" value={this.state.styling.styling.cardButton.textAlign} onChange={(e) => this.handleCardChange(e, "cardButton", "textAlign")} />
                      <Input s={6} label="Font Family" value={this.state.styling.styling.cardButton.fontFamily} onChange={(e) => this.handleCardChange(e, "cardButton", "fontFamily")} />
                      <Input s={6} label="Display" value={this.state.styling.styling.cardButton.display} onChange={(e) => this.handleCardChange(e, "cardButton", "display")} />
                      <Input s={6} label="Border" value={this.state.styling.styling.cardButton.border} onChange={(e) => this.handleCardChange(e, "cardButton", "border")} />
                      <Input s={6} label="Background Color" value={this.state.styling.styling.cardButton.backgroundColor} onChange={(e) => this.handleCardChange(e, "cardButton", "backgroundColor")} />
                      <Input s={6} label="Box Shadow" value={this.state.styling.styling.cardButton.boxShadow} onChange={(e) => this.handleCardChange(e, "cardButton", "boxShadow")} />
                      <Input s={6} label="Margin" value={this.state.styling.styling.cardButton.margin} onChange={(e) => this.handleCardChange(e, "cardButton", "margin")} />
                      <Input s={6} label="Border Radius" value={this.state.styling.styling.cardButton.borderRadius} onChange={(e) => this.handleCardChange(e, "cardButton", "borderRadius")} />
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
      "boxShadow": "8px 8px 8px 8px rgba(0, 0, 0, 0.2)",
      "maxWidth": "300px",
      "margin": "auto",
      "textAlign": "center",
      "fontFamily": "arial",
      "display": "block",
      "border": "0",
      "backgroundColor": "white",
      "borderRadius": "25px",
    },
    "cardTitle": {
      "fontSize": "4.0rem",
      "fontFamily": "arial",
      "text": "Create a Card",
      "color": "black",
      "display": "block",
      "textAlign": "center",
      "backgroundColor": "",
      "borderRadius": "25px"
    },
    "cardParagraph1": {
      "fontFamily": "arial",
      "fontSize": "24px",
      "text": "It's seriously easy",
      "border": "0",
      "padding": "0px",
      "display": "block",
      "color": "grey",
      "backgroundColor": ""
    },
    "cardParagraph2": {
      "fontFamily": "arial",
      "fontSize": "15px",
      "border": "0",
      "padding": "0px",
      "display": "block",
      "text": "But if it's not, please let me know",
      "color": "black",
      "backgroundColor": ""
    },
    "cardParagraph3": {
      "fontFamily": "arial",
      "fontSize": "12px",
      "border": "0",
      "padding": "0px",
      "display": "none",
      "color": "black",
      "backgroundColor": ""
    },
    "cardImg": {
      "src": "",
      "display": "none",
      "alt": "This is an image which will be used later on",
      "height": "auto",
      "width": "auto",
      "minHeight": "",
      "backgroundSize": ""
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
      "text": "We even have clickable buttons",
      "borderRadius": "25px"
    }

  }
}

var mockStyleObj2 = {
  "template": "Product Card",
  "name": "Image Card",
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
      "borderRadius": "25px"
    },
    "cardTitle": {
      "fontSize": "",
      "fontFamily": "",
      "text": "",
      "color": "",
      "display": "none",
      "textAlign": "",
      "borderRadius": ""
    },
    "cardImg": {
      "background": "url(https://images.unsplash.com/photo-1550544910-8f26817ba35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80)",
      "display": "block",
      "alt": "This is an image which will be used later on",
      "height": "auto",
      "width": "100%",
      "minHeight": "300px",
      "backgroundSize": "cover",
      "borderRadius": "25px 25px 0 0"
    },
    "cardParagraph1": {
      "fontFamily": "arial",
      "fontSize": "24px",
      "text": "Riverbank",
      "border": "0",
      "padding": "0px",
      "display": "block",
      "color": "black",
      "borderRadius": "",
    },
    "cardParagraph2": {
      "fontFamily": "arial",
      "fontSize": "12px",
      "border": "0",
      "padding": "10px",
      "display": "block",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut maximus orci. Morbi consequat elementum ex sed eleifend. Phasellus quis sodales turpis, at ullamcorper purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur maximus, justo vel congue lobortis, justo odio aliquam felis, non cursus ante velit non orci. Quisque sodales, nisl quis tincidunt ultrices, dolor neque vulputate tortor, vitae egestas ante felis sed magna. Integer dolor velit, ultrices et maximus consequat, finibus sed ante. Morbi venenatis ullamcorper eros id laoreet.",
      "color": "black",
      "borderRadius": "",
    },
    "cardParagraph3": {
      "text": "",
      "fontFamily": "arial",
      "fontSize": "12px",
      "border": "0",
      "padding": "0px",
      "display": "none",
      "color": "black",
      "borderRadius": ""
    },
    "cardButton": {
      "border": "",
      "value": "0",
      "backgroundColor": "#000",
      "color": "white",
      "textAlign": "center",
      "width": "100%",
      "fontSize": "18px",
      "padding": "12px",
      "display": "none",
      "text": "",
      "borderRadius": ""
    }

  }
}




var mockJson = [
  mockStyleObj,
  mockStyleObj2
]

export default Dashboard;
