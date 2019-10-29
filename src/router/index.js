import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import ContactDetails from "@/components/ContactDetails";
import AddContact from "@/components/AddContact";
import EditContact from "@/components/EditContact";
import FindContact from "@/components/FindContact";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/contact/:id",
      name: "ContactDetails",
      props: true,
      component: ContactDetails
    },
    {
      path: "/add-contact",
      name: "AddContact",
      component: AddContact
    },
    {
      path: "/contact/:id/edit",
      name: "EditContact",
      props: true,
      component: EditContact
    },
    {
      path: "/find-contact",
      name: "FindContact",
      component: FindContact
    }
  ],
  mode: "history"
});
