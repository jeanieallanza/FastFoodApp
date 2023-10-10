<template>
    <!--footer content-->
  <div id="footer">
    <footer>
      <button @click.prevent="onOrderPage()" id="danger">Order Now!</button>
    </footer>
  </div>
</template>

<script lang="ts">
import {IonFooter} from '@ionic/vue'

export default{
    name: 'FooterLayout',
    components:{
        IonFooter,
    },
    methods:{
        onOrderPage(){
            this.$router.push('/order');
        }
    },
}
</script>

<style scoped>
#footer footer{
    background-position: bottom;
    padding: 20px;
    position: fixed;
    bottom: 0px;
    right: 0;
    float: right;    
}
#footer button#danger{
  background: #D71921;
  color: #fff;
  border-radius: 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  width: 161px;
  height: 60px;
  margin-right: 20px;
  text-transform: none;
}
</style>