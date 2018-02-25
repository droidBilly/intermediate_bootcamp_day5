// src/actions/game.js

import { CREATE_GAME } from './types'
import { MOVE } from './types'
import { fillBoard } from '../lib/game'

export const createGame = (rows = 6) => {
  const [board, locked] = fillBoard(rows)
  return {
    type: CREATE_GAME,
    payload: {
      board,
      locked
    }
  }
}

export const move = (row, col) => ({
  type: MOVE,
  payload: {
    row,
    col
  }
})
