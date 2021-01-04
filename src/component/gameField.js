import React from 'react';
import './gameField.css';
import Cell from './cell';
import buildHorsePositions from '../builderHorsePositions';

/*
 * Coords
 *   X coords: xDigit-xLetter
 *   1-A 2-B 3-C 4-D 5-E 6-F 7-G 8-H
 * 8
 * 7
 * 6
 * 5
 * 4
 * 3
 * 2
 * 1
 */

export default class GameField extends React.Component {

  state = { selectedCells: [] }

  handleCkick (position) {
    const allowablePositions = buildHorsePositions(position);
    this.setState({ selectedCells: allowablePositions })
  }

  buildField () {
    const { xCoords, yCoords } = this.props;
    const sideSize = xCoords.length;
    return(
      yCoords.map((numRow) => {
        return(
          <div
            key={`row-${numRow}`}
            className="game-field__row"
          >
            {this.buildRow(numRow, sideSize)}
          </div>
        );
      })
    );
  }

  buildRow (numRow, sideSize ) {
    const { xCoords } = this.props;
    const { selectedCells } = this.state;
    return(
      xCoords.map((letter, i) => {
        const cellId = `${letter}${numRow}`;
        const coords = { x: i + 1, xLetter: letter, y: numRow };
        const onClick = () => { this.handleCkick(cellId) };
        const props = { cellId, coords, onClick, selectedCells };
        return <Cell key={cellId} { ...props } />;
      })
    );
  }

  render() {
    return (
      <div className="game-field">
        {this.buildField()}
      </div>
    );
  }
}
