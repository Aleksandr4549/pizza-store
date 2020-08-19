import React from 'react'
import {connect} from 'react-redux'

import {categoriesShow, popularityFilter, priceFilter} from '../../redux/reducers/pizzas-reducer'
import PizzasSort from './PizzasSort'
import {StateType} from "../../redux/store";

type MapStatePropsType = {
  categories?: Array<string>
  selectedCategory: string
}

type MapDispatchPropsType = {
  categoriesShow: (condition: string) => void
  priceFilter: () => void
  popularityFilter: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const PizzasSortContainer: React.FC<PropsType> = ({categories = [],
                                                    categoriesShow,
                                                    priceFilter,
                                                    popularityFilter,
                                                    selectedCategory}) => {
    return (
        <div>
            <PizzasSort
              categories={categories}
              categoriesShow={categoriesShow}
              priceFilter={priceFilter}
              popularityFilter={popularityFilter}
              selectedCategory={selectedCategory}/>
        </div>
    )
}

const mapStateToProps = (state: StateType): MapStatePropsType => ({
  categories: state.pizzasPage.categoriesTypes,
  selectedCategory: state.pizzasPage.selectedCategory
})

export default connect(mapStateToProps, {categoriesShow, priceFilter, popularityFilter})(PizzasSortContainer)