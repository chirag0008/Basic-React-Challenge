import React from 'react';

const FirstFile = () => {
  let currTime=new Date();
  currTime=currTime.getHours();
  let greeting="";
  let cssStyle={};
  if(currTime>=1 && currTime<=11){
    greeting="Good Morning";
    cssStyle.color='green';
  }
  else if(currTime>=12 && currTime<19){
    greeting="Good Afternoon";
    cssStyle.color='orange';
  }
  else{
    greeting="Good Night";
    cssStyle.color="black";
  }
    return(
      <>
  <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
      </>
    )
}

export default FirstFile