<template>

    <!--sidebar components-->
    <Sidebar></Sidebar>
  
    <ion-page id="main-content">
  
      <!--home header-->
      <ion-header collapse="fade">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button>
              <img src="../assets/icons/bar.png">
            </ion-menu-button>
          </ion-buttons>
  
          <div class="item">
           <h1>Our Foods</h1>
          </div>
           
            <ion-buttons slot="end">
              <img class="profile" src="../assets/icons/shopping.png">
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
  
      <!--home content-->
      <ion-content class="ion-padding">
  
      <!--search button-->
      <OrderSearch></OrderSearch>
  
      <!--implement swiper js for image slides-->
      <div class="swipe">
        <OrderSwipe></OrderSwipe>
      </div>

        <!--for popular products-->
        <div class="title">
          <div class="content">
            <CardCategory></CardCategory>
          </div>
        </div>
  
      </ion-content>

    </ion-page>
  </template>
  
  <script>
  
  import HeroLayout from '@/components/HeroLayout.vue';
  import Sidebar from '../components/SidebarLayout.vue'
  import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent } from '@ionic/vue'
  import Search from '@/components/Search.vue';
  import OrderSearch from '@/components/OrderSearch.vue';
  import OrderSwipe from '@/components/OrderSwipe.vue';
  import SwiperImage from '@/components/SwiperImage.vue';
  import SwiperCategory from '@/components/SwiperCategory.vue';
  import CardCategory from '@/components/CardCategory.vue';

  
  export default{
    components:{
      Sidebar,
      IonPage,
      IonHeader,
      IonToolbar,
      IonButtons,
      IonMenuButton,
      IonContent,
      HeroLayout,
      Search,
      SwiperImage,
      SwiperCategory,
      CardCategory,
      OrderSearch,
      OrderSwipe,
  }
  }
  </script>
  
  <style scoped>
  ion-toolbar{
    --min-height: 60px;
    --padding-top: 19px;
    --padding-bottom: 16px;
    --padding-start: 16px;
    --padding-end: 16px;
  }
  ion-content{
    --padding-start: 16px;
    --padding-end: 16px;
  }
  .item h1{
    text-align: start;
    justify-content: center;
    margin-left: 27px;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
  }
  .profile{
    width: auto;
  }
  button{
    background-color: transparent;
    border: none;
  }
  label{
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }
  .swipe{
    margin-top: 16px;
  }
  .slide-item{
    display: grid;
    grid-template-columns: 150px 90px;
    align-items: center;
    justify-content: center;
    gap: 100px;
    margin-top: 24px;
  }
  .slide-item h2{
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
  }
  .slide-item label{
    color: #D71921;
    margin-right: 10px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 700;
  }
  .text{
    display: flex;
  }
  .title{
    margin-top: 24px;
  }
  .title h2{
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
  }
  .card{
    margin-top: 8px;
    width: auto;  
    text-align: center;
  }
  .card img{
    max-width: 350px;  
    height: auto;
  }
  .content{
    margin-top: 8px;
  }
  </style>
  
  