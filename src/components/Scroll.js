import React from 'react';

const Scroll = (props) => {
  return (
    //The double brackets are for indicating css styles for JavaScript
    <div style={{overflowY:'scroll', border: '5px solid black', height: '600px'}}>
      {props.children} 
    </div>
    
  );

}

export default Scroll;
