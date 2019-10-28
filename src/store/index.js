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
        phones: ["+385 95 478 8273", "+383 91 787 7671"],
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      },
      {
        id: 122346,
        name: "Ivan Ivandić",
        email: "ivan@ivan.com",
        phones: ["+383 91 787 7671"],
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      },
      {
        id: 122347,
        name: "Matija Matošin",
        email: "matija@matija.com",
        phones: ["+385 91 787 7123", "+385 99 789 453"],
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      },
      {
        id: 122348,
        name: "Kruno Krunić",
        email: "kruno@kruno.com",
        phones: ["+385 99 789 453"],
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
    },
    addContact(state, newContact) {
      let lastContactsItem = state.contacts.length - 1;
      let lastUsedId = state.contacts[lastContactsItem].id;
      const newId = lastUsedId + 1;
      newContact.id = newId;
      state.contacts.push(newContact);
    }
  },
  actions: {},
  getters: {
    getContacts(state) {
      return state.contacts;
    }
  }
});
