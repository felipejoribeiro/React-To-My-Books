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

  onSearchChange(event){
    console.log(event);
  }

  render(){

    return(

      <div className='tc'>
        <h1> Hello Friends </h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots = {this.state.robots}/>
      </div>

    );

  }
}


export default App;













