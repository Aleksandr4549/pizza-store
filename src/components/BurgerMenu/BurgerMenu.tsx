import React, {useEffect, useRef, useState} from 'react'
import DehazeIcon from '@material-ui/icons/Dehaze';

import styles from './BurgerMenu.module.scss'
import BurgerMenuItem from "./BurgerMenuItem";

interface Props {
  categories: string[]
  selectedCategory: string
  categoriesShow: (category: string) => void
}

const BurgerMenu: React.FC<Props> = ({categories, categoriesShow, selectedCategory}) => {
  const [state, setState] = useState<{ isShow: boolean }>({isShow: false})

  const burgerMenuRef = useRef(null)

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)

    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const handleClick = () => (setState({isShow: !state.isShow}))

  const handleOutsideClick = (e: any) => {
    if(!e.path.includes(burgerMenuRef.current)) {
      setState({isShow: false})
    }
  }

  return (
    <div className={styles.burger__menu__wrapper} ref={burgerMenuRef}>
      <div className={styles.burger__menu__icon} onClick={handleClick}>
        <DehazeIcon/>
      </div>
      {state.isShow && <div className={styles.burger__menu__list}>
        {categories.map((category, i) => <BurgerMenuItem key={i} item={category}
                                                                         isSelected={category === selectedCategory}
                                                                         clickHandle={categoriesShow}/>)}
      </div>}
    </div>
  )
}

export default BurgerMenu