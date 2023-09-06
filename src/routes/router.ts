import PopUp from "@/pages/test/popup.vue";
import Sheet from "@/pages/test/sheet.vue";
import type { Router } from "framework7/types";
import NotFoundPage from "../pages/404.vue";
import AboutPage from "../pages/about.vue";
import DynamicRoutePage from "../pages/dynamic-route.vue";
import HomePage from "../pages/home.vue";
import RequestAndLoad from "../pages/request-and-load.vue";
import SettingsPage from "../pages/settings.vue";

var routes: Router.RouteParameters[] = [
  {
    path: "/",
    component: HomePage,
    options: {
      transition: "f7-cover",
    },
  },
  {
    path: "/about/",
    component: AboutPage,
    options: {
      transition: "f7-cover",
    },
  },
  {
    path: "/test/:id",
    popup: {
      swipeToClose: true,
      component: PopUp,
      // async({ resolve }: any) {
      //   // dynamic import component; returns promise
      //   const vueComponent = () => import("@/pages/test/popup.vue");
      //   // resolve promise
      //   vueComponent().then((vc) => {
      //     // resolve with component
      //     resolve({ component: vc.default });
      //   });
      // },
    },
  },
  {
    path: "/sheet/:id",
    sheet: {
      component: Sheet,
      // async({ resolve }: any) {
      //   import("@/pages/test/sheet.vue").then((vc) =>
      //     resolve({ component: vc.default })
      //   );
      // },
      swipeToClose: true,
    },
  },
  {
    path: "/settings/",
    component: SettingsPage,
    options: {
      transition: "f7-cover",
    },
  },

  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
    options: {
      transition: "f7-cover",
    },
  },
  {
    path: "/request-and-load/user/:userId/",
    options: {
      transition: "f7-cover",
    },
    async: function ({
      router,
      resolve /*  */,
    }: {
      router: any;
      to: any;
      resolve: any;
    }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      // var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            {
              title: "Framework7 Website",
              url: "http://framework7.io",
            },
            {
              title: "Framework7 Forum",
              url: "http://forum.framework7.io",
            },
          ],
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            },
          }
        );
      }, 1000);
    },
  },
  {
    path: "(.*)",
    component: NotFoundPage,
    options: {
      transition: "f7-cover",
    },
  },
];

export default routes;
