<template>
    <div class="col-full">
        <div class="forum-list">
            <h2 class="list-title">
                <router-link v-if="category.id" :to="{name: 'Category', params: {id: category.id} }">
                    {{ category.name }}
                </router-link>
                <span v-else>Forums</span>
            </h2>

            <div class="forum-listing" v-for="forum in forums" :key="forum.id">
                <div class="forum-details">
                    <router-link :to="{name: 'Forum', params: {id: forum.id}}" href="" class="text-xlarge">{{
                        forum.name
                        }}
                    </router-link>
                    <p>{{ forum.description }}</p>
                </div>
 
                <div class="threads-count">
                    <p>
                        <span class="count">{{ forum.threads?.length }}</span>
                        {{ forumThreadWord(forum) }}
                    </p>
                </div>

                <div class="last-thread"></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ForumList",
    props: {
        forums: {
            required: true,
            type: Array
        },
        category: {
            required: true,
            type: Object
        }
    },
    methods: {
        forumThreadWord(forum) {
            if (forum.threads?.length > 1) {
                return forum.threads?.length ? "threads" : "no threads"
            } else {
                return forum.threads?.length ? "thread" : "no threads"
            }
        }
    }

}
</script>