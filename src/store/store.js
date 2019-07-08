import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    users: []
  },
  getters: {
    returnUsers: function(state){
      let usernames = state.users.map(function(user){
        return user.username
      })

      let uniqueUsers = usernames.filter(function(uniqueUser, index){
        return usernames.indexOf(uniqueUser) >= index
      })

      return uniqueUsers
    },
    loadingStatus: function(state){
      return state.isLoading;
    },
    totalUsers: function(state){
      return state.users.length;
    }
  },
  mutations: {
    setUsers: function(state, users) {
      state.users = users;
    },
    loading: function(state, status){
      state.isLoading = true;
    },
    notLoading: function(state, status){
      state.isLoading = false;
    }
  },
  actions: {
    // fetchUsers: function({ commit }) {
    //   commit('loading');
    //   axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then(function(response){
    //     commit('notLoading');
    //     commit("setUsers", response.data);
    //   });
    // }
  }
});
