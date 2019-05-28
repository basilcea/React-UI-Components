import React,{useState} from 'react';
import './App.css';
import './components/ButtonComponents/Button.css'
import NumberButton  from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const NumberArray =[{value:'7'},{value:'8'},{value:'9'},{value:'4'},{value:'5'},{value:'6'},{value:'1'},{value:'2'},{value:'3'}];
const SymbolsArray =[{id:'10',label:
  '÷',value:'/'}, {id:'11',label:'x',value:'*'} ,{id:'12', label:'-', value:'-'},{id:'13',label:'+',value:'+'},{id:'14',label:'=',value:'='}];
const button = 'button';

const App = () => {
  const [total , setTotal] = useState(0);

  const

  return (
    <div className ='app-container'>
      <CalculatorDisplay   />
      <div className ='action-block'>
        <div className ='numbers-block'>
          <ActionButton  text='Clear'/>
          <div className='numbers'> 
            {NumberArray.map(number => {
              return <NumberButton key={number.value}  text={number.value} buttonStyle={button} />
            })}
          </div>
           <ActionButton  text='0'/>
        </div>
        <div className='symbols'>
        {SymbolsArray.map(symbol => {
          return <NumberButton key={symbol.id}  text={symbol.label} buttonStyle={button}/>
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
