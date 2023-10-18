<template>
    <div class="container">
      <ion-card>
        <ion-grid>
            <ion-row class="ion-justify-content-center">
                <ion-col size="3">
                   <ion-button>
                    <img src="../assets/icons/edit.png">
                   </ion-button>
                </ion-col>
                <ion-col size="3">
                    <ion-button>
                        <img src="../assets/icons/delete.png">
                    </ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
      </ion-card>
    </div>
</template>

<script>
import {IonCard, IonGrid, IonRow, IonCol, IonButton} from '@ionic/vue'
export default{
    components:{
        IonCard,
        IonGrid,
        IonRow,
        IonCol,
        IonButton,
    }
}
</script>

<style scoped>
.container{
    padding: 30px;
}
ion-button{
    --background: transparent;
}
</style>