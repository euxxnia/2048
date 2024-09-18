import './Box.css';

import Box from './Box.tsx';

const Board = () => {
  const boxes = Array.from({ length: 16 }, (_, i) => <Box key={i} />);
  return <div className="board"> {boxes} </div>;
};

export default Board;
