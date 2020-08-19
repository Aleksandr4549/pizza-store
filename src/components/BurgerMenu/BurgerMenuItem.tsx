import React from 'react'

import styles from './BurgerMenu.module.scss'

interface Props {
  item: string
  isSelected: boolean
  clickHandle: (category: string) => void
}

const BurgerMenuItem: React.FC<Props> = ({item, clickHandle, isSelected}) => {
  return <li className={isSelected ? styles.active : styles.burger__menu__item} onClick={() => clickHandle(item)}>{item}</li>
}

export default BurgerMenuItem