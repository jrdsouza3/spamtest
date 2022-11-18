
import './App.css';
import { Button, TextField } from '@mui/material';
import React,{useState} from 'react';

 

function App() {


  const [color, setColor] = useState("success")
  const [disabled, setdisabled] = useState(false)


  const disabler = time => new Promise(
    resolve => setTimeout(resolve, time)
  );

  async function chang() {
 
    setdisabled(true)
    if (color === "success")
    {
      setColor("error")
    }
    if (color ===  "error")
    {
      setColor("success")
    }
   await disabler(1000)
     setdisabled(false)

  }

  const send = () => {
    fetch("/testing").then(response => response.json())
    .then(data =>{
        console.log(data.message);
      })
  }

  return (
    <div className="App">
      <Button disabled = {disabled} variant = "outlined" color = {color} onClick={chang}>Test Button alert </Button>
      <Button variant = "outlined" onClick={send}> Back end button </Button>
    </div>
  );
}

export default App;
