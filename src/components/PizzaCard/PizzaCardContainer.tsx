import React from 'react'
import {connect} from 'react-redux'

import {StateType} from '../../redux/store'
import {PizzaType} from '../../db/db'
import {setPizzasTC} from '../../redux/reducers/pizzas-reducer'
import {selectedBtnClick} from '../../redux/reducers/pizzaModal-reducer'
import PizzaCard from './PizzaCard'
import styles from './PizzaCard.module.scss'
import Loader from "../Loader/Loader";

type PropsType = {
  pizzas: Array<PizzaType>
  isFetching: boolean
  setPizzasTC: () => void
  selectedBtnClick: (pizza: any) => void
}

class PizzaCardContainer extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      isFetching: true
    }
  }

  componentDidMount() {
    if(!this.props.pizzas.length) {
      this.props.setPizzasTC()
    }
    this.setState({isFetching: false})
  }

  componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
    if(prevProps.isFetching !== this.props.isFetching) {
      this.setState({isFetching: this.props.isFetching})
    }
  }

  render() {
    //@ts-ignore
    if(this.state.isFetching) {
      return <div className={styles.loader__container}><Loader /></div>
    }

    return (
      <div className={styles.cards__container}>
        {this.props.pizzas.map(pizza => (
          <PizzaCard
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            imgUrl={pizza.imgUrl}
            minPrice={pizza.minPrice}
            description={pizza.description}
            isFetching={this.props.isFetching}
            selectedBtnClick={() => this.props.selectedBtnClick(pizza)} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state: StateType) => {
  return {
    pizzas: state.pizzasPage.pizzas.filter(pizza => pizza.isShow),
    isFetching: state.pizzasPage.isFetching
  }
}

export default connect(mapStateToProps, {setPizzasTC, selectedBtnClick})(PizzaCardContainer)