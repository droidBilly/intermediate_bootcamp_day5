import { CREATE_GAME } from '../actions/types'

// export default function(state = [], action = {}) {
//   switch(action.type) {
//     case 'NEW_GAME' :
//       return [].concat(action.payload)
export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case CREATE_GAME :
      return [].concat(payload.board)
    default :
      let board = new Array(6)
      for (let i = 0; i < 6; i++)
      {
        board[i] = new Array(6).fill(0,0,6)
      }
      return state = board
  }
}
