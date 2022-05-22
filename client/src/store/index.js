import { createStore } from "vuex";

export const store = createStore({
  state: {
    reviews: [
      { id: 1, name: "Илья", age: 21, description: "Очень быстрая доставка и качественный товар. Буду заказывать еще." },
      { id: 2, name: "Даниил", age: 20, description: "Очень быстрая доставка и качественный товар. Буду заказывать еще." },
      { id: 3, name: "Кирилл", age: 20, description: "Очень быстрая доставка и качественный товар. Буду заказывать еще." },
      { id: 4, name: "Михаил", age: 19, description: "Очень быстрая доставка и качественный товар. Буду заказывать еще." }
    ],
    managment: [
      { id: 1, photo: 'photo', fullName: 'Илья Дорогин', position: 'Генеральный директор'},
      { id: 2, photo: 'photo', fullName: 'Владислав Иванов', position: 'Директор по развитию и франчайзингу'},
      { id: 3, photo: 'photo', fullName: 'Антон Желудков', position: 'Директор по производству'},
      { id: 4, photo: 'photo', fullName: 'Анна Назарова', position: 'Директор по маркетингу'},
      { id: 5, photo: 'photo', fullName: 'Юлия Сидорова', position: 'Директор по доставке'},
      { id: 6, photo: 'photo', fullName: 'Михаил Милютин', position: 'Финансовый директор'}
    ],
    cards: [
      { id: 1, title: 'Стикеры Астольфо', alias: 'astolfo', price: '400 руб', img: 'src/assets/img/product/astolfocard.png' },
      { id: 2, title: 'Фигурка Ацуши', alias: 'acushi', price: '900 руб', img: 'src/assets/img/product/acushicard.png'},
      { id: 3, title: 'Рамен Токусима', alias: 'tokusima', price: '200 руб', img: 'src/assets/img/product/tokusimacard.png'},
      { id: 4, title: 'Рамен Суисан', alias: 'suisan', price: '200 руб', img: 'src/assets/img/product/suisancard.png'},
      { id: 5, title: 'Стикеры 02', alias: '02', price: '400 руб', img: 'src/assets/img/product/02card.png'},
      { id: 6, title: 'Стикеры Ахегао', alias: 'ahegao', price: '300 руб', img: 'src/assets/img/product/ahegaocard.png'},
    ]

  },
  getters: {
    getReviews(state) {
      return state.reviews
    },
    getManagment(state) {
      return state.managment
    }
  },
  mutations: {},
  actions: {},
})