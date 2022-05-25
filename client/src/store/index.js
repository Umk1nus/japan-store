import { createStore } from "vuex";

export const store = createStore({
  state: {
    reviews: [
      { id: 1, name: "Илья", age: 21, description: "Очень быстрая доставка и качественный товар. Буду заказывать еще." },
      { id: 2, name: "Даниил", age: 20, description: "Все понравилось, отличный магазин" },
      { id: 3, name: "Кирилл", age: 20, description: "Советую заказывать на данном сайте" },
      { id: 4, name: "Михаил", age: 19, description: "Качество товаров на высшем уровне" }
    ],
    managment: [
      { id: 1, photo: 'photo', fullName: 'Илья Дорогин', position: 'Генеральный директор'},
      { id: 2, photo: 'photo', fullName: 'Владислав Иванов', position: 'Директор по развитию и франчайзингу'},
      { id: 3, photo: 'photo', fullName: 'Антон Желудков', position: 'Директор по производству'},
      { id: 4, photo: 'photo', fullName: 'Анна Назарова', position: 'Директор по маркетингу'},
      { id: 5, photo: 'photo', fullName: 'Елена Сидорова', position: 'Директор по доставке'},
      { id: 6, photo: 'photo', fullName: 'Михаил Милютин', position: 'Финансовый директор'}
    ],
    cards: [
      { id: 1, title: 'Стикеры Астольфо', alias: 'astolfo', price: '400 руб', img: 'src/assets/img/product/astolfocard.png' },
      { id: 2, title: 'Фигурка Ацуши', alias: 'acushi', price: '900 руб', img: 'src/assets/img/product/acushicard.png'},
      { id: 3, title: 'Рамен Токусима', alias: 'tokusima', price: '200 руб', img: 'src/assets/img/product/tokusimacard.png'},
      { id: 4, title: 'Рамен Суисан', alias: 'suisan', price: '200 руб', img: 'src/assets/img/product/suisancard.png'},
      { id: 5, title: 'Стикеры 02', alias: '02', price: '400 руб', img: 'src/assets/img/product/02card.png'},
      { id: 6, title: 'Стикеры Ахегао', alias: 'ahegao', price: '300 руб', img: 'src/assets/img/product/ahegaocard.png'},
    ],
    company: [
      {id: 1, title: 'Оплата картой и наличными', img: 'src/assets/img/icon/cardCompany.svg', class: 'blue-bg'},
      {id: 2, title: 'Мы работаем круглосуточно', img: 'src/assets/img/icon/storeCompany.svg', class: 'red-bg'},
      {id: 3, title: 'Отслеживайте ваш заказ', img: 'src/assets/img/icon/mapCompany.svg', class: 'green-bg'},
      {id: 4, title: 'У нас быстрая доставка', img: 'src/assets/img/icon/packageCompany.svg', class: 'red-bg'},
      {id: 5, title: 'Оставляйте свои отзывы', img: 'src/assets/img/icon/reviewCompany.svg', class: 'green-bg'},
      {id: 6, title: 'Вам доступны акции', img: 'src/assets/img/icon/boxCompany.svg', class: 'blue-bg'}
    ]

  },
  getters: {
    getReviews(state) {
      return state.reviews
    },
    getManagment(state) {
      return state.managment
    },
    getCards(state) {
      return state.cards
    },
    getCompany(state) {
      return state.company
    }

  },
  mutations: {},
  actions: {},
})