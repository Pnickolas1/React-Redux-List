import { combineReducers } from 'redux'
import {
  ADD_ITEM,
  REMOVE_FROM_CALENDAR,
} from '../actions/index'

let itemCounter = 0;
const initialState = {
  items: {
    item: null,
    id: itemCounter + 1,
  }
}


function calendar(state = initialState, action ){

const { day, item, id } = action

  switch (action.type){
    case ADD_ITEM:
      return {
        ...state,
        [day]:{
          ...state[day],
          [item]: item,
          id: id,
        }
      }
    case REMOVE_FROM_CALENDAR:
      return {
        ...state,
        [day]: {
          ...state[day], 
          [item]: null
        }
      }

    default:
      return state
  }
}

export default combineReducers({
  calendar,
})