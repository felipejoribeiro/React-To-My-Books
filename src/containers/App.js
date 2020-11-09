import React, {Component} from 'react';
// import logo from './logo.svg';

// Componentes first party:
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
// Estilos para a página:
import './App.css';

// This is called smart component because it has state. 
// Components without state are called dummy components.
class App extends Component {
  constructor(){
    super()

    this.state = {
      robots: [],
      searchfield: ''
    }

  }
  
  //This function is called after the render function. This triggers the render function again.
  componentDidMount(){
    // this grab the robots from the robots.js file.
    // this.setState({robots:robots})
    // Take information from online api, something more close to real projects:
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({ robots: users })});
  }
  
  // The arrow function here is very important as it passes a reference of the function and not the function. The consequence of this is that it carries the references from this class.
  onSearchChange = (event) => {
    //Reference to the state element that must be changed 
    this.setState({ searchfield: event.target.value})
  }

  render(){
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1> Robo Friends </h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots = {filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }


export default App;













