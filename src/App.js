import React, {Component} from 'react';
// import logo from './logo.svg';

// Componentes first party:
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

// Estilos para a página:
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      robots: robots,
      searchfield: ''
    }

  }
  
  // The arrow function here is very important as it passes a reference of the function and not the function. The consequence of this is that it carries the references from this class.
  onSearchChange = (event) => {
    //Reference to the state element that must be changed 
    this.setState({ searchfield: event.target.value})
    console.log(this.state.searchfield);
  }

  render(){

    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    console.log(filteredRobots);

    return(
      <div className='tc'>
        <h1> Robo Friends </h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots = {filteredRobots}/>
      </div>
    );

  }
}


export default App;













