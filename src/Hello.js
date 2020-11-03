import React, {Component} from 'react';
import './Hello.css'

class Hello extends Component{
  
  render(){

    return(
      
      <div>
        <h1 className='oi'>Hello</h1>
        <p> Welcome to React</p>
        <p> With good parameters from app: {this.props.greeting}  </p>
      </div>
    )

  };

}

export default Hello;
