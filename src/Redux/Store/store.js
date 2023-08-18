import { createStore ,applyMiddleware } from 'redux'
import { MovesREducer } from '../Reducer/reducer';
import thunk from 'redux-thunk'
// Create Store
export const Store = createStore(MovesREducer, applyMiddleware(thunk));