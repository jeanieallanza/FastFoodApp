<template>
<ion-page>

    <ion-content>

        <!--main content-->
        <div class="container">
           
            <!--navbar items-->
            <div class="nav">
                <div class="item1">
                    <img src="../assets/icons/bar.png">
                    <img class="notif" src="../assets/icons/Notif.png">
                </div>
                <div class="item2">
                    <img src="../assets/icons/crown.png">
                </div>
                <div class="item3">
                    <p>{{ totalPoints }}</p>
                    <img src="../assets/icons/chevron-left.png">
                </div>
                <div class="profile">
                    <img src="../assets/images/profile-sm.png">
                </div>
            </div>

        </div>

    </ion-content>
</ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue'

export default {
    name: 'Homepage',
    components: {
        IonPage,
        IonContent,
    },
    data() {
        return {
            totalPoints: '0 Points',
        }
    }
}
</script>

<style scoped>
.container{
    padding: 16px;
}
.container .nav{
    display: grid;
}
</style>