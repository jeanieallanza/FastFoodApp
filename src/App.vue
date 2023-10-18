<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import Sidebar from './components/SidebarLayout.vue';

export default{
  name: 'App',
  components:{
    IonApp,
    IonRouterOutlet,
},
}
</script>

<style scoped>
</style>
