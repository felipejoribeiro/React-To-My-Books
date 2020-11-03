import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  // All components must have a render function
  render() {
    // The render function returns what must be printed on the screen
    return(

      <div className="App">
        
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </header>

      </div>
    )
  }
}


export default App;













