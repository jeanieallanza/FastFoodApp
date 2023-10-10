<template>
  <ion-page>

   <ion-content @click.prevent="onLoginPage()"  :fullscreen="true">
    <div class="container">
      <img src="../assets/logo/logoinvert.png">
    </div>
   </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';

export default{
  components:{
    IonPage,
    IonContent,
  },
  methods:{
        onLoginPage(){
            this.$router.push('/login');
        }
    },
}
</script>

<style scoped>
ion-content{
  --overflow: hidden;
  --background: #D71921;
}
.container{
  text-align: center;
  display: block;
  margin: auto;
}
.container img{
  width: 183px;
  margin-top: 192px;
}
</style>
