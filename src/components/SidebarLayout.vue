<template>
<ion-menu content-id="main-content">
    <!--main content of the body start-->
    <ion-content>

        
    <!--header sidebar start-->
        <div>
            <div class="grid-container">
            <div class="grid-item">
                <img class="profile" src="../assets/logo/profile.png">
            </div>
            <div class="grid-item">
                <img class="crown" src="../assets/logo/crown-icon.png">
            </div>
            <div class="grid-item">
                <button>0 Points</button>
            </div>
            <div class="grid-item">
              <ion-menu-toggle>
                <img src="../assets/icons/chevron-left.png">
              </ion-menu-toggle>
            </div>
            </div>
        </div>
    <!--header sidebar end-->

    <!--UserInfo-->
    <div class="info">
        <h1>Chou Tzuyu</h1>
        <p>+63 912 345 6789</p>
    </div>
         <!--sidebar menu start-->
         <div id="nav-link">
            <ion-menu-toggle>
              <ion-item router-link="/home" class="active" lines="none" id="items">
                <img src="../assets/logo/Logo.png">
                <ion-label>Home</ion-label>
              </ion-item>
              <ion-item router-link="/order" lines="none" id="items">
               <img src="../assets/icons/chicken.png">
                <ion-label>Order Now</ion-label>
              </ion-item>
              <ion-item lines="none">
               <img src="../assets/icons/bell.png">
                <ion-label>Notifications</ion-label>
                <ion-badge slot="end" color="warning">4</ion-badge>
              </ion-item>
              <ion-item lines="none" id="items">
               <img src="../assets/icons/favorite.png">
                <ion-label>Favorites</ion-label>
              </ion-item>
              <ion-item lines="none" id="items">
                <img src="../assets/icons/location.png">
                <ion-label>Store Locator</ion-label>
              </ion-item>
              <ion-item lines="none" id="items">
               <img src="../assets/icons/question.png">
                <ion-label>FAQ's</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </div>

          <div class="line"></div>

              <!--label content-->
            <div id="nav-label">
            <ion-list>
            <ion-item lines="none">
              <img src="../assets/icons/bag.png">
              <ion-label>My Orders</ion-label>
              <ion-badge slot="end" color="warning">3</ion-badge>
            </ion-item>
            <ion-item lines="none">
                <img src="../assets/icons/user.png">
              <ion-label>My Account</ion-label>
            </ion-item>
            <ion-item lines="none">
                <img src="../assets/icons/favorite.png">
              <ion-label>My Favorites</ion-label>
            </ion-item>
            <ion-item lines="none">
                <img src="../assets/icons/location.png">
              <ion-label>Order Tracker</ion-label>
            </ion-item>
            <ion-item lines="none">
                <img src="../assets/icons/history.png">
              <ion-label>Order History</ion-label>
            </ion-item>
          </ion-list>
          </div>

          <!--button for logout-->
          <footer>
            <button id="logout-button">Logout</button>
        </footer>

    </ion-content>
  </ion-menu>
</template>

<script>
import { IonMenu, IonContent, IonHeader, IonItem, IonList, IonMenuToggle, IonIcon, IonBadge, IonTitle, IonNote, IonLabel } from '@ionic/vue'
export default{
    name: 'Sidebar',
    components:{
        IonMenu,
        IonHeader,
        IonContent,
        IonItem, 
        IonList,
         IonMenuToggle,
          IonIcon, 
          IonTitle, 
          IonNote,
          IonLabel,
          IonBadge,
    },
}
</script>

<style scoped>

/* Style the header */

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 61px 1fr; 
  gap: 8px; 
  align-items: center;
  justify-content: center;
  margin-top: 52px;
  padding-left: 17px;
  grid-column-gap: 8px;
}
.grid-item {
  text-align: center; 
  gap: 0 8px;
}
button{
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    background-color: transparent;
}
.info h1{
    margin-top: 0;
    margin-left: 16px;
    margin-top: 8px;
    margin-bottom: 0;
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
}
.info p{
    margin-left: 17px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
}
ion-content{
    overflow: hidden;
}

/* Style the nav-link */
#nav-link{
    margin-top: 25px;
}
#nav-link ion-item img{
  margin-right: 10px;
  width: 20px;
}
#nav-link ion-item ion-label{
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
}

/* Style the line */
.line {
    border-top: 1px solid #DEE2E6; 
    margin: 20px 16px;
}

/* Style the nav-label */
#nav-label ion-item img{
  margin-right: 10px;
}
#nav-label ion-item ion-label{
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
}
ion-item ion-badge{
  color: #fff;
  font-size: 13px;
  padding: 6px 8px;
  border-radius: 35px;
}
ion-item.selected ion-icon{
  color: #D71921;
}
ion-item.selected {
  --color: #D71921;
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
#logout-button {
  background: var(--ion-color-red);
  color: var(--ion-color-white);
  font-weight: 600;
  font-size: 14px;
  width: 165px;
  margin-left: 10px;
  height: 45px;
  border-radius: 16px;
  text-transform: none;
  box-shadow: none;
  text-align: center;
}
/* Add hover effect for the button */
#logout-button:hover {
    background-color: #d00; 
}

</style>