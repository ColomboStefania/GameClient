import React from 'react'
import './Board.css'


const renderCel = (makeMove, rowIndex, cellIndex, symbol, hasTurn) => {

  let colorChange = null;

  if (symbol === 'x') {
    colorChange = "playerX"
  } else if (symbol === 'o' && cellIndex === 1 && rowIndex === 1) {
    colorChange = 'new'
  } else if (symbol === 'o') {
    colorChange = "playerO"
    } else if (symbol === 'o') {
    colorChange = "playerO"
  } else {
    colorChange = "playerDefault"
  }

  return (
    <button
      className={colorChange}
      disabled={hasTurn}
      onClick={() => makeMove(rowIndex, cellIndex)}
      key={`${rowIndex}-${cellIndex}`}
    >{symbol || '-'}</button>
  )
}


export default ({board, makeMove}) => board.map((cells, rowIndex) =>
  <div key={rowIndex}>
    {cells.map((symbol, cellIndex) => renderCel(makeMove, rowIndex, cellIndex,symbol, false))}
  </div>
)
