import Vue from "vue";
import Vuex from "vuex";
import VueLodash from "vue-lodash";
import _ from "lodash";
import VuexLocalStorage from "../localStorage";


Vue.use(VueLodash);

Vue.use(Vuex);


export const store = new Vuex.Store({
  plugins: [VuexLocalStorage],
  state: {
    contacts: [
      {
        id: 122345,
        name: "Marko Marki",
        email: "marko@marko.com",
        phones: ["478 8273", "91 787 7671"],
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      },
      {
        id: 122346,
        name: "Ivan Ivandi",
        email: "ivan@ivan.com",
        phones: ["+383 91 787 7671"],
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      },
      {
        id: 122347,
        name: "Matija Matosin",
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
    ],
    copyContacts: []
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
    },
    getContactsCopy(state) {
      let postDataCopy = _.cloneDeep(state.contacts);
      return state.copyContacts = postDataCopy;

    }
  }
  
});
