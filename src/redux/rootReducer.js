import { combineReducers } from 'redux';
import { navLinksReducer } from './navLinksReducer';

export const rootReducer = combineReducers({
  navLinks: navLinksReducer
});