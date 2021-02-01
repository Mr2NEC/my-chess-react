import React from 'react';
import './Board.css';
import './pieces/pieces.css';

export default function Сell({color,piece, name}) {
return <td className={`transform ${piece} ${color}`} onClick={()=>console.log(piece, name)}></td>
}
