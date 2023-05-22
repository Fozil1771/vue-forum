<template>
  <div class="profile-card">
    <form @submit.prevent="save">
      <p class="text-center">
        <img
          :src="activeUser.avatar"
          :alt="`${user.name} profile picture`"
          class="avatar-xlarge img-update"
        />
      </p>

      <div class="form-group">
        <input
          type="text"
          v-model="activeUser.username"
          placeholder="Username"
          class="form-input text-lead text-bold"
        />
      </div>

      <div class="form-group">
        <input
          v-model="activeUser.name"
          type="text"
          placeholder="Fullname"
          class="form-input text-lead text-bold"
        />
      </div>

      <div class="form-group">
        <label for="user-bio">Bio</label>
        <textarea
          v-model="activeUser.bio"
          class="form-input"
          id="user-bio"
          placeholder="Write a few words about yourself..."
        ></textarea>
      </div>

      <div class="stats">
        <span>{{ user.postCount }} posts</span>
        <span>{{ user.threadCount }} threads</span>
      </div>

      <hr />

      <div class="form-group">
        <label class="form-label" for="user_website">Website</label>
        <input
          v-model="activeUser.webiste"
          autocomplete="off"
          id="user_website"
          type="text"
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label class="form-label" for="user_email">Email</label>
        <input
          v-model="activeUser.email"
          autocomplete="off"
          id="user_email"
          type="text"
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label class="form-label" for="user_location">Location</label>
        <input
          v-model="activeUser.location"
          autocomplete="off"
          id="user_location"
          type="text"
          class="form-input"
        />
      </div>

      <div class="btn-group space-between">
        <button class="btn-ghost" @click="cancel">Cancel</button>
        <button class="btn-blue" type="submit">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserProfileCardEditor",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activeUser: { ...this.user },
    };
  },
  methods: {
    save() {
      this.$store.dispatch("updateUser", { ...this.activeUser });
      this.$router.push({ name: "Profile" });
    },
    cancel() {
      this.$router.push({ name: "Profile" });
    },
  },
};
</script>
