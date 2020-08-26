import { FETCHED_lINKS } from './types';

const initialState = {
  fetchedNavLinks: []
};

export const navLinksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_lINKS:
      return { ...state, fetchedNavLinks: action.payload }
    default: return state;
  }

};