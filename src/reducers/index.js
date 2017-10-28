import { combineReducers } from 'redux'
import {
  ADD_ITEM,
} from '../actions/index'

const initialState = []

function toDoList(state = initialState, action ){

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