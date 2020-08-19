import asianScampi from '../assets/img/pizzas-img/asian-scampi.jpg'
import cheeseChicken from '../assets/img/pizzas-img/cheese-chicken.jpg' 
import cheese from '../assets/img/pizzas-img/cheese.jpg' 
import cheeseburgerPizza from '../assets/img/pizzas-img/cheeseburger-pizza.jpg'
import hamAndCheese from '../assets/img/pizzas-img/ham_and_cheese.jpg'
import fourSeasons from '../assets/img/pizzas-img/four_seasons.jpg'
import meat from '../assets/img/pizzas-img/meat.jpg'
import Italian from '../assets/img/pizzas-img/Italian.jpg'
import baconDon from '../assets/img/pizzas-img/bacon_don.jpeg'
import pizzaCake from '../assets/img/pizzas-img/pizza_cake.jpg'

const idGenerator = () => Math.random() * 100000000

interface SizeType {
  id: number
  doughTypes: Array<string>
  size: number
  weight: number
  price: number
}

interface SizesStandardTypes {
  [key: string]: SizeType
}

export type PizzaType = {
  id: number
  imgUrl: string
  name: string
  types: Array<string>
  sizes: SizesStandardTypes
  minPrice: number
  popularity: number
  description: string
  isShow: boolean
}

export type PizzasType = Array<PizzaType>

type getPizzasType = () => PizzasType

const pizzas: PizzasType = [
  {
    id: 165606,
    imgUrl: asianScampi,
    name: 'Креветки по азиатски',
    types: ['открытые', 'мясные'],
    sizes: {
      'маленькая': {
        id: idGenerator(),
        doughTypes: ['традиционное'],
        size: 25,
        weight: 400,
        price: 425
      },
      'средняя': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 30,
        weight: 500,
        price: 745
      },
      'большая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 35,
        weight: 600,
        price: 890
      }
    },
    minPrice: 425,
    popularity: Math.random() * 100,
    description: 'descr',
    isShow: true
  },
  {
    id: 498949,
    imgUrl: cheeseChicken,
    name: 'Сырный цыплёнок',
    types: ['открытые', 'мясные'],
    sizes: {
      'маленькая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 25,
        weight: 400,
        price: 375
      },
      'средняя': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 30,
        weight: 500,
        price: 565
      },
      'большая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 35,
        weight: 600,
        price: 695
      }
    },
    minPrice: 375,
    popularity: Math.random() * 100,
    description: 'Цыпленок, сырный соус, моцарелла, томаты',
    isShow: true
  },
  {
    id: 498943,
    imgUrl: cheese,
    name: 'Сырная',
    types: ['открытые', 'вегетарианские'],
    sizes: {
      'маленькая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 25,
        weight: 400,
        price: 245
      },
      'средняя': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 30,
        weight: 500,
        price: 375
      },
      'большая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 35,
        weight: 600,
        price: 495
      }
    },
    minPrice: 245,
    popularity: Math.random() * 100,
    description: 'Увеличенная порция моцареллы, томатный соус',
    isShow: true
  },
  {
    id: 49892332,
    imgUrl: cheeseburgerPizza,
    name: 'Чизбургер-пицца',
    types: ['открытые', 'мясные'],
    sizes: {
      'маленькая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 25,
        weight: 400,
        price: 290
      },
      'средняя': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 30,
        weight: 500,
        price: 320
      },
      'большая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 35,
        weight: 600,
        price: 390
      }
    },
    minPrice: 290,
    popularity: Math.random() * 100,
    description: 'Мясной соус болоньезе, моцарелла, красный лук, соленые огурчики, томаты, соус бургер',
    isShow: true
  },
  {
    id: 165642306,
    imgUrl: hamAndCheese,
    types: ['открытые', 'мясные'],
    name: 'Ветчина и сыр',
    sizes: {
      'маленькая': {
        id: idGenerator(),
        doughTypes: ['традиционное'],
        size: 25,
        weight: 400,
        price: 295
      },
      'средняя': {
        id: idGenerator(),
        doughTypes: ['традиционное'],
        size: 30,
        weight: 500,
        price: 485
      },
      'большая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 35,
        weight: 600,
        price: 575
      }
    },
    minPrice: 295,
    popularity: Math.random() * 100,
    description: 'Ветчина, увеличенная порция моцареллы, сливочный соус',
    isShow: true
  },
  {
    id: 498324949,
    imgUrl: fourSeasons,
    name: 'Четыре сезона',
    types: ['открытые', 'вегетарианские'],
    sizes: {
      'маленькая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 25,
        weight: 400,
        price: 375
      },
      'средняя': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 30,
        weight: 500,
        price: 565
      },
      'большая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 35,
        weight: 600,
        price: 695
      }
    },
    minPrice: 375,
    popularity: Math.random() * 100,
    description: 'Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, томатный соус, итальянские травы',
    isShow: true
  },
  {
    id: 49893243,
    imgUrl: meat,
    name: 'Мясная',
    types: ['открытые', 'мясные'],
    sizes: {
      'маленькая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 25,
        weight: 400,
        price: 495
      },
      'средняя': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 30,
        weight: 500,
        price: 625
      },
      'большая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 35,
        weight: 600,
        price: 745
      }
    },
    minPrice: 495,
    popularity: Math.random() * 100,
    description: 'Цыпленок, ветчина, пикантная пепперони, томатный соус, острая чоризо, моцарелла',
    isShow: true
  },
  {
    id: 49832322332,
    imgUrl: Italian,
    name: 'Итальянская',
    types: ['открытые', 'вегетарианские'],
    sizes: {
      'маленькая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 25,
        weight: 400,
        price: 375
      },
      'средняя': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 30,
        weight: 500,
        price: 565
      },
      'большая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 35,
        weight: 600,
        price: 695
      }
    },
    minPrice: 375,
    popularity: Math.random() * 100,
    description: 'Итальянские травы, пикантная пепперони, томатный соус, шампиньоны, моцарелла, маслины',
    isShow: true
  },
  {
    id: 4983232322,
    imgUrl: baconDon,
    name: 'Дон Бекон',
    types: ['открытые', 'мясные'],
    sizes: {
      'маленькая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 25,
        weight: 400,
        price: 425
      },
      'средняя': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 30,
        weight: 500,
        price: 625
      },
      'большая': {
        id: idGenerator(),
        doughTypes: ['традиционное', 'тонкое'],
        size: 35,
        weight: 600,
        price: 745
      }
    },
    minPrice: 425,
    popularity: Math.random() * 100,
    description: 'Цыпленок, пикантная пепперони, томатный соус, красный лук, моцарелла, бекон',
    isShow: true
  },
  {
    id: 444432322332,
    imgUrl: pizzaCake,
    name: 'Пицца-пирог',
    types: ['открытые', 'вегетарианские'],
    sizes: {
      'маленькая': {
        id: idGenerator(),
        doughTypes: ['традиционное'],
        size: 25,
        weight: 400,
        price: 325
      },
      'средняя': {
        id: idGenerator(),
        doughTypes: ['традиционное'],
        size: 30,
        weight: 500,
        price: 475
      },
      'большая': {
        id: idGenerator(),
        doughTypes: ['традиционное'],
        size: 35,
        weight: 600,
        price: 615
      }
    },
    minPrice: 325,
    popularity: Math.random() * 100,
    description: 'Ананасы, брусника, молоко сгущенное',
    isShow: true
  },
]

export const getPizzas = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(pizzas), 0)
  })
}