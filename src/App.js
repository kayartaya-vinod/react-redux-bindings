import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="row">
          <div className="col-md-4">
            <ContactForm />
          </div>
          <div className="col-md-8">
            <ContactList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
