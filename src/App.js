import './App.css';

import React from 'react';
import { styled } from 'styled-components';

const OverallContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  margin-top:150px;
`

const FirstColumnContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:120px;
`

const SecondColumnContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:120px;
`

const ThirdColumnContainer = styled.div`
  display:flex;
  flex-direction:column;
`

const FourthColumnContainer = styled.div`
  display:flex;
  flex-direction:column;
`

const AnswerContainer = styled.div`
  display:flex;
  flex-direction:column;
`

const Button = styled.button`
  display:flex;
  background: transparent;
  flex-direction:column;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  height:100px;
  width:100px;
  font-size:40px;

  &:hover{
    background-color:#eb40f7;
    cursor:pointer;
  }
`

const Answer = styled.p`
  display:flex;
  justify-content:center;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  margin-top:1em;
  font-size:50px;
`

const App = () => {

  const [output,setOutput] = React.useState('');
  const [typeOfCalc,setTypeOfCalc] = React.useState('');
  const [finalFirst,setFinalFirst] = React.useState(0);
  const [firstNumber,setFirstNumber] = React.useState('');

  const calc = (num) => {
   //console.log(num);
    //firstNumber

    if (num === 'add'){
      setFinalFirst(parseInt(firstNumber));
      setFirstNumber('');
      setTypeOfCalc('add');
      setOutput(`${output}+`);
      return
    }

    if (num === 'subtract'){
      setFinalFirst(parseInt(firstNumber));
      setFirstNumber('');
      setTypeOfCalc('subtract');
      setOutput(`${output}-`);
      return
    }

    if (num === 'multiply'){
      setFinalFirst(parseInt(firstNumber));
      setFirstNumber('');
      setTypeOfCalc('multiply');
      setOutput(`${output}*`);
      return
    }

    if (num === 'divide'){
      setFinalFirst(parseInt(firstNumber));
      setFirstNumber('');
      setTypeOfCalc('divide');
      setOutput(`${output}/`);
      return
    }
    
    if (num === 'equals' && typeOfCalc === 'add'){
      const result = finalFirst+parseInt(firstNumber);
      setFinalFirst(0);
      setTypeOfCalc('');
      setFirstNumber('');
      setOutput(`${output}=${result}  `);
      return
    }

    console.log(num === 'equals' && typeOfCalc === 'subtract')

    if (num === 'equals' && typeOfCalc === 'subtract'){
      const result = finalFirst-parseInt(firstNumber)
      setFinalFirst(0);
      setTypeOfCalc('');
      setFirstNumber('');
      setOutput(`${output}=${result}  `);
      return
    }

    if (num === 'equals' && typeOfCalc === 'multiply'){
      const result = finalFirst*parseInt(firstNumber);
      setFinalFirst(0);
      setTypeOfCalc('');
      setFirstNumber('');
      setOutput(`${output}=${result}  `);
      return
    }

    if (num === 'equals' && typeOfCalc === 'divide'){
      const result = finalFirst/parseInt(firstNumber);
      setFinalFirst(0);
      setTypeOfCalc('');
      setFirstNumber('');
      setOutput(`${output}=${result}  `);
      return
    }

    setFirstNumber(`${firstNumber}${num}`);
    setOutput(`${output}${num}`)

    if(num === ''){
      console.log('Your calc has been cleared')
      setOutput('');
    }
  } 

  return (
    <div>
    <AnswerContainer>
      <Answer>{output}</Answer>
    </AnswerContainer>

    <OverallContainer className="App">

      <FirstColumnContainer>
        <Button onClick={()=>calc('1')}>1</Button>
        <Button onClick={()=>calc('4')}>4</Button>
        <Button onClick={()=>calc('7')}>7</Button>
        <Button onClick={()=>calc('')}>C</Button>
      </FirstColumnContainer>

      <SecondColumnContainer>
        <Button onClick={()=>calc('2')}>2</Button>
        <Button onClick={()=>calc('5')}>5</Button>
        <Button onClick={()=>calc('8')}>8</Button>
        <Button onClick={()=>calc('0')}>0</Button>
      </SecondColumnContainer>

      <ThirdColumnContainer>
        <Button onClick={()=>calc('3')}>3</Button>
        <Button onClick={()=>calc('6')}>6</Button>
        <Button onClick={()=>calc('9')}>9</Button>
        <Button onClick={()=>calc('equals')}>=</Button>
      </ThirdColumnContainer>

      <FourthColumnContainer>
        <Button onClick={()=>calc('add')}>+</Button>
        <Button onClick={()=>calc('subtract')}>-</Button>
        <Button onClick={()=>calc('divide')}>/</Button>
        <Button onClick={()=>calc('multiply')}>*</Button>
      </FourthColumnContainer>

    </OverallContainer>
    </div>
  );
}

export default App;
