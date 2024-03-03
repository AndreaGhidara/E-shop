<script setup lang="ts">
// import { onMounted } from 'vue';
import ApiService from '../../../services/api.service';
import { reactive } from 'vue';

// import { useRouter } from 'vue-router';
// import axios from 'axios';

// const router = useRouter();
// const userData = reactive({
//     user: {}
// });
// function fetchUserDetails() {
//     axios.get('user').then(response => {
//         userData.user = response.data;
//     });
// }

let user = reactive({
    email: "",
    id: 0,
    name: "",
});



function getToken() {
    const token = localStorage.getItem('token')
    return token
}

function authUser() {

    ApiService.callUserProfile(getToken())
        .then((res) => {
            console.log(res);
            Object.assign(user, res.data.user);
        })
        .catch((err) => {
            console.log(err);

        })
}

function refreshToken() {

    ApiService.callRefreshToken(getToken())
        .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.token)
        })
        .catch((err) => {
            console.log(err);

        })
}

function test() {
    authUser()
}

function logout() {
    ApiService.callLogOut(getToken())
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);

        })
}

function userCall(user: any) {
    console.log(user);
}



</script>

<template>
    <div>
        <div> User ID: {{ user.email }}</div>
        <div>Email Address: {{ user.id }}</div>
        <div>
            <button @click="logout()" class="btn btn-error" type="button">Sign Out</button>
        </div>
        <button @click="test()" class="btn btn-primary">TEST</button>
        <button @click="userCall(user)" class="btn btn-primary">user</button>
        <button @click="refreshToken()" class="btn btn-primary">Refresh Token</button>
    </div>
</template>


<style scoped></style>