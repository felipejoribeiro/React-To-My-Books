import React from 'react';
// React has this JSX syntax where we can write HTML inside JavaScript

const Card = (props) => {
  // Takes arguments from props. Can be done over with "Card = ({name, email, id})"
  const {name, email, id} = props;
  
  return(
    // Everything is put in a div because each component can only return one HTML element.
    // There is a way of not using div all the time, you cam use react.fragment, which can be done using <></>, this will not be done here because is better to have a div for the card
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      
      <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>

      <div> 
        <h2>{name}</h2>
        <p>{email}</p>
      </div>

    </div> 
  );
}


export default Card;






















