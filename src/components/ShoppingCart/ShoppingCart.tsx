import React from 'react'

import {Product} from '../../redux/reducers/shoppingCart-reducer'
import styles from './ShoppingCart.module.scss'
import {Link} from 'react-router-dom'
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';

interface Props {
  products: Array<Product | undefined>
  productsTotalCount: number
  priceTotal: number
  changeProductCount: (id: number, keyWord: 'increment' | 'decrement') => void
  deleteProduct: (id: number) => void
  cleanCart: () => void
}

const ShoppingCart: React.FC<Props> = ({
                                         products = [],
                                         productsTotalCount,
                                         priceTotal,
                                         changeProductCount,
                                         deleteProduct,
                                         cleanCart
                                       }) => {

  return (
    <div>
      <div className={styles.shopping__cart__wrapper}>
        {!products.length && <div className={styles.products__meta__info}><h3>Корзина пуста</h3></div>}
        {!!products.length && products.map((elem) => (
          <div key={elem?.id} className={styles.product__container}>
            <div className={styles.product__name}><span>{elem?.name}</span></div>
            <div className={styles.img__container}><img src={elem?.url} alt="pizza"/></div>
            <div className={styles.product__counter}>
              <button
                disabled={(elem && elem.counter <= 1)}
                onClick={() => changeProductCount(elem?.id || 0, 'decrement')}>-
              </button>
              <span>{elem?.counter}</span>
              <button onClick={() => changeProductCount(elem?.id || 0, 'increment')}>+</button>
            </div>
            <div className={styles.product__delete__btn} onClick={() => deleteProduct(elem?.id || 0)}>
              <DeleteButton />
            </div>
          </div>))}
      </div>
      <div className={styles.products__meta__info}>
        Всего товаров: <span>{productsTotalCount}</span>
      </div>
      <div className={styles.products__meta__info}>
        Общая стоимость: <span>{priceTotal} &#8381;</span>
      </div>
      <div className={styles.nav__btn__container}>
        <Link to={'/'}>
          <button className={styles.nav__btn}>Вернуться на главную</button>
        </Link>
        <button className={styles.nav__btn} onClick={cleanCart} disabled={!products.length}>Очистить корзину</button>
        <button className={styles.nav__btn} onClick={cleanCart} disabled={!products.length}>Заказать</button>
      </div>
    </div>
  )
}

export default ShoppingCart