import React from 'react'

import styles from './PizzaCard.module.scss'
import Loader from "../Loader/Loader";

type Props = {
  name: string
  imgUrl: string
  minPrice: number
  id: number
  description: string
  isFetching: boolean
  selectedBtnClick: (id: any) => void
}

const PizzaCard: React.FC<Props> = ({name, imgUrl, minPrice, id,
                                      selectedBtnClick, isFetching, description}) => {
  if (isFetching) {
    return <div><Loader/></div>
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div>
          <div className={styles.img__container}>
            <img src={imgUrl} alt="pizza-card"/>
          </div>
          <div>
            <h3>{name}</h3>
          </div>
        </div>

        <div className={styles.description__wrapper}>
          <div className={styles.description}>
            <div>{description}</div>
          </div>
          <div className={styles.price}>
            <div>
              <span>от {minPrice} &#8381;</span>
            </div>
            <div>
              <button onClick={selectedBtnClick}>Выбрать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PizzaCard