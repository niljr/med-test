import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactForm />
        <ContactList />
      </div>
    );
  }
}

export default App;
