<template>
    <h1>{{ category.name }}</h1>
    <forum-list :category="category" :forums="getForumsByCategory(category)"/>
</template>

<script>
import {defineComponent} from 'vue'
import ForumList from "@/components/ForumList.vue";

export default defineComponent({
    name: "CategoryPage",
    props: {
        id: {
            required: true,
            type: String
        }
    },
    components: {ForumList},

    computed: {
        category() {
            return this.$store.categories.find(category => category.id === this.id)
        }
    },
    methods: {
        getForumsByCategory(category) {
            return this.$store.forums.filter(forum => forum.categoryId === category.id)
        }
    }
})
</script>