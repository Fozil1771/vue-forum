<template>
    <div class="profile-card">
        <p class="text-center">
            <img :src="user.avatar" :alt="`${user.name} profile picture`" class="avatar-xlarge  img-update">
        </p>

        <div class="form-group">
            <input type="text" placeholder="Username" class="form-input text-lead text-bold"/>
        </div>

        <div class="form-group">
            <input type="text" placeholder="Fullname" class="form-input text-lead text-bold"/>
        </div>

        <div class="form-group">
            <label for="user-bio">Bio</label>
            <textarea class="form-input" id="user-bio" placeholder="Write a few words about yourself..."></textarea>
        </div>

        <div class="stats">
            <span>{{ user.postCount }} posts</span>
            <span>{{ user.threadCount }} threads</span>
        </div>

        <hr>

        <div class="form-group">
            <label class="form-label" for="user_website">Website</label>
            <input autocomplete="off" id="user_website" type="text"
                   class="form-input "/>
        </div>

        <div class="form-group">
            <label class="form-label" for="user_email">Email</label>
            <input autocomplete="off" id="user_email" type="text"
                   class="form-input "/>
        </div>

        <div class="form-group">
            <label class="form-label" for="user_location">Location</label>
            <input autocomplete="off" id="user_location" type="text"
                   class="form-input "/>
        </div>

        <div class="btn-group space-between">
            <button class="btn-ghost">Cancel</button>
            <button class="btn-blue" type="submit">Save</button>
        </div>

    </div>
</template>

<script>
export default {
    name: "UserProfileCardEditor",
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            activeUser: this.user
        }
    }
}
</script>