import {createStore} from 'vuex'
import sourceData from '@/data.json'

export default createStore({
    state: {
        ...sourceData,
        authId: "jVa6Go6Nl1Urkag1R2p9CHTf4ny1"
    },
    getters: {
        authUser: state => {
            const user = state.users.find(user => user.id === state.authId)
            if (!user) return null;
            return {
                ...user,
                get posts() {
                    return state.posts.filter(post => post.userId === user.id)
                },
                get postCount() {
                    return this.posts.length ?? 0;
                },
                get threads() {
                    return state.threads.filter(thread => thread.userId === user.id)
                },
                get threadCount() {
                    return this.threads.length ?? 0;
                },
            }
        }
    },
    actions: {
        createPost(context, post) {
            post.id = "asdfasdf" + Math.random();
            context.commit('setPost', {post})
            context.commit('appendPostToThread', {postId: post.id, threadId: post.threadId})
        }
    },
    mutations: {
        setPost(state, {post}) {
            state.posts.push(post);
        },
        appendPostToThread(state, {postId, threadId}) {
            const thread = state.threads.find(thread => thread.id === threadId)
            thread.posts.push(postId);
        }
    }
})