<template>
    <div class="container" style="width: 100%">
        <div class="flex-grid">
            <div class="col-3 push-top">
                <user-profile-card :user="user"/>
                <user-profile-card-editor :user="user"/>
                <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 3 hours ago</p>

                <div class="text-center">
                    <hr>
                    <a href="#" class="btn-green btn-small">Edit Profile</a>
                </div>

            </div>


            <div class="col-7 push-top">
                <div class="profile-header">
                    <span class="text-lead">Joker's recent activity</span>
                    <a href="#">See only started threads?</a>
                </div>

                <hr>

                <post-list :posts="user.posts"/>
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import PostList from "@/components/PostList.vue";
import {mapGetters} from "vuex";
import UserProfileCard from "@/components/UserProfileCard.vue";
import UserProfileCardEditor from "@/components/UserProfileCardEditor.vue";

export default defineComponent({
    name: "TheProfile",
    components: {UserProfileCardEditor, UserProfileCard, PostList},
    computed: {
        ...mapGetters({user: 'authUser'}),
    }
})


</script>

<style scoped>

</style>