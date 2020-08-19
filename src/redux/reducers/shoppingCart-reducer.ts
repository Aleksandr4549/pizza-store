const ADD_PRODUCT = 'ADD_PRODUCT'
const CHANGE_PRODUCT_COUNT = 'CHANGE_PRODUCT_COUNT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const CLEAN_CART = 'CLEAN_CART'

export interface Product {
  id: number
  name: string
  counter: number
  price: number
  url: string
}

interface AddShoppingCart extends Product {
  type: typeof ADD_PRODUCT
}

interface ChangeProductCount {
  type: typeof CHANGE_PRODUCT_COUNT
  id: number
  keyWord: 'increment' | 'decrement'
}

interface DeleteProduct {
  type: typeof DELETE_PRODUCT
  id: number
}

interface CleanCart {
  type: typeof CLEAN_CART
}

interface InitialState {
  products: Array<Product>
  productsTotalCount: number
  priceTotal: number
}

const initialState: InitialState = {
  products: [],
  productsTotalCount: 0,
  priceTotal: 0
}

type Actions = AddShoppingCart | ChangeProductCount | DeleteProduct | CleanCart

const shoppingCartReducer = (state = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case ADD_PRODUCT:
      const existentProduct = state.products.filter(product => product.id === action.id)[0]
      return {
        ...state,
        products: existentProduct ? [...state.products.filter(product => product.id !== action.id), {
            ...existentProduct,
            counter: ++existentProduct.counter
          }]
          : [...state.products, {id: action.id, name: action.name, counter: action.counter, price: action.price, url: action.url}],
        productsTotalCount: ++state.productsTotalCount,
        priceTotal: state.priceTotal + action.price
      }

    case CHANGE_PRODUCT_COUNT:
      if (action.keyWord === 'increment') {
        return {
          ...state,
          products: state.products.map(product => product?.id === action.id ?
            {...product, counter: ++product.counter} : product),
          productsTotalCount: ++state.productsTotalCount,
          priceTotal: state.priceTotal + state.products.filter(product => product?.id === action.id)[0].price
        }
      }
      return {
        ...state,
        products: state.products.map(product => product?.id === action.id ?
          {...product, counter: --product.counter} : product),
        productsTotalCount: --state.productsTotalCount,
        priceTotal: state.priceTotal - state.products.filter(product => product?.id === action.id)[0].price
      }

    case "DELETE_PRODUCT":
      const currentProduct = state.products.filter(product => product.id === action.id)[0]
      return {
        ...state,
        productsTotalCount: state.productsTotalCount - currentProduct.counter,
        priceTotal: state.priceTotal - currentProduct.price * currentProduct.counter,
        products: state.products.filter(product => product.id !== action.id)
      }

    case CLEAN_CART:
      return {...state, products: [], productsTotalCount: 0, priceTotal: 0}
    default:
      return state
  }
}

export const addProduct = (id: number, name: string, counter = 1, price: number, url: string): AddShoppingCart => {
  return {
    type: ADD_PRODUCT,
    id,
    name,
    counter,
    price,
    url
  }
}

export const changeProductCount = (id: number, keyWord: 'increment' | 'decrement'): ChangeProductCount => ({
  type: CHANGE_PRODUCT_COUNT,
  id,
  keyWord
})

export const deleteProduct = (id: number): DeleteProduct => ({
  type: DELETE_PRODUCT,
  id
})

export const cleanCart = (): CleanCart => ({type: CLEAN_CART})

export default shoppingCartReducer