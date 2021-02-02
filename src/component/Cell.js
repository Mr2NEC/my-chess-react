import React from 'react';
import _ from 'lodash';
import './pieces/pieces.css'

export default (props) => {
  const { cellId, coords: { x, y }, onClick, selectedCells, piece } = props;
  const cellColor = cellIsSelected(cellId, selectedCells) ? 'selected' : getColor(x, y);
  const colorClass = `game-field__cell__color-${cellColor}`;
  return(
    <div
      className={`game-field__cell ${colorClass} ${piece}`}
      onClick={onClick}
    />
  );
}

const isEven = (n) => (n % 2 === 0);
const isOdd = (n) => (n % 2 === 1);
const getColor = (x, y) => {
  if (isOdd(x) && isEven(y)) {
    return 'white';
  }
  if (isEven(x) && isOdd(y)) {
    return 'white';
  }
  if (isEven(x) && isEven(y)) {
    return 'gray';
  }
  if (isOdd(x) && isOdd(y)) {
    return 'gray';
  }
}
const cellIsSelected = (cellId, selectedCells) => {
  return _.findIndex(selectedCells, (e) => (e === cellId)) > -1;
}