<template>
<ion-menu content-id="main-content">

    <!--header sidebar start-->
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <!--header sidebar end-->

    <!--main content of the body start-->
    <ion-content class="ion-padding">This is the menu content.</ion-content>
  </ion-menu>
</template>

<script lang="ts">
import { IonMenu, IonContent, IonHeader, IonToolbar } from '@ionic/vue'
export default{
    name: 'Sidebar',
    components:{
        IonMenu,
        IonHeader,
        IonToolbar,
        IonContent,
    }
}
</script>

<style scoped>
ion-content{
    --overflow: hidden;
}
.container{
    display: grid;
    grid-template-columns: 3fr 2fr 3fr 5fr;
    align-items: center;
    justify-content: center;
    padding: 24px 0 0 16px;
    gap: 17px;
}
.box .profile{
    width: 67px;
    margin-right: 24px;
}
.box p{
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
}
.info{
    padding-left: 16px;
}
.info h1{
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 0;
}
.infor p{
    font-weight: 400;
    font-size: 14px; 
    line-height: 21px;
}
.navlist{
    margin-top: 24px;
    margin-left: 16px;
     display: inline-block;
}
.navlist button{
    display: inline-block;
    align-items: center;
    justify-content: center;
    background-color: transparent;
}
.navlist button p{
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
}
</style>