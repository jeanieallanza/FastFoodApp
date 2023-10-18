<template>
    <swiper
    :slides-per-view="2.8"
    :space-between="4"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="default-slider">
    <swiper-slide>
        <button class="one">All</button>
    </swiper-slide>
    <swiper-slide>
        <button>Breakfast</button>
    </swiper-slide>
    <swiper-slide>
       <button>chicken</button>
    </swiper-slide>
    <swiper-slide>
        <button>Seafood</button>
    </swiper-slide>
    <swiper-slide>
        <button>Seafood</button>
    </swiper-slide>
    <swiper-slide>
        <button>Seafood</button>
    </swiper-slide>
    </swiper>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';

export default{
    name:'OrderSwipe',
    components:{
        Swiper,
        SwiperSlide,
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
button {
  border: none;
  color: #676767;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>