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
      { id: 1, photo: 'photo', fullName: 'Владислав Иванов', position: 'Директор по развитию и франчайзингу'},
      { id: 1, photo: 'photo', fullName: 'Антон Желудков', position: 'Директор по производству'},
      { id: 1, photo: 'photo', fullName: 'Анна Назарова', position: 'Директор по маркетингу'},
      { id: 1, photo: 'photo', fullName: 'Юлия Сидорова', position: 'Директор по доставке'},
      { id: 1, photo: 'photo', fullName: 'Михаил Милютин', position: 'Финансовый директор'}
    ],

  },
  getters: {},
  mutations: {},
  actions: {},
})