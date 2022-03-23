import { createStore, combineReducers, applyMiddleware } from 'redux';
import { numberOfClicksReducer, fetchPostReducer } from './reducers';
import thunk from 'redux-thunk';

// this is what your state looks like
const rootReducer = combineReducers({
	numberOfClicks: numberOfClicksReducer,
	numberOfPosts:  fetchPostReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState());
