export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR';

let itemId = 0;

export function addItem ({  item }){
  return {
    type: ADD_ITEM,
      id : itemId ++,
      item,
  }
}


export function removeFromCalendar({ id, item}){
  return {
    type: REMOVE_FROM_CALENDAR,
    id,
    item,
  }
}


