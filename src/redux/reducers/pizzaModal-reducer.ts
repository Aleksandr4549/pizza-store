import {PizzaType} from '../../db/db'

const SELECTED_PIZZA = 'SELECTED_PIZZA'
const HINT_CLOSE = 'HINT_CLOSE'
const PIZZA_SETTINGS_CHANGE = 'PIZZA_SETTINGS_CHANGE'

export interface PizzaModalState {
  selectedPizza: PizzaType | null
  doughTypes: Array<string> | null
  selectedSettings: {
    size: string
    doughType: string
  }
  price: number
  isShow: boolean
}

interface SelectedBtnClick {
  type: typeof SELECTED_PIZZA
  payload: any
}

interface HintClose {
  type: typeof HINT_CLOSE
}

interface PizzaSettingsChange {
  type: typeof PIZZA_SETTINGS_CHANGE
  settingsName: 'size' | 'doughType'
  payload: string
}

const initialState: PizzaModalState = {
  selectedPizza: null,
  doughTypes: null,
  selectedSettings: {
    size: 'маленькая',
    doughType: 'традиционное'
  },
  price: 0,
  isShow: false
}

type Actions = SelectedBtnClick | HintClose | PizzaSettingsChange

const pizzaModalReducer = (state = initialState, action: Actions): PizzaModalState => {
  switch(action.type) {
    case SELECTED_PIZZA:
      return {
        ...state,
        doughTypes: action.payload.sizes[state.selectedSettings.size].doughTypes,
        selectedPizza: action.payload,
        price: action.payload.sizes[state.selectedSettings.size].price,
        isShow: true
      }
    case PIZZA_SETTINGS_CHANGE:
      if(action.settingsName === 'size') {
        return {
          ...state,
          selectedSettings: {...state.selectedSettings, size: action.payload},
          price: state.selectedPizza ? state.selectedPizza.sizes[action.payload].price : 0
        }
      }
      return {
        ...state,
        selectedSettings: {...state.selectedSettings, doughType: action.payload},
      }
    case HINT_CLOSE:
      return initialState
    default: 
      return state
  }
}

export const selectedBtnClick = (payload: PizzaType): SelectedBtnClick => ({type: SELECTED_PIZZA, payload})

export const hintClose = (): HintClose => ({type: HINT_CLOSE})

export const pizzaSettingsChange = (settingsName: 'size' | 'doughType', settings: string): PizzaSettingsChange => {
  return {
    type: PIZZA_SETTINGS_CHANGE,
    settingsName,
    payload: settings
  }
}

export default pizzaModalReducer