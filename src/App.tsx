import React from 'react';
import './App.css';
import {Input} from "components/Input"

function App() {

  const Sum = () => {
    const numberOne = document.getElementById("number1") as HTMLInputElement
    const numberTwo = document.getElementById("number2") as HTMLInputElement
    const Result = parseInt(numberOne.value) + parseInt(numberTwo.value)
    const NumberRst = document.getElementById("NumberResult") as HTMLParagraphElement
    NumberRst.innerHTML = Result.toString()
  }

  return (
    <div className='homePage'>
      <div>
        <p className='homeName'>
          <strong> {process.env.REACT_APP_NAME_HOME} </strong>
        </p>

        <div className='homeInput'>
          <Input id="number1"/>
          <Input id="number2"/>
        </div>

        <div className='homeButton'>
          <button onClick={Sum} >+</button>
        </div>

        <div className='homeResult'>
           <label id="NumberResult"> </label>
        </div>

      </div>
    </div>
  );
}

export default App;
