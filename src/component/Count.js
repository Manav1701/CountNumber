import React from 'react'

const count = (props) =>
{ 
    const IncreaseCount = () =>{
        console.log(props.count+1);
         props.setcount = props.count+1;
    }
    const DecreaseCount = () =>{
        console.log(props.count+1);
         props.setcount = props.count-1;
    }

    return(
     <>
       <button onClick={IncreaseCount}>Increase</button> 
       <button onClick={DecreaseCount}>Increase</button> 
     </>
  )
}