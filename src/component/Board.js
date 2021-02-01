import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Сell from './Сell';
import './Board.css';
import { WebSocketContext } from '../redux/WebSocket';

const COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const ROWS = ['1', '2', '3', '4', '5', '6', '7', '8']

const BOARD = []
for(const [x, ROW] of ROWS.entries()){
    const tr =[]
    for(const [y, COLUMN] of COLUMNS.entries()){
        tr.push({color :(x%2 == y%2?'white':'gray'), name:COLUMN+ROW})
    }
    BOARD.push(tr)
}


export default function Board() {
    const ws = useContext(WebSocketContext);
    const game = useSelector((state) => state.gameReducer);
    function getPiece(cell){
        let piece =null;
    
        for(let i in game.pieces){
            if(cell === i){
             piece = game.pieces[i]
            }
        }
        return piece
    }
 return <>
        <table className='table transform'>
            {BOARD.map((itemTr)=>{
                return <tr key={Math.random().toString(36).substring(7)}>
                    {itemTr.map((itemTd)=>{
                        itemTd.piece = getPiece(itemTd.name)
                        return <Сell key={Math.random().toString(36).substring(7)} {...itemTd}/>
                    })}
                </tr>
            })}
        </table>
        {/* <button onClick={()=>ws.move({from:"E2", to:"E3"})}>move</button> */}
        </>

}
