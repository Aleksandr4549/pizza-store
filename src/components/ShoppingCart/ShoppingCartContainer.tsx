import React from 'react'
import {connect} from 'react-redux'

import ShoppingCart from './ShoppingCart'
import {
  addProduct,
  changeProductCount,
  cleanCart,
  deleteProduct,
  Product
} from '../../redux/reducers/shoppingCart-reducer'
import {StateType} from "../../redux/store"

interface MapStateProps {
  products: Array<Product | undefined>
  productsTotalCount: number
  priceTotal: number
}

interface MapDispatchProps {
  changeProductCount: (id: number, keyWord: 'increment' | 'decrement') => void
  deleteProduct: (id: number) => void
  cleanCart: () => void
}

type Props = MapStateProps & MapDispatchProps

const ShoppingCartContainer: React.FC<Props> = ({
                                                  products,
                                                  productsTotalCount,
                                                  priceTotal,
                                                  changeProductCount,
                                                  deleteProduct,
                                                  cleanCart,
                                                }) => {

  return (
    <div>
      <ShoppingCart
        products={products}
        productsTotalCount={productsTotalCount}
        priceTotal={priceTotal}
        changeProductCount={changeProductCount}
        deleteProduct={deleteProduct}
        cleanCart={cleanCart}/>
    </div>
  )
}

const mapStateToProps = (state: StateType) => ({
  products: state.shoppingCart.products,
  productsTotalCount: state.shoppingCart.productsTotalCount,
  priceTotal: state.shoppingCart.priceTotal,
})

export default connect(mapStateToProps, {
  addProduct,
  changeProductCount,
  deleteProduct,
  cleanCart
})(ShoppingCartContainer)