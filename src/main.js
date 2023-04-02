import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/nav/NotFound.vue";
import TeamFooter from "./components/teams/TeamFooter.vue";
import UserFooter from "./components/users/UserFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: "/", redirect: "/teams" },
    { path: "/", redirect: "/teams", name: "teams" },
    // { path: "/teams/:teamId", component: TeamMembers, props: true },
    {
      path: "/teams",
      name: "teams",
      // component: TeamsList,
      components: {
        default: TeamsList,
        footer: TeamFooter,
      },
      children: [
        {
          path: ":teamId",
          component: TeamMembers,
          props: true,
          name: "team-members",
        },
      ],
    },

    {
      name: "users",
      path: "/users",
      components: { default: UsersList, footer: UserFooter },
      // beforeEnter(to, from, next) {
      //   const boo = false;
      //   if (boo) {
      //     next();
      //   } else {
      //     next({ name: "team-members", params: { teamId: "t1" } });
      //   }
      // },
    },
    { path: "/:notFound(.*)", component: NotFound }, //Not found url is redirect to '/'
  ],
  linkActiveClass: "active",
  //Scroll after re-render
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

//Navigation Guard
router.beforeEach(function (to, from, next) {
  // next({ name: "team-members", params: { teamId: "t2" } });
  next();
});

router.afterEach(function (to, from) {
  console.log("Hello");
});
const app = createApp(App);

app.use(router);

app.mount("#app");
