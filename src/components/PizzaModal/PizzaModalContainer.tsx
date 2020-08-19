import React from 'react'
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import PizzaModal from './PizzaModal';
import {hintClose, PizzaModalState, pizzaSettingsChange} from "../../redux/reducers/pizzaModal-reducer";
import {addProduct} from "../../redux/reducers/shoppingCart-reducer";

interface PropsType {
  pizzaModal: PizzaModalState
  hintClose: () => void
  pizzaSettingsChange: (settingsName: 'size' | 'doughType', settings: string) => void
  addProduct: (id: number, name: string, counter: number, price: number, url: string) => void
}

const PizzaModalContainer: React.FC<PropsType> = ({pizzaModal, hintClose,
                                                    pizzaSettingsChange, addProduct}) => {
  if(!pizzaModal.selectedPizza || !pizzaModal.doughTypes) {
    return null
  }
  return (
    <div>
      <PizzaModal
          id={pizzaModal.selectedPizza.id}
          name={pizzaModal.selectedPizza.name}
          url={pizzaModal.selectedPizza.imgUrl}
          sizes={Object.keys(pizzaModal.selectedPizza.sizes)}
          selectedSize={pizzaModal.selectedSettings.size}
          selectedDoughType={pizzaModal.selectedSettings.doughType}
          doughTypes={pizzaModal.doughTypes}
          price={pizzaModal.price}
          hintClose={hintClose}
          pizzaSettingsChange={pizzaSettingsChange}
          addProduct={addProduct}/>
    </div>
  )
}

const mapStateToProps = (state: StateType) => (
  {pizzaModal: state.pizzaModal}
)

export default connect(mapStateToProps, {hintClose, pizzaSettingsChange, addProduct})(PizzaModalContainer)