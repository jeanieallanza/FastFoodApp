<template>
  <ion-page id="main-content">

   <!--sidebar components-->
   <Sidebar></Sidebar>

    <!--home header-->
    <ion-header collapse="fade">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button>
            <img src="../assets/icons/bar.png">
          </ion-menu-button>
        </ion-buttons>

        <div class="item">
          <img class="crown" src="../assets/icons/crown.png">
          <label>0 Points</label>
          <button>
            <img src="../assets/icons/chevron-left.png">
          </button>
        </div>
         
          <ion-buttons slot="end">
            <img class="profile" src="../assets/logo/profile-sm.png">
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <!--home content-->
    <ion-content class="ion-padding">

    <!--hero-->
    <HeroLayout></HeroLayout>

    <!--search button-->
    <Search></Search>

    <!--Slides-->
    <div class="slide-item">
      <div class="text">
        <h2>Special Offers!</h2>
      </div>
      <div class="text">
        <label>View All</label>
        <img src="../assets/icons/chevron-left.png">
      </div>
    </div>

    <!--implement swiper js for image slides-->
    <div class="swipe">
      <SwiperImage></SwiperImage>
    </div>


    <!--for category-->
      <div class="title">
        <h2>Category</h2>
        <div class="card">
          <SwiperCategory></SwiperCategory>
        </div>
      </div>

      <!--for new item image-->
      <div class="title">
        <h2>What's new?</h2>
        <div class="card">
          <img src="../assets/images/whatsnew-img.png">
        </div>
      </div>

      <!--for popular products-->
      <div class="title">
        <h2>Most Popular</h2>
        <div class="content">
          <CardCategory></CardCategory>
        </div>
      </div>


         <!--button for logout-->
         <footer>
            <button id="footer-button" @click="$router.push('/details')">Order Now!</button>
        </footer>

    </ion-content>
  </ion-page>
</template>

<script>
import HeroLayout from '@/components/HeroLayout.vue';
import Sidebar from '@/components/SidebarLayout.vue'
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent } from '@ionic/vue'
import Search from '@/components/Search.vue';
import SwiperImage from '@/components/SwiperImage.vue';
import SwiperCategory from '@/components/SwiperCategory.vue';
import CardCategory from '@/components/CardCategory.vue';

import axios from 'axios'
import { ref, onMounted } from 'vue'

export default {
  components: {
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

  },
  setup(){

const BASE_URL = 'https://psi-exam-api.praxxys.dev/api';
const products = ref([])

const fetchToken = async () =>{
    let token = await localStorage.getItem('token') 
    products.value = token
    console.log(products.value)
}

const fetchProduct = async () => {
  let token = await localStorage.getItem('token') 
  console.log(token)
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer' + token
  };
  console.log(headers)

  axios.get(`${BASE_URL}/products`, { headers})
  .then(response => {
    console.log(response.data);
  })

  .catch(error => {
    console.error(error);
  });

    }

    onMounted(() =>{
    fetchProduct();
    });

    return{
        products,
    }
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
.item{
  display: grid;
  grid-template-columns: 30px 61px 30px;
  gap: 10px;
  align-items: center;
  justify-content: center;
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
/* Style the footer */
footer {
    display: flex;
    align-items: start;
    justify-content: start;
    margin-top: 69px;
    margin-bottom: 46px;
    box-shadow: none;
}

/* Style the Logout button */
#footer-button {
  background: var(--ion-color-red);
  color: var(--ion-color-white);
  font-weight: 600;
  font-size: 14px;
  bottom: 20px; /* Adjust as needed to control the vertical position */
  right: 20px;
  border-radius: 16px;
  text-transform: none;
  box-shadow: none;
  text-align: center;
  position: fixed;
  padding: 21px 42px;
}
/* Add hover effect for the button */
#footer-button:hover {
    background-color: #d00; 
}

</style>

