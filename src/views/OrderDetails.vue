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
           <h1>Meat</h1>
          </div>
           
            <ion-buttons slot="end">
              <img class="profile" src="../assets/icons/shopping.png">
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
  
      <!--home content-->
      <ion-content class="ion-padding">
  
    <form>
    <!--for favorites-->
    <div class="card">
            <div class="box1">
                <img src="../assets/images/meat.png">
            </div>
            <div class="box2">
                <img src="../assets/icons/heart.png">
            </div>
        </div>

        <!--details-->
        <h6 class="title">Steak Fries Veggies</h6>
        <Rating></Rating>
        <p class="desc">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.</p>
        

                <!--Product Pricing-->
                <div class="pricing">
                <div class="qty1">
                    <h2>P 172</h2>
                </div>
                <div class="qty2">
                
                    <!--counter-->
                    <div class="price">
                    <div class="qty1">
                        <button>-</button>
                    </div>
                    <div class="qty2">
                        <label>1</label>
                    </div>
                    <div class="qty3">
                        <button>+</button>
                    </div>
                    </div>
                </div>
                </div>

                <!--product select-->
                <h2 class="title">Beverages</h2>
                <div class="beverages">
                    <div class="input">
                        <label for="beverages">Choose Beverages</label>
                        <select id="beverages" name="beverages">
                            <option value="coke">Coke</option>
                            <option value="sprite">Sprite</option>
                            <option value="Tea">Tea</option>
                            <option value="lemon">Lemon Juice</option>
                        </select>
                    </div>
                </div>

                  <!---Button-->
                <div class="button">
                   <div class="btn1">
                    <button>Regular</button>
                   </div>
                   <div class="btn2">
                    <button>Large</button>
                   </div>
                   <div class="btn2">
                    <button>X-Large</button>
                   </div>
                </div>

                <!--add item-->
                <h2 class="title">Add Ons</h2>
                <div class="add">
                    <div class="addItem">
                        <img src="../assets/images/sauce.png">
                    </div>
                    <div class="addItem">
                        <h6>Tomato Sauce</h6>
                        <label>Sauce</label>

                        <div class="price">
                            <div class="qty">
                                <label>p 49</label>
                            </div>
                            <div class="qty">
                                <div class="qty1">
                                    <button>-</button>
                                </div>
                                <div class="qty2">
                                    <label>1</label>
                                </div>
                                <div class="qty3">
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

         </form>

      </ion-content>

    </ion-page>
  </template>
  
  <script lang="ts">
  import Rating from '@/components/Rating.vue';
import Sidebar from '../components/SidebarLayout.vue'
  import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent } from '@ionic/vue'

  
  export default{
    components:{
    Sidebar,
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonContent,
    Rating
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
  .title{
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 16px;

  }
  .desc{
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }
  .card{
    position: relative;
    padding-top: 33px;
    padding-bottom: 32px;
    padding-right: 42px;
    padding-left: 43px;
    background-color: #E9ECEF;
    border-radius: 16px;
    text-align: center;
    justify-content: center;
  }
  .card .box2{
    position: absolute;
    right: 20px;
    background-color: #fff;
    width: auto;
    height: auto;
    padding: 13px;
    border-radius: 18px;
    box-shadow: 2px 2px 10px 0px #00000029;
  }
  .card .box2 img{
    text-align: center;
    width: 20px;
  }

  .pricing{
    display: grid;
    grid-template-columns: 69px 112px;
    gap: 160px;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
  }
  .pricing .price{
    display: grid;
    grid-template-columns: 32px 32px 32px;
    gap: 4px;
    align-items: center;
    justify-content: center;
  }
  .pricing h2{
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #D71921;
  }
  .pricing .price{
    width: auto;
    height: auto;
  }
  .pricing .price button{
    color: #D71921;
    background: #0000001A;
    font-size: 15px;
    border-radius: 12px;
    font-weight: 700;
    padding: 11px 15px;
  }
  .price .qty2{
    margin-left: 15px;
  }
  .price .qty2 label{
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }
  .beverages{
    margin-top: 24px;
  }
   
  .title{
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
  .beverages{
    padding: 10px 204px 10px 16px;
    border: 1px solid #DEE2E6;
    margin: 0 0 8px 0;
    border-radius: 16px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
  }
  .beverages label{
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }
  select{
    color: #6c757d;
    border: none;
    outline: none;
    background-color: transparent;
    width: 320px;
}
option{
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #000;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.button{
    display: grid;
    grid-template-columns: 109px 110px 109px;
    gap: 7px;
    text-align: center;
    margin-top: 16px;
}
.button .btn1{
    background: #FFC02E;
    padding: 14px;
    border-radius: 12px;
}
.button .btn1 button{
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
}
.button .btn2{
    background: #DEE2E6;
    padding: 14px;
    border-radius: 12px;
    border: 1px solid #DEE2E6
}
.button .btn2 button{
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color: #000;
}
</style>
  
  