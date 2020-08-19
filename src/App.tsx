import React from 'react'
import {Route} from 'react-router-dom'

import HeaderContainer from './components/Header/HeaderContainer'
import PizzaCardContainer from './components/PizzaCard/PizzaCardContainer'
import PizzasSortContainer from './components/PizzasSort/PizzasSortContainer'
import ShoppingCartContainer from './components/ShoppingCart/ShoppingCartContainer'
import PizzaModalContainer from './components/PizzaModal/PizzaModalContainer'
import Loader from './components/Loader/Loader';
import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.container}>
      <HeaderContainer/>
      <Route exact path={'/'} render={() => <PizzasSortContainer/>}/>
      <Route exact path={'/'} render={() => <PizzaCardContainer/>}/>
      <Route exact path={'/'} render={() => <PizzaModalContainer/>}/>
      <Route path='/shopping-cart' render={() => <ShoppingCartContainer/>}/>
      <Route path='/loader' render={() => <Loader/>}/>
    </div>
  )
}

export default App