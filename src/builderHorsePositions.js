const xCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const allowableMovements = [
  { x: -1, y: 2 },
  { x: -2, y: 1 },
  { x: -2, y: -1 },
  { x: -1, y: -2 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 2, y: -1 },
  { x: 1, y: -2 },
];

const getX = (coord) => {
  const letter = coord.split('')[0].toLowerCase();
  const numX = xCoords.findIndex(e => (e === letter)) + 1;
  return numX;
};
const getY = coord => (coord.split('')[1]);

const decodeCoord = (coord) => {
  const x = parseInt(getX(coord), 10);
  const y = parseInt(getY(coord), 10);
  return { x, y };
};

const encodeCoord = (x, y) => {
  const letter = xCoords[x - 1].toUpperCase();
  const num = y;
  return `${letter}${num}`;
};

const coordIsCorrect = (x, y) => {
  const xIsCorrect = x > 0 && x < 9;
  const yIsCorrect = y > 0 && y < 9;
  return xIsCorrect && yIsCorrect;
};

const getAllowableCoords = (x, y) => (
  allowableMovements
    .map((movements) => {
      const newX = movements.x + x;
      const newY = movements.y + y;
      return coordIsCorrect(newX, newY) ? { x: newX, y: newY } : null;
    })
    .filter(e => (e !== null))
);

const build = (currentCoord) => {
  const { x, y } = decodeCoord(currentCoord);
  return getAllowableCoords(x, y).map(coords => (encodeCoord(coords.x, coords.y)));
};

export default build;
