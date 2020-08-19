import React from 'react'
import CloseIcon from '@material-ui/icons/Close'

import styles from './PizzaModal.module.scss'

interface PropsType {
  id: number
  name: string
  url: string
  sizes: Array<string>
  selectedSize: string
  selectedDoughType: string
  doughTypes: Array<string>
  price: number
  hintClose: () => void
  pizzaSettingsChange: (settingsName: 'size' | 'doughType', settings: string) => void
  addProduct: (id: number, name: string, counter: number, price: number, url: string) => void
}

const PizzaModal: React.FC<PropsType> = ({
                                           id, name, sizes, selectedSize,
                                           selectedDoughType, doughTypes, price,
                                           hintClose, pizzaSettingsChange, addProduct, url
                                         }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal__window}>
        <div className={styles.header}>
          <div className={styles.header__title}>{name}</div>
          <div className={styles.close__btn}>
            <button onClick={hintClose}>
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className={styles.img__container}>
          <img src={url} alt="pizza"/>
        </div>

        <div className={styles.btn__block}>
          <div className={styles.btn__block__size__type}>
            <button
              className={selectedSize.includes('маленькая') ? styles.btn__active : ''}
              onClick={(e) => pizzaSettingsChange('size', e.currentTarget.innerText.toLowerCase())}
              disabled={!sizes.includes('маленькая')}>Маленькая
            </button>
            <button
              className={selectedSize.includes('средняя') ? styles.btn__active : ''}
              onClick={(e) => pizzaSettingsChange('size', e.currentTarget.innerText.toLowerCase())}
              disabled={!sizes.includes('средняя')}>Средняя
            </button>
            <button
              className={selectedSize.includes('большая') ? styles.btn__active : ''}
              onClick={(e) => pizzaSettingsChange('size', e.currentTarget.innerText.toLowerCase())}
              disabled={!sizes.includes('большая')}>Большая
            </button>
          </div>

          <div className={styles.btn__block__dough__type}>
            <button
              className={selectedDoughType.includes('тонкое') ? styles.btn__active : ''}
              onClick={(e) => pizzaSettingsChange('doughType', e.currentTarget.innerText.toLowerCase())}
              disabled={!doughTypes.includes('тонкое')}>Тонкое
            </button>
            <button
              className={selectedDoughType.includes('традиционное') ? styles.btn__active : ''}
              onClick={(e) => pizzaSettingsChange('doughType', e.currentTarget.innerText.toLowerCase())}
              disabled={!doughTypes.includes('традиционное')}>Традиционное
            </button>
          </div>
        </div>

        <div className={styles.add__product__btn}>
          <button onClick={() => {
            addProduct(id, name, 1, price, url)
            hintClose()
          }}>Добавить в корзину {price} &#8381;
          </button>
        </div>
      </div>
    </div>
  )
}

export default PizzaModal