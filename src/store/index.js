import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export const store = new Vuex.Store({
  
  state: {
    contacts: [
      {
        id: 122345,
        name: "Marko Markić",
        email: "marko@marko.com",
        phone: "+385 95 478 8273",
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      },
      {
        id: 122346,
        name: "Ivan Ivandić",
        email: "ivan@ivan.com",
        phone: "+383 91 787 7671",
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      },
      {
        id: 122347,
        name: "Matija Matošin",
        email: "matija@matija.com",
        phone: "+385 91 787 7123",
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      },
      {
        id: 122348,
        name: "Kruno Krunić",
        email: "kruno@kruno.com",
        phone: "+385 99 789 453",
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      },
      {
        id: 122349,
        name: "Branimir Branica",
        email: "branimir@branica.com",
        phone: "+385 95 389 9912",
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      },
      {
        id: 122350,
        name: "Ana Anić",
        email: "ana@ivan.com",
        phone: "+388 76 676 6354",
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      },
      {
        id: 122351,
        name: "Zlatko Srebrić",
        email: "zlatko@ivan.com",
        phone: "+385 389 9911",
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      },
      {
        id: 122352,
        name: "Kristina Kristi",
        email: "kristina@ivan.com",
        phone: "+389 78 656 5243",
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      }
    ]
  },
  
  mutations: {
    deleteContact(state, contactId) {
      const indexToDelete = state.contacts.findIndex(
        contact => contact.id === contactId
      );
      state.contacts.splice(indexToDelete, 1);
    }
  },
  actions: {},
  getters: {
    getContacts(state) {
      return state.contacts;
    },
    getContactDetails(state) {
      return contactId =>
        state.contacts.find(contact => contact.id === contactId);
    }
  }
});
