<template>
        <v-layout wrap>
            <v-flex sm12 class="pl-2 pr-2">
                <div>
                    <h3>Dashboard</h3>
                </div>
            </v-flex>
            <v-flex xs12 sm4 md4>
                <v-card dark class="ma-1" color="blue darken-1">
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">Card 1</div>
                            <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat dark>Listen now</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm4 md4>
                <v-card class="ma-1" color="grey lighten-4">
                    <v-card-title primary-title>
                        <div>
                            <div class="headline blueColor">Card 2</div>
                            <span class="blueColor">Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat class="blueColor">Listen now</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm4 md4>
                <v-card dark class="ma-1" color="blue darken-1">
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">Card 3</div>
                            <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat dark>Listen now</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
</template>

<script>
export default {
    computed: {
        uniqueUsers() {
            return this.$store.getters.returnUsers
        }
    },
    methods: {
        // filterUser(){
        //     let usernames = this.users.map(function(user){
        //         return user.username;
        //     })

        //     var uniqueUsers = usernames.filter(function(uniqueUser, index){
        //         return usernames.indexOf(uniqueUser) >= index
        //     })

        //     this.filterUsers = uniqueUsers
        // },
        // populateUsers(){
        //     this.$store.dispatch('fetchUsers')
        // }
    }
}
</script>

<style scoped>
h3{
    color: #757575;
}
.v-icon{
    font-size: 76px;
    color: #E0E0E0;
}
.blueColor{
    color: #1e88e5;
}
</style>
