import React from 'react';
import Сell from './Сell';
import './Board.css';

let chessPieces = []
let board = []

function createBoardTr(){
    for (let y = 1; y < 9; y++) {
        let td =[]
        for (let x = 1; x < 9; x++) {
            td.push({color :(x%2 == y%2?'white':'black'), piece:'piece',  x:x, y:y})
        }
        board.push(td)
    }
}



export default function Board() {
    createBoardTr()
 return <table className='table'>
        {board.map((itemTr)=>{
            return <tr key={Math.random().toString(36).substring(7)}>
                {itemTr.map((itemTd)=>{
                    return <Сell key={Math.random().toString(36).substring(7)} {...itemTd}/>
                })}
            </tr>
        })}
        </table>
}
