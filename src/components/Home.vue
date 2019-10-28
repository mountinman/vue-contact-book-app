<template>
  <v-container fluid>
    <v-row>
      <v-expansion-panels :value="0">
        <v-expansion-panel
          v-for="(contact, i) in showedContacts"
          :showedContacts="showedContacts"
          :currentPage="currentPage"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="4" sm="2" md="1">
                <v-avatar size="36px">
                  <img alt="Avatar" :src="contact.avatar" />
                </v-avatar>
              </v-col>

              <v-col class="hidden-xs-only" sm="5" md="3">
                <strong v-html="contact.name"></strong>
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text>
              <strong>
                <v-icon>mdi-email</v-icon>
              </strong>
              {{contact.email}}
            </v-card-text>
            <v-card-text>
              <strong>
                <v-icon>mdi-contact-phone-outline</v-icon>
              </strong>
              {{contact.phones[0]}}
            </v-card-text>
            <router-link
              class="view-more-btn"
              :to="{ name: 'ContactDetails', params: { id: contact.id }}"
            >VIEW DETAILS</router-link>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <pagination @clicked="paginatePageNumber" :pageSize="pageSize" />
  </v-container>
</template>  

<script>
import Pagination from "./Pagination.vue";

export default {
  data() {
    return {
      pageSize: 4,
      currentPage: 0,
      showedContacts: []
    };
  },
  components: {
    Pagination
  },
  beforeMount: function() {
    this.updateShowedContacts();
  },
  methods: {
    paginatePageNumber(value) {
      let $this = this;
      $this.currentPage = value - 1;
      this.updateShowedContacts();
    },
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateShowedContacts();
    },
    updateShowedContacts() {
      this.showedContacts = this.contacts.slice(
        this.currentPage * this.pageSize,
        this.currentPage * this.pageSize + this.pageSize
      );
      if (this.showedContacts.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
    }
  },
  created() {
    this.contacts = this.$store.getters.getContacts;
  }
};
</script>

<style>
.container {
  padding: 30px;
  max-width: 800px;
  margin: 0 auto;
}
.v-icon.v-icon {
  font-size: 19px;
}
a.view-more-btn {
  text-decoration: none;
  padding: 6px;
  background: yellowgreen;
  border-radius: 6px;
  display: inline-block;
  margin-top: 12px;
  color: white !important;
  font-weight: 400;
  font-size: 13px;
}
.v-item-group {
  margin-top: 100px;
}
.v-card__text,
.v-card__title {
  padding: 2px !important;
}
.theme--light.v-expansion-panels .v-expansion-panel {
  margin-bottom: 10px;
}
</style>