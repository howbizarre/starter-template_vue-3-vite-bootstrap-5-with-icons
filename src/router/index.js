import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";

export const routes = [
  {
    path: "/starter",
    name: "Home",
    component: Home,
    props: { msg: "Bootstrap Modal" },
  },
  {
    path: "/starter/about",
    name: "About",
    component: About,
    meta: { layout: "MainLayout" },
  },
  {
    path: "/starter/contacts",
    name: "Contacts",
    component: Contacts,
    meta: { layout: "MainLayout" },
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
