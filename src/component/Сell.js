import React from 'react';
import { useSelector } from 'react-redux';
import './Board.css';
import './pieces/pieces.css';

export default function Сell({color,piece, name}) {
    const gameDb = useSelector((state) => state.gameDbReducer);
return <td className={`${gameDb.color === 'white'?'transform': ''} ${piece} ${color}`} onClick={()=>console.log(piece, name)}></td>
}
