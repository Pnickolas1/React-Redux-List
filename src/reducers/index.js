import { combineReducers } from 'redux'
import {
  ADD_ITEM,
  REMOVE_FROM_CALENDAR,
} from '../actions/index'

let itemCounter = 0;
const initialState = [
  {
    item: null,
    id: itemCounter + 1,
  }
]


function toDoList(state = initialState, action ){

const { text, id } = action

  switch (action.type){
    case ADD_ITEM:
      return [
        ...state,
        {
        id: action.id,
        item: action.text
        }
      ];


    default:
      return state
  }
}

export default combineReducers({
  toDoList,
})