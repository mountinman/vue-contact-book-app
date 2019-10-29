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
    contacts: [],
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
    },
    updateContact(state, newContact) {
      let oldContact = state.contacts.find(
        contact => contact.id == newContact.id
      );
      const indexOfOldContact = state.contacts.indexOf(oldContact);
      state.contacts.splice(indexOfOldContact, 1, newContact);
    }
  },
  actions: {},
  getters: {
    getContacts(state) {
      return state.contacts;
    },
    getContactsCopy(state) {
      let postDataCopy = _.cloneDeep(state.contacts);
      return (state.copyContacts = postDataCopy);
    }
  }
});
