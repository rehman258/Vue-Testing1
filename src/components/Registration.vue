<template>
    <div id="registration">
        <h3>Register here</h3>
        <hr>
        <div class="row" v-for="user in unregisteredUsers" v-bind:key="user.id">
            <h4>{{ user.name }}</h4>
            <button v-on:click="registerUser(user)">Register</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {

        
        computed:{
            ...mapGetters(['unregisteredUsers']),
        },

        methods: {
            registerUser(user) {
                this.$store.dispatch('register',{userId:user.id})
                // this.$store.commit('register',user.id)

            }
        }
    }
</script>

<style scoped>
    #registration {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
    }

    .row h4 {
        display: inline-block;
        width: 70%;
        text-align: left;
        margin: 0 0 10px 0;
    }

    button {
        background-color: lightgreen;
        border: none;
        box-shadow: 1px 1px 1px black;
        font-size: inherit;
        text-align: right;
        cursor: pointer;
    }

    button:hover {
        background-color: green;
    }
</style>