<template>
    <swiper
    :slides-per-view="2"
    :space-between="10"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="default-slider">
    <swiper-slide>
      <ion-card>
        <img src="../assets/images/category1.png">
          <div class="card-item">
          <h6 class="text">Chicken</h6>
          <p>9 Recipes</p>
          </div>
      </ion-card>
    </swiper-slide>

    <swiper-slide>
      <ion-card>
        <img src="../assets/images/category1.png">
          <div class="card-item">
          <h6 class="text">Chicken</h6>
          <p>9 Recipes</p>
          </div>
      </ion-card>
    </swiper-slide>
    <swiper-slide>
      <ion-card>
        <img src="../assets/images/category1.png">
          <div class="card-item">
          <h6 class="text">Chicken</h6>
          <p>9 Recipes</p>
          </div>
      </ion-card>
    </swiper-slide>
    <swiper-slide>
      <ion-card>
        <img src="../assets/images/category1.png">
          <div class="card-item">
          <h6 class="text">Chicken</h6>
          <p>9 Recipes</p>
          </div>
      </ion-card>
    </swiper-slide>
    </swiper>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import {IonCard} from '@ionic/vue'

export default{
    name:'SwiperImage',
    components:{
        Swiper,
        SwiperSlide,
        IonCard,
    },
    methods: {
    onSwiper: function () {
      console.log("onSwiper called");
    },
    onSlideChange: function () {
      console.log("Slide change");
    },
  },
}
</script>

<style scoped>
.default-slider .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img{
    width: 200px;
    height: 300px;
}
ion-card{
  box-shadow: none;
}
ion-card .card-item{
  position: absolute;
  bottom: 0;
  top: 170px;
  color: white;
  margin-left: 10px;
}
ion-card .card-item h6{
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
ion-card .card-item p{
  color: #fff;
  font-weight: 400;
  margin-bottom: 10px;
}
</style>