import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Editer le fichier <code>src/App.js</code> et sauvegarder le puis rafraichir la page.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            *** Learning *** en cours de React et bonjour à tous! *** Deployé sur AWS!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
