import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "./static/js/widget_bundle.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is the main App. 
          </p>
        </header>
        <div id="widget" />
      </div>
    );
  }
}

export default App;
