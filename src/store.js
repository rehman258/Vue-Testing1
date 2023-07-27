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
    register(state,id){
      const user  = state.users.find(user=>user.id === id);
      user.registered = true;

      const date = new Date;
      const registration = {
        ...user,
        date: date.getMonth() + '/' + date.getDay()
      }
      
      state.registrations.push(registration)
    },

    unregister(state,registrationId){

      const user = state.users.find(user=>user.id===registrationId);
      user.registered=false;

      const registration = state.registrations.find(registration=>registration.id===registrationId)
      state.registrations.splice(state.registrations.indexOf(registration),1);

    } 
  
    
  },
  actions:{

    register(context,payload){
      context.commit('register',payload.userId);
    },
    unregister(context,payload){
      context.commit('unregister',payload.userId);
    }

  }
})

export default store