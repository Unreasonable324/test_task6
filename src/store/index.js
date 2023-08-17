import { createStore } from 'vuex'
import axios from "axios";


export default createStore({
  state: {
    Posts: [],

  },
  getters: {
    POSTS(state) {
      return state.Posts
    },


  },
  mutations: {
    SET_POSTS_TO_STATE: (state, Posts) => {
      state.Posts = Posts
    },
    SET_USERS_TO_POST: (state, Users) => {
      state.Posts.forEach(post => {
        Users.find((user) => {
          if (user.id == post.userId) {
            post.userName = user.name
          }

        })
      });

    },

  },
  actions: {
    GET_POSTS_FROM_API({ commit }) {
      axios('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
      })
        .then((Posts) => {
          commit('SET_POSTS_TO_STATE', Posts.data)
          console.log(Posts);
          return Posts
        })
        .catch((error) => {
          return error;
        })
        .finally(() => {
          console.log('finaly');
          axios('https://jsonplaceholder.typicode.com/users', {
            method: 'GET'
          })
            .then((Users) => {
              commit('SET_USERS_TO_POST', Users.data)
              return Users
            })
            .catch((error) => {
              return error;
            })

        })

    },

  },
  modules: {
  }
})
