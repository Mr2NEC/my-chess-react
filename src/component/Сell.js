import React from 'react';
import './Board.css';

export default function Сell({color, piece, x, y}) {
return <td className={`cell ${color} ${piece}`} onClick={()=>console.log(piece, x, y)}></td>
}
