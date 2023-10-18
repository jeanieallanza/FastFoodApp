<template>
    <swiper
    :slides-per-view="1.2"
    :space-between="10"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="default-slider">
    <swiper-slide>
        <img src="../assets/images/special-offers1.png">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/images/special-offers1.png">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/images/special-offers1.png">
    </swiper-slide>
    <swiper-slide>
        <img src="../assets/images/special-offers1.png">
    </swiper-slide>
    </swiper>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';

export default{
    name:'SwiperImage',
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
.swiper-slide img{
    width: 341px;
    height: 138px;
}
</style>