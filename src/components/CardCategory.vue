<template>
 <div class="container">


    <!--card item: 1-->
    <div class="box">
        <img class="item" src="../assets/images/veggies.png">
        <h6>Steak Fries Veggies</h6>
        <label>Meat</label>
        <div class="quantity">
            <h3>P 178</h3>
            <img src="../assets/icons/Rating.png">
        </div>
    </div>
    <div class="box">
        <img class="item" src="../assets/images/salad.png">
        <h6>Steak Fries Veggies</h6>
        <label>Meat</label>
        <div class="quantity">
            <h3>P 178</h3>
            <img class="rating" src="../assets/icons/Rating.png">
        </div>
    </div>

     <!--card item: 2-->
     <div class="box">
        <img class="item" src="../assets/images/sorvetes.png">
        <h6>Steak Fries Veggies</h6>
        <label>Meat</label>
        <div class="quantity">
            <h3>P 178</h3>
            <img src="../assets/icons/Rating.png">
        </div>
    </div>
    <div class="box">
        <img class="item chicken" src="../assets/images/chicken.png">
        <h6>Steak Fries Veggies</h6>
        <label>Meat</label>
        <div class="quantity">
            <h3>P 178</h3>
            <img class="rating" src="../assets/icons/Rating.png">
        </div>
    </div>

     <!--card item: 3-->
     <div class="box">
        <img class="item" src="../assets/images/veggies.png">
        <h6>Steak Fries Veggies</h6>
        <label>Meat</label>
        <div class="quantity">
            <h3>P 178</h3>
            <img src="../assets/icons/Rating.png">
        </div>
    </div>
    <div class="box">
        <img class="item" src="../assets/images/salad.png">
        <h6>Steak Fries Veggies</h6>
        <label>Meat</label>
        <div class="quantity">
            <h3>P 178</h3>
            <img class="rating" src="../assets/icons/Rating.png">
        </div>
    </div>
 </div>
</template>

<script lang="ts">
import {IonIcon} from '@ionic/vue'

export default{
    name :'CardCategory',
    components:{
        IonIcon,
    }
}
</script>

<style scoped>
.container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}
.box{
   background-color: #e9ecef;
   box-shadow: none;
   border-radius: 16px;
   padding-bottom: 18px;
}
.box .item{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 136px;
    height: 136px;
    padding-top: 20px;
    padding-right: 16px;
    padding-left: 16px;
}
.box h6{
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  margin-top: 26px;
  color: #000;
  padding-left: 16px;
}
.box label{
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #000;
  padding-left: 16px;
}
.quantity{
    display: grid;
    grid-template-columns: 44px 60px;
    align-items: center;
    justify-content: center;
    gap: 32px;
}
.quantity h3{
    font-size: 16px;
    font-weight: 700;
    color: #d71921;
}
</style>