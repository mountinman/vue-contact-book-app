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
        avatar:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
      },
      {
        id:2,
        name:'Ivan',
        email:'ivan@ivan.com',
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
