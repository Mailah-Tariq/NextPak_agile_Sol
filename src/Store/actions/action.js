// actions/action.js

export const ADD_DIGIT = 'ADD_DIGIT';
export const CLEAR_NUMBER = 'CLEAR_NUMBER';
export const ADD_TO_CALL_LOGS = 'ADD_TO_CALL_LOGS';
export const DELETE_CALL_LOG = 'DELETE_CALL_LOG';
export const SAVE_CONTACT = 'SAVE_CONTACT';
export const DELETE_LAST_DIGIT = 'DELETE_LAST_DIGIT';

export const addDigit = (digit) => ({ type: ADD_DIGIT, payload: digit });
export const clearNumber = () => ({ type: CLEAR_NUMBER });
export const addToCallLogs = (number) => ({ type: ADD_TO_CALL_LOGS, payload: number });
export const deleteCallLog = (id) => ({ type: DELETE_CALL_LOG, payload: id });
export const saveContact = (contact) => ({ type: SAVE_CONTACT, payload: contact });
export const deleteLastDigit = () => ({ type: DELETE_LAST_DIGIT });

export const ADD_FAVORITE_CONTACT = 'ADD_FAVORITE_CONTACT';

export const addFavoriteContact = (contact) => ({
    type: ADD_FAVORITE_CONTACT,
    payload: contact,
});
export const REMOVE_FAVORITE_CONTACT = 'REMOVE_FAVORITE_CONTACT';

export const removeFavoriteContact = (contact) => ({
    type: REMOVE_FAVORITE_CONTACT,
    payload: contact,
});