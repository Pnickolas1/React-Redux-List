export const ADD_ITEM = 'ADD-ITEM';
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR';

export function addItem ({ day, item }){
  return {
    type: ADD_ITEM,
    day,
    item,
  }
}


export function removeFromCalendar({ day, item}){
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    item,
  }
}


