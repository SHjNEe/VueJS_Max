import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "./pages/TeamsList.vue";
import UsersList from "./pages/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./pages/NotFound.vue";
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
      meta: { needsAuth: true },
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
      //     // next({ name: "team-members", params: { teamId: "t1" } });
      //     next();
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
  if (to.meta.needsAuth) {
    console.log("Needs auths");
    next();
  } else {
    next();
  }
});

router.afterEach(function (to, from) {
  console.log("Hello");
});

export default router;
