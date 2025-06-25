import './App.css';
import {useState} from 'react';

function App() {
  const [count,setCount] = useState(0);

  const IncreaseCount = () =>{
        console.log(count+1);
        setCount(count+1);
    }
    const DecreaseCount = () =>{
        console.log(count-1);
         setCount(count-1);
    }
    return(
      <>
      <div>
      <h1 className='number'>{count}</h1>
      <button onClick={IncreaseCount} className='buttons'>Increase</button> 
      <button onClick={DecreaseCount} className='buttons'>Decrease</button>
      </div>
      </>
    );
  }

export default App;
