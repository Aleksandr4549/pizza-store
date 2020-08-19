import React from 'react'
import Header from './Header';
import {connect} from "react-redux";

interface MapStateProps {
  priceTotal?: number
}

type Props = MapStateProps

const HeaderContainer: React.FC<Props> = ({priceTotal = 0}) => {
  return <Header priceTotal={priceTotal} />
}

const mapStateToProps = (state: any) => ({priceTotal: state.shoppingCart.priceTotal})

export default  connect(mapStateToProps, null)(HeaderContainer)