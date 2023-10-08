<template>
  <ion-page>

   <ion-content :fullscreen="true">
    <div class="container">
      <img src="../assets/logos/logoinverted.png">
    </div>
   </ion-content>

  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
</script>

<style scoped>
ion-content{
  --overflow: hidden;
  --background: var(--base);
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
