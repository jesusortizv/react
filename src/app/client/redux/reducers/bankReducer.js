import * as types from '../actions/actionTypes';
import initialState from './initialState.js';

export default function bankReducer(state = initialState.selectedBanks, action) {
  switch(action.type) {
    case types.BANK_SELECT:
      return [
        ...state,
        Object.assign({}, action.bank)
      ];
    default:
      return state;
  }
}
