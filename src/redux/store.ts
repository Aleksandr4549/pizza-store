import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import pizzasReducer from './reducers/pizzas-reducer'
import pizzaModalReducer from './reducers/pizzaModal-reducer'
import shoppingCartReducer from './reducers/shoppingCart-reducer'

const rootReducer = combineReducers({
  pizzasPage: pizzasReducer,
  pizzaModal: pizzaModalReducer,
  shoppingCart: shoppingCartReducer
})

type RootReducerType = typeof rootReducer

export type StateType = ReturnType<RootReducerType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store