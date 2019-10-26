import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import ContactDetails from "@/components/ContactDetails";
import AddContact from "@/components/AddContact";

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
    }
   
  ],
  mode: "history"
});
