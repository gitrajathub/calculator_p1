import React, { useState } from 'react';

function Home() {

    const [solution, setSolution] = useState('0');
    const [input, setInput] = useState('');
  
    const clear = () => {
        setSolution('0');
        setInput('');
      };

    
    const handleNumberClick = (num) => {
        if (solution === '0' && num === '0') return;
        setInput(input + num);
        if (solution === '0') {
        setSolution(num);
        } else {
        setSolution(solution + num);
        }
    };

    const handleOperatorClick = (operator) => {
        if (input !== '') {
        setInput('');
        setSolution(solution + operator);
        }
    };

    const round = () => {
    setInput('');
    setSolution(Math.round(parseFloat(solution)).toString());
    };


    const calculate = () => {
        if (input !== '') {
            setInput('');
            try {
                setSolution(eval(solution).toString());
            } catch (error) {
                setSolution('Error');
            }
        }
    };


    return(
        <>
            <div className="flex justify-center text-center items-center h-screen w-screen font-semibold">
                
                <div className="flex flex-col justify-center text-center items-center h-screen w-screen">
                    <p className="text-2xl text-gray-400 font-bold">Calculator</p>
                    
                    
                    <div className="flex flex-col border-4 border-gray-300 rounded-lg p-8 w-1/3 m-4">
                        
                        <div>
                            <p className="flex w-full justify-center border-2 rounded-4 p-2 bg-gray-100">{solution}</p>
                        </div>
                    
                        <div className=" mt-4">
                            <button onClick={clear} className="reset w-1/4 py-2 bg-blue-200 border-2 border-white hover:active:bg-blue-300">Reset</button>    
                            <button onClick={round} className="round w-1/4 py-2 bg-blue-200 border-2 border-white hover:active:bg-blue-300">Round</button>    
                            <button onClick={() => handleOperatorClick('%')} className="percentage w-1/4 py-2 bg-blue-200 border-2 border-white hover:active:bg-blue-300">%</button>    
                            <button onClick={clear} className="clear w-1/4 py-2 bg-red-400 border-2 border-white hover:active:bg-red-500">Clear</button>    
                            <button onClick={() => handleNumberClick('9')} className="nine w-1/4 py-2 bg-gray-200 border-2 border-white hover:active:bg-gray-300">9</button>    
                            <button onClick={() => handleNumberClick('8')} className="eight w-1/4 py-2 bg-gray-200 border-2 border-white hover:active:bg-gray-300">8</button>    
                            <button onClick={() => handleNumberClick('7')} className="seven w-1/4 py-2 bg-gray-200 border-2 border-white hover:active:bg-gray-300">7</button>    
                            <button onClick={() => handleOperatorClick('+')} className="add w-1/4 py-2 bg-blue-200 border-2 border-white hover:active:bg-blue-300">+</button>
                            <button onClick={() => handleNumberClick('6')} className="six w-1/4 py-2 bg-gray-200 border-2 border-white hover:active:bg-gray-300">6</button>    
                            <button onClick={() => handleNumberClick('5')} className="five w-1/4 py-2 bg-gray-200 border-2 border-white hover:active:bg-gray-300">5</button>    
                            <button onClick={() => handleNumberClick('4')} className="four w-1/4 py-2 bg-gray-200 border-2 border-white hover:active:bg-gray-300">4</button>    
                            <button onClick={() => handleOperatorClick('-')} className="minus w-1/4 py-2 bg-blue-200 border-2 border-white hover:active:bg-blue-300">-</button>
                            <button onClick={() => handleNumberClick('3')} className="three w-1/4 py-2 bg-gray-200 border-2 border-white hover:active:bg-gray-300">3</button>    
                            <button onClick={() => handleNumberClick('2')} className="two w-1/4 py-2 bg-gray-200 border-2 border-white hover:active:bg-gray-300">2</button>    
                            <button onClick={() => handleNumberClick('1')} className="one w-1/4 py-2 bg-gray-200 border-2 border-white hover:active:bg-gray-300">1</button>    
                            <button onClick={() => handleOperatorClick('*')} className="multiply w-1/4 py-2 bg-blue-200 border-2 border-white hover:active:bg-blue-300">*</button>
                            <button onClick={() => handleNumberClick('.')} className="point w-1/4 py-2 bg-blue-200 border-2 border-white hover:active:bg-blue-300">.</button>    
                            <button onClick={() => handleNumberClick('0')} className="zero w-1/4 py-2 bg-gray-200 border-2 border-white hover:active:bg-gray-300">0</button>    
                            <button onClick={calculate} className="equalto w-1/4 py-2 bg-green-300 border-2 border-white hover:active:bg-green-400">=</button>    
                            <button onClick={() => handleOperatorClick('/')} className="w-1/4 py-2 bg-blue-200 border-2 border-white hover:active:bg-blue-300">/</button>    
                        </div>
                   
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home; 

