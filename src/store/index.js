import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    contacts:[
      {
        id:1,
        name:'Marko',
        email:'marko@marko.com'
      },
      {
        id:2,
        name:'Ivan',
        email:'ivan@ivan.com'
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
