<template>
    <forum-list v-for="category in categories" :key="category.id" :forums="getForumsByCategory(category)"
                :category="category"/>
</template>

<script>
import ForumList from "@/components/ForumList.vue";

export default {
    name: "CategoryList",
    components: {ForumList},
    props: {
        categories: {
            required: true,
            type: Array
        }
    },
    methods: {
        getForumsByCategory(category) {
            return this.$store.state.forums.filter(forum => forum.categoryId === category.id)
        }
    }

}
</script>