import React, { useState } from 'react'

export default function XOGame()
{
    const [Board,SetBoard]= useState
    (
        [
            "", "", "",
            "", "", "",
            "", "", ""
        ]
    );
    const [Player,SetPlayer]=useState("X");
    const handleclick=(index)=>
    {
        if(Board[index] !== "")
        {
            return;
        }
        const newBoard=[...Board];

        newBoard[index]=Player;

        SetBoard(newBoard);

        SetPlayer(Player== "X" ? "O" : "X");
    };
  return (

    <div>
        <h1>XO GAME</h1>
        <div className='Board'>
            {Board.map((value,index)=>
            ( 
                <button key={index}
                onClick={()=>   handleclick(index)}
                >
                    {value}
                </button>
            )
            )}
            
             </div>
    </div>
  )
}
