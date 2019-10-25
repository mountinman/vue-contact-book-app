import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    contacts:[
      {
        id:1,
        name:'Marko',
        email:'marko@marko.com',
        address:'put33',
        avatar:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
      },
      {
        id:2,
        name:'Ivan',
        email:'ivan@ivan.com',
        address:'otvoreno more bb',
        avatar:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
      },
      {
        id:3,
        name:'Ivan',
        email:'ivan@ivan.com',
        address:'otvoreno more bb',
        avatar:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
      },
      {
        id:4,
        name:'Ivan',
        email:'ivan@ivan.com',
        address:'otvoreno more bb',
        avatar:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
      },
      {
        id:5,
        name:'Ivan',
        email:'ivan@ivan.com',
        address:'otvoreno more bb',
        avatar:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
      },
      {
        id:6,
        name:'Ivan',
        email:'ivan@ivan.com',
        address:'otvoreno more bb',
        avatar:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
      },
      {
        id:7,
        name:'Ivan',
        email:'ivan@ivan.com',
        address:'otvoreno more bb',
        avatar:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
      },
      {
        id:8,
        name:'Ivan',
        email:'ivan@ivan.com',
        address:'otvoreno more bb',
        avatar:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getContacts (state) {
      return state.contacts
    }
  }
});
