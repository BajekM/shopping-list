import {combineReducers, createStore} from 'redux';
import listsReducer from './listsRedux';

// define initial state and shallow-merge initial data
const initialState = {
  title: 'Shopping List',
  lists: [
    {
      name: 'Warzywa',
      products: ['Brokuły', 'Marchewka', 'Cebula'],
    },
  ],
};

// define reducers
const reducers = {
  lists: listsReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers
const storeReducer = combineReducers(reducers);

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
