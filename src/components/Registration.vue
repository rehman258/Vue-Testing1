<template>
    <div id="registration">
        <h3>Register here</h3>
        <hr>
        <div class="row" v-for="user in users" v-bind:key="user.id">
            <h4>{{ user.name }}</h4>
            <button v-on:click="registerUser(user)">Register</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {

        // props: ['users'],
        computed:{
            ...mapGetters({
                users:'unregisteredUsers'
            }),
            // users(){
            //     // console.log(this.$store.getters)
            //     return this.$store.getters.getUsers.filter(user=>!user.registered)
            //     // console.log(this.$store.state.users)
            //     // return this.$store
            // },
        },

        methods: {
            registerUser(user) {
                // cosnole
                // const {id} = user;
                // console.log(id);
                // console.log({...user});
                const date = new Date;
                user.registered = true;
                // this.registrations.push({userId: user.id, name: user.name, })
                this.$store.state.registrations.push({userId: user.id, name: user.name, date: date.getMonth() + '/' + date.getDay()})
                // this.$emit('userRegistered', user);
                // const aa ={
                //     bigName:'aa'
                // }

                // const aabb = [1,2,3,4]
                // console.log([...aabb])
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