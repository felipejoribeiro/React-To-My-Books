import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

  if(false){
    throw new Error('noo');
  }
  return(
  <div> 
    {
      //this returns list of card tags with the parameters passed
      robots.map( (user, i) => {
        return (
          <Card 
            key={robots[i].id} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
          />
        );
      }) 
    }
  </div>  
  );
}

export default CardList




