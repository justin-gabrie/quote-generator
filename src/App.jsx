import React from 'react';
import Quote from './components/Quote';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Quote Generator</h1>
        <p>Discover Inspiring Quotes from Some of History&apos;s Most Famous Figures</p>
        <Quote />
      </div>
    );
  }
}

export default App;
