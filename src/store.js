import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    registrations: [],
    users: [
      {id: 1, name: 'Max', registered: false},
      {id: 2, name: 'Anna', registered: false},
      {id: 3, name: 'Chris', registered: false},
      {id: 4, name: 'Sven', registered: false}
      
    ]
  },
  getters: {
    unregisteredUsers(state) {
      return state.users.filter(user=> !user.registered);
    },
    registrations(state){
      return state.registrations;
    },
    total(state){
      return state.registrations.length;
    }
  },
  mutations:{
    // registe
    // registrations:
  },
})

export default store