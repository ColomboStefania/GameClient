import React from 'react'
import './Board.css'


const renderCel = (makeMove, rowIndex, cellIndex, symbol, hasTurn) => {

  let colorChange = null;

  if (symbol === 'o' && cellIndex === 2 && rowIndex === 2) {
    colorChange = 'mediummushroom'
  } else if (symbol === 'x' && cellIndex === 2 && rowIndex === 2) {
    colorChange = 'mediummushroom'
  } else if (symbol === 'o' && cellIndex === 0 && rowIndex === 8) {
    colorChange = 'mediummushroom'
  } else if (symbol === 'x' && cellIndex === 0 && rowIndex === 8) {
    colorChange = 'mediummushroom'
  } else if (symbol === 'o' && cellIndex === 2 && rowIndex === 9) {
    colorChange = 'smallmushroom'
  } else if (symbol === 'x' && cellIndex === 2 && rowIndex === 9) {
    colorChange = 'smallmushroom'
  } else if (symbol === 'o' && cellIndex === 3 && rowIndex === 5) {
    colorChange = 'smallmushroom'
  } else if (symbol === 'x' && cellIndex === 3 && rowIndex === 5) {
    colorChange = 'smallmushroom'
  } else if (symbol === 'o' && cellIndex === 5 && rowIndex === 3) {
    colorChange = 'bigmushroom'
  } else if (symbol === 'x' && cellIndex === 5 && rowIndex === 3) {
    colorChange = 'bigmushroom'
  } else if (symbol === 'o' && cellIndex === 5 && rowIndex === 7) {
    colorChange = 'smallmushroom'
  } else if (symbol === 'x' && cellIndex === 5 && rowIndex === 7) {
    colorChange = 'smallmushroom'
  } else if (symbol === 'o' && cellIndex === 7 && rowIndex === 5) {
    colorChange = 'mediummushroom'
  } else if (symbol === 'x' && cellIndex === 7 && rowIndex === 5) {
    colorChange = 'mediummushroom'
  } else if (symbol === 'o' && cellIndex === 8 && rowIndex === 1) {
    colorChange = 'mediummushroom'
  } else if (symbol === 'x' && cellIndex === 8 && rowIndex === 1) {
    colorChange = 'mediummushroom'
  } else if (symbol === 'o' && cellIndex === 8 && rowIndex === 8) {
    colorChange = 'smallmushroom'
  } else if (symbol === 'x' && cellIndex === 8 && rowIndex === 8) {
    colorChange = 'smallmushroom'
  } else if (symbol === 'o' && cellIndex === 9 && rowIndex === 3) {
    colorChange = 'smallmushroom'
  } else if (symbol === 'x' && cellIndex === 9 && rowIndex === 3) {
    colorChange = 'smallmushroom'
  } else if (symbol === 'x' && cellIndex === 9 && rowIndex === 9) {
    colorChange = 'poison'
  } else if (symbol === 'o' && cellIndex === 9 && rowIndex === 9) {
    colorChange = 'poison'
  } else if (symbol === 'x' && cellIndex === 0 && rowIndex === 9) {
    colorChange = 'poison'
  } else if (symbol === 'o' && cellIndex === 0 && rowIndex === 9) {
    colorChange = 'poison'
  } else if (symbol === 'o') {
    colorChange = "playerO"
  } else if (symbol === 'x') {
    colorChange = "playerX"
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
