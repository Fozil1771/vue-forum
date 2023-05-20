<template>
    <div class="col-full">
        <div class="thread-list">
            <h2 class="list-title">Threads</h2>

            <!-- <div v-if="threads.length"> -->
            <div v-for="thread in threads" :key="thread.id" class="thread">
                <div>
                    <p>
                        <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">{{
                            thread.title
                            }}
                        </router-link>
                    </p>
                    <p class="text-faded text-xsmall">
                        By <a href="#">{{ userById(thread.userId).name }}</a
                    >,
                        <app-date :timeStamp="thread.publishedAt"/>
                        .
                    </p>
                </div>

                <div class="activity">
                    <p class="replies-count">{{ thread.repliesCount }} replies</p>

                    <img class="avatar-medium" :src="userById(thread.userId).avatar"/>

                    <div>
                        <p class="text-xsmall">
                            <a href="#">{{ userById(thread.userId).name }}</a>
                        </p>
                        <p class="text-xsmall text-faded">
                            <app-date :timeStamp="thread.publishedAt"/>
                        </p>
                    </div>
                </div>
            </div>
            <!-- </div> -->
        </div>

        <div v-if="!threads.length" s tyle="padding: 10px; text-align: center">
            <em>No Threads Available</em>
        </div>
    </div>
</template>

<script>
// import { findById } from "@/helpers";
import AppDate from "@/components/AppDate.vue";

export default {
    components: {AppDate},
    props: {
        threads: {
            type: Array,
            required: true,
        },
    },

    computed: {
        posts() {
            return this.$store.state.posts;
        },
        users() {
            return this.$store.state.users;
        },
    },

    methods: {
        postById(postId) {
            return this.posts.find((p) => p.id === postId);
        },
        userById(userId) {
            return this.users.find((user) => user.id === userId);
        },
    },
};
</script>

<style scoped></style>
