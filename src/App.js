import React, { Component } from 'react';
import './App.css';
import Landing from './pages/Landing/Landing.js';
import DragDrop from './pages/DragDrop/DragDrop.js';

class App extends Component {
  render() {
    return (
      <div>
        {/* < Landing text='Create Cards Without Code' /> */}
        < DragDrop />
      </div>
    );
  }
}

export default App;
