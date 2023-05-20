import HomePage from "@/pages/HomePage.vue";
import ThreadShow from "@/pages/ThreadShow.vue";
import NotFound from "@/pages/NotFound.vue";
import sourceData from "@/data.json";
import ForumPage from "@/pages/ForumPage.vue";

import {createRouter, createWebHistory} from "vue-router";
import CategoryPage from "@/pages/CategoryPage.vue";
import TheProfile from "@/pages/TheProfile.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/me",
        name: "Profile",
        component: TheProfile,
    },
    {
        path: "/forum/:id",
        name: "Forum",
        component: ForumPage,
        props: true
    },
    {
        path: "/categories/:id",
        name: "Category",
        component: CategoryPage,
        props: true
    },
    {
        path: "/thread/:id",
        name: "ThreadShow",
        component: ThreadShow,
        props: true,
        beforeEnter: (to, from, next) => {
            const threadExists = sourceData.threads.find(
                (thread) => thread.id === to.params.id
            );
            if (threadExists) next();
            else
                next({
                    name: "NotFound",
                    params: {
                        pathMatch: to.path.substring(1).split("/"),
                    },
                    query: to.query,
                    hash: to.hash,
                });
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
