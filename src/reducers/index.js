import { combineReducers } from 'redux'
import {
  ADD_ITEM
} from '../actions/index'



const initialState = {
  sunday: {
    items:null
  },
  monday: {
    items:null
  },
  tuesday: {
    items:null
  },
  wednesday: {
    items:null
  },
  thursday: {
    items:null
  },
  friday: {
    items:null
  },
  saturday: {
    items:null
  },
}


function calendar(state = initialState, action ){

  const { day, items } = action

  switch (action.type){
    case ADD_ITEM:
      return {
        ...state,
        [day]:{
          ...state[day],
          [items]: items
        }
      }
    default:
      return state
  }
}

export default combineReducers({
  calendar,
})