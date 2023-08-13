import React, {useState} from 'react'
import "../App.css"
import Square from './square'

const Board = () => {
    const initialState = Array(9).fill(null)
    const [state, setState ]= useState(initialState);
    const [xTurn, setXTurn]= useState(true);
    // console.log(state)
    const handleClick =(index)=> {

     if(state[index]!= null){
        return;
     }
    // console.log("clicked on index", index)
    const newArr = [...state]
    newArr [index]= xTurn ? "X" : "O"
    setState(newArr)
    setXTurn(!xTurn);
    }
    const checkWinner = () =>{
        const winnerLogic=[ 
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

      for (let winner of winnerLogic){
       const [a,b,c]= winner;
       if (state[a] != null && state[a]=== state[b] && state [a] === state[c])
       return state[a];
      }  
      
      return false; 

    }

    const isWinner= checkWinner();

    const resetGame = () =>{
        setState(initialState)
    }

  return (
    <div className='board-container'>
       
        { isWinner ? 
        (
        <h2>{isWinner} won the game <br/>
        <button className='btnreset' onClick={resetGame}>Play Again</button>
        </h2>
        ) : (
            <>
             <h2> {xTurn? "X":"O"} turn to move</h2>
            <div className='board-row'>
            <Square onClick= {()=>handleClick(0)} value= {state[0]} />
            <Square onClick= {()=>handleClick(1)} value= {state[1]}/>
            <Square onClick= {()=>handleClick(2)} value= {state[2]}/>
        </div>
        <div className='board-row'>
            <Square onClick= {()=>handleClick(3)} value= {state[3]}/>
            <Square onClick= {()=>handleClick(4)} value= {state[4]}/>
            <Square onClick= {()=>handleClick(5)} value= {state[5]}/>
        </div>
        <div className='board-row'>
            <Square onClick= {()=>handleClick(6)} value= {state[6]}/>
            <Square onClick= {()=>handleClick(7)} value= {state[7]}/>
            <Square onClick= {()=>handleClick(8)} value= {state[8]}/>
        </div>
        
        
            </>
        )}
    </div>
  )
}

export default Board