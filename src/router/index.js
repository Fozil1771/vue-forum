import HomePage from "@/pages/HomePage.vue";
import ThreadShow from "@/pages/ThreadShow.vue";
import ThreadCreate from "@/pages/ThreadCreate.vue";
import NotFound from "@/pages/NotFound.vue";
import sourceData from "@/data.json";
import ForumPage from "@/pages/ForumPage.vue";

import {createRouter, createWebHistory} from "vue-router";
import CategoryPage from "@/pages/CategoryPage.vue";
import TheProfile from "@/pages/TheProfile.vue";
import ThreadEdit from "@/pages/ThreadEdit.vue";

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
		meta: {toTop: true, smoothScroll: true},
	},
	{
		path: "/me/edit",
		name: "ProfileEdit",
		component: TheProfile,
		props: {edit: true},
	},
	{
		path: "/forum/:id",
		name: "Forum",
		component: ForumPage,
		props: true,
	},
	{
		path: "/categories/:id",
		name: "Category",
		component: CategoryPage,
		props: true,
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
		path: "/forum/:forumId/thread/create",
		name: "ThreadCreate",
		component: ThreadCreate,
		props: true,
	},
	{
		path: "/thread/:id/edit",
		name: "ThreadEdit",
		component: ThreadEdit,
		props: true,
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
	scrollBehavior(to) {
		const scroll = {};
		if (to.meta.toTop) scroll.top = 0;
		if (to.meta.scrollBehavior) scroll.behavior = "smooth";
		return scroll;
	},
});
