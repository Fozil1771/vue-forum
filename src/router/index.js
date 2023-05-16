import HomePage from "@/pages/HomePage.vue";
import ThreadShow from "@/pages/ThreadShow.vue";
import NotFound from "@/pages/NotFound.vue";
import sourceData from "@/data.json";

import {createRouter, createWebHistory} from "vue-router";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomePage,
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
