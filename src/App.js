import React, { Component } from 'react';
import './App.css';
import Landing from './pages/Landing/Landing.js';
import Dashboard from './pages/Dashboard/Dashboard.js';

class App extends Component {
  render() {
    return (
      <div>
        {/* < Landing text='Create Cards Without Code' /> */}
        < Dashboard />
      </div>
    );
  }
}

export default App;
