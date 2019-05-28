import React from 'react';
import './App.css';
import './components/ButtonComponents/Button.css'
import NumberButton  from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const NumberArray =['7','8','9','4','5','6','1','2','3'];
const SymbolsArray =['÷','x' ,'-','+','='];
const button = 'button';

const App = () => {
  return (
    <div className ='app-container'>
      <CalculatorDisplay />
      <div className ='action-block'>
        <div className ='numbers-block'>
          <ActionButton  text='Clear'/>
          <div className='numbers'> 
            {NumberArray.map(number => {
              return <NumberButton key={number} text={number} buttonStyle={button}/>
            })}
          </div>
           <ActionButton  text='0'/>
        </div>
        <div className='symbols'>
        {SymbolsArray.map(number => {
          return <NumberButton key={number} text={number} buttonStyle={button}/>
        })}
        </div>
      </div>
      
     
     
      {/* <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p> */}
    </div>
  );
};

export default App;
