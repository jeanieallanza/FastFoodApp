<template>
    <ion-page>
        <ion-content>
            <div class="container">

                <!--display logo-->
                <img src="../assets/logos/Logo.png">

                <h1>{{ greetings }}</h1>
                <p>Welcome to all new FastFood mobile app. Kindly login your account. Thank you!</p>

                <!--main content-->
               <div class="form">
               <router-view></router-view>
               </div>


            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';

export default {
    name: 'InputLayout',
    components: {
        IonPage,
        IonContent,
    },
    data() {
        return {
            greetings: 'Bonjour!'
        }
    }
}
</script>

<style scoped>
.container{
    padding: 16px;
    margin-top: 80px;
}
.container img{
    width: 103px;
}
.container h1{
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
}
.container p{
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: var(--base600);
    margin-bottom: 24px;
}
</style>