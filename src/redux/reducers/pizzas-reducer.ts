import {PizzasType} from '../../db/db'
import {StateType} from '../store';
import {ThunkAction} from 'redux-thunk';
import axios from 'axios';

const SET_PIZZAS = 'SET_PIZZAS'
const CATEGORIES_SHOW = 'CATEGORIES_SHOW'
const PRICE_FILTER = 'PRICE_FILTER'
const POPULARITY_FILTER = 'POPULARITY_FILTER'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

interface InitialState {
  pizzas: PizzasType
  categoriesTypes: Array<string>
  selectedCategory: string
  isFetching: boolean
}

export interface PizzasCategories {
  categoryName: string
  isShow: boolean
}

interface SetPizzas {
  type: typeof SET_PIZZAS
  payload: PizzasType
}

interface CategoriesShow {
  type: typeof CATEGORIES_SHOW
  payload: string
}

interface PriceFilter {
  type: typeof PRICE_FILTER
}

interface PopularityFilter {
  type: typeof POPULARITY_FILTER
}
interface ToggleIsFetching {
  type: typeof TOGGLE_IS_FETCHING
}

type Actions = SetPizzas | CategoriesShow | PriceFilter | PopularityFilter | ToggleIsFetching

const initialState = {
  pizzas: [],
  categoriesTypes: ['все', 'мясные', 'вегетарианские', 'открытые', 'закрытые'],
  selectedCategory: 'все',
  isFetching: false
} as InitialState

const pizzasReducer = (state = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case SET_PIZZAS:
      return {...state, pizzas: action.payload}
    case CATEGORIES_SHOW:
      return {
        ...state,
        selectedCategory: action.payload,
        pizzas: action.payload === 'все' ? state.pizzas.map(pizza => ({...pizza, isShow: true}))
          : state.pizzas.map(pizza => pizza.types.includes(action.payload)
            ? {...pizza, isShow: true} : {...pizza, isShow: false})
      }
    case PRICE_FILTER:
      return {
        ...state,
        pizzas: state.pizzas.sort((a, b) => {
          if (a.minPrice > b.minPrice) {
            return 1
          } else if (a.minPrice < b.minPrice) {
            return -1
          } else {
            return 0
          }
        })
      }
    case POPULARITY_FILTER:
      return {
        ...state,
        pizzas: state.pizzas.sort((a, b) => {
          if (a.popularity > b.popularity) {
            return -1
          } else if (a.popularity < b.popularity) {
            return 1
          } else {
            return 0
          }
        })
      }
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: !state.isFetching}
    default:
      return state
  }
}

const setPizzas = (pizzas: PizzasType): SetPizzas => {
  return {
    type: SET_PIZZAS,
    payload: pizzas
  }
}

export const categoriesShow = (condition: string): CategoriesShow => {
  return {
    type: CATEGORIES_SHOW,
    payload: condition
  }
}

const toggleIsFetching = (): ToggleIsFetching => ({type: TOGGLE_IS_FETCHING})

export const setPizzasTC = (): ThunkAction<Promise<void>, StateType, unknown, Actions> => {
  return async (dispatch) => {
    dispatch(toggleIsFetching())
    const pizzasRequest = await axios.get('http://localhost:3001/pizzas')
    dispatch(setPizzas(pizzasRequest.data))
    dispatch(toggleIsFetching())
  }
}

export const priceFilter = (): PriceFilter => ({type: PRICE_FILTER})

export const popularityFilter = (): PopularityFilter => ({type: POPULARITY_FILTER})

export default pizzasReducer