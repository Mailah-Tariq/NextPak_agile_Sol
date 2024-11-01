
import {
  ADD_FAVORITE_CONTACT,
  ADD_DIGIT,
  CLEAR_NUMBER,
  ADD_TO_CALL_LOGS,
  DELETE_CALL_LOG,
  SAVE_CONTACT,
  DELETE_LAST_DIGIT,
  REMOVE_FAVORITE_CONTACT
} from '../actions/action';

const initialState = {
  dialedNumber: '',
  callLogs: [],
  contacts: [],
  favorites: [], // Array to store favorite contacts
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DIGIT:
      return { ...state, dialedNumber: state.dialedNumber + action.payload };
    case CLEAR_NUMBER:
      return { ...state, dialedNumber: '' };
    case ADD_TO_CALL_LOGS:
      const newLog = { id: Date.now(), number: action.payload, time: new Date().toLocaleTimeString() };
      return { ...state, callLogs: [...state.callLogs, newLog] };
    case DELETE_CALL_LOG:
      return { ...state, callLogs: state.callLogs.filter((log) => log.id !== action.payload) };
    case SAVE_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case DELETE_LAST_DIGIT:
      return { ...state, dialedNumber: state.dialedNumber.slice(0, -1) };
    case ADD_FAVORITE_CONTACT:
      return { ...state, favorites: [...state.favorites, action.payload] }; // Add to favorites
     case REMOVE_FAVORITE_CONTACT:
        return { 
          ...state, 
          favorites: state.favorites.filter((favorite) => favorite.number !== action.payload.number),
        };
      default:
      return state;
  }
}

export default reducer;
