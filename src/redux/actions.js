import { FETCHED_lINKS } from './types';

export function fetchNavLinks() {
  return async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const json = await response.json();
    dispatch({type: FETCHED_lINKS, payload: json})
  }
}