import React, { Component } from 'react';
import { Row, Col, Input } from 'react-materialize';
import './DragDrop.css';
import renderHTML from 'react-render-html';

class DragDrop extends Component {
  state = {
    "data": mockJson,
    "selected": mockJson[0].code,
  }


  handleChange = event => {
    this.setState({ selected: event.target.value })
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
          <Col s={4}>
            <div className='components'>
              <h3>Select Card Template</h3>
              <Input s={12} type='select' defaultValue='2' onChange={this.handleChange}>
                {cardOptions}
              </Input>
            </div>
          </Col>


          <Col s={4}>
            <div className='card-render' contentEditable='true'>
              {renderHTML(this.state.selected)}
            </div>
          </Col>

          <Col s={4}>
            <div className='console'>
              This pane will be for editing the Cards Styling and the console output.
                        </div>
          </Col>
        </Row>
      </div>
    );
  }
}

var testing = `
<style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
  }

  .paragraph-1 {
    color: grey;
    font-size: 22px;
  }

  .card button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }

  .card button:hover {
    opacity: 0.7;
  }
</style>

<div>
  <div class="card" contentEditable='true'>
    <h1 class=''>Card Template</h1>
    <p class="paragraph-1">$19.99</p>
    <p>You could replace all this text with stuff you want to talk about.</p>
    <p><button>Click Here For More</button></p>
  </div>
</div>
`;

var materialTest = `
<style>

.card {
  display: inline-block;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
  margin: 20px;
  position: relative;
  margin-bottom: 50px;
  transition: all .2s ease-in-out;
}

.card:hover {
  /*box-shadow: 0 5px 22px 0 rgba(0,0,0,.25);*/
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  margin-bottom: 54px;
}

.image {
  height: 200px;
  opacity: .7;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

.image:hover,
.card:hover .image {
  height: 200px;
  opacity: 1;
}

.text {
  background: #FFF;
  padding: 20px;
  min-height: 200px;
}

.text p {
  margin-bottom: 0px;
}

.fab {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  margin-top: -50px;
  right: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, .3);
  color: #fff;
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  background: #0066A2;
  -webkit-transition: -webkit-transform .2s ease-in-out;
  transition: transform .2s ease-in-out;
}

.fab:hover {
  background: #549D3C;
  cursor: pointer;
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

</style>

  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-8 col-xs-12 col-md-offset-3 col-sm-offset-2">
        <div class="card">

          <div class="image">
            <img src="https://images.unsplash.com/photo-1534639077088-d702bcf685e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=39cd83b1cb4089e47a612a8a3bdebbcd&auto=format&fit=crop&w=1301&q=80" width="100%">
          </div>

          <div class="text">
            
            <div class="fab">&#43;</div>

            <h3>This is an example of a card in material design</h3>
            <p>This should work as a really nice starting point for helping you build out your web development projects with some nice looking front-end cards.</p>

          </div>

        </div>
      </div>
    </div>
  </div>
  `;

var stickynote = `
<style>
 .postit {
  line-height: 1;
  text-align:center;     
  width: 275px;    
  margin: 25px;    
  min-height:250px;
  max-height:250px;
  padding-top:35px;
  position:relative;   
  border:1px solid #E8E8E8;  
  border-top:60px solid #fdfd86;
  font-family:'Reenie Beanie';    
  font-size:22px;      
  border-bottom-right-radius: 60px 5px;
  display:inline-block;    
   background: #ffff88; /* Old browsers */
background: -moz-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, right bottom, color-stop(81%,#ffff88), color-stop(82%,#ffff88), color-stop(82%,#ffff88), color-stop(100%,#ffffc6)); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* Opera 11.10+ */
background: -ms-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* IE10+ */
background: linear-gradient(135deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%); /* W3C */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffffc6',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
 
.postit:after {     
   content: "";
  position:absolute;
  z-index:-1;
  right:-0px; bottom:20px;
  width:200px;
  height: 25px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow:2px 15px 5px rgba(0, 0, 0, 0.40);
-moz-transform: matrix(-1, -0.1, 0, 1, 0, 0);
 -webkit-transform: matrix(-1, -0.1, 0, 1, 0, 0);
      -o-transform: matrix(-1, -0.1, 0, 1, 0, 0);
     -ms-transform: matrix(-1, -0.1, 0, 1, 0, 0);
         transform: matrix(-1, -0.1, 0, 1, 0, 0);
}
</style>

<div class='postit'> This is for those of you that want a sticky note template <br> Something stylish and custom looking for your projects  </div>
`;

var mockJson = [
  {
    "name": "Product Card",
    "code": testing
  },
  {
    "name": "Material Card",
    "code": materialTest
  },
  {
    "name": "Sticky Card",
    "code": stickynote
  }
]

export default DragDrop;
