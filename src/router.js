import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import Login from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "Login" */ "./views/Login.vue")
    },
    {
      path: "/other",
      name: "other",
      component: () =>
        import(/* webpackChunkName: "Other" */ "./views/Other.vue")
    },
    {
      path: "/other1",
      name: "other1",
      component: () =>
        import(/* webpackChunkName: "Other1" */ "./views/Other1.vue")
    },
    {
      path: "/wordcloud",
      name: "wordcloud",
      component: () =>
        import(/* webpackChunkName: "wordcloud" */ "./views/wordcloud.vue")
    },
    {
      path: "/ckeditor",
      name: "ckeditor",
      component: () =>
        import(/* webpackChunkName: "wordcloud" */ "./views/Ckeditor.vue")
    },
    {
      path: "/quill",
      name: "quill",
      component: () =>
        import(/* webpackChunkName: "wordcloud" */ "./views/Quill.vue")
    }
  ]
});
