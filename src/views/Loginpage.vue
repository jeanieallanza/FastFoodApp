<template>

  <form @submit.prevent="onloggedIn">

    <!--email input-->
    <div class="group">
       <label for="email">Email Address</label>
       <input type="email" id="email" v-model="email" autocomplete="off" placeholder="choutzuyu@gmail.com" required>
    </div>

    <!--password input-->
    <div class="group">
        <label for="pass">Password</label>
         <div class="grid">
            <input type="password" id="pass" v-model="password" autocomplete="off" placeholder="Enter your password" required>
            <p>Forgot?</p>
         </div>
    </div>

    <!--submit button-->
    <div class="btn">
        <button type="submit">Login</button>
    </div>

    <!--login as guest-->
    <a href="#">Login as Guest</a>

    <!--create account-->
    <div class="create">
        <p>Don't have an account yet? <span>Create</span></p>
    </div>
  </form>

</template>

<script lang="ts">
import axios from 'axios'


export default{
   data() {
        return{
            email: '',
            password: '',
        };
   },
   methods: {
     onloggedIn (){
        axios.post('https://psi-exam-api.praxxys.dev/api/auth/login',
        {email: this.email, password: this.password},
        )
        .then((response) => {
            this.$router.push('/home');
            console.log(response);
        })
     },
   },
};
</script>

<style scoped>
.group{
    padding: 10px 204px 10px 16px;
    border: 1px solid #6c757d;
    margin: 0 0 8px 0;
    border-radius: 16px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
}
input{
    color: #6c757d;
    border: none;
    outline: none;
    background-color: transparent;
}
input::placeholder{
    color: #DEE2E6;
}
.group label{
    margin-bottom: 2px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #6c757d;
}

.group p{
    color: #d71921;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    position: absolute;
    right: 10px;
}
.group .grid{
    display: flex;
    text-align: center;
}
.btn{
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
}
button{
    background-color: #d71921;
    padding: 16px;
    margin-top: 69px;
    border-radius: 16px;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #fff;
}
a{
    margin-top: 24px;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #d71921;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    text-decoration: none;
}
.create{
    display: grid;
    align-items: center;
    justify-content: center;
    margin-top: 158px;
}
.create p{
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #444444;
}
.create p span{
    color: #d71921;
    font-weight: 700;
}
</style>
