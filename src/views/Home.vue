<template>
  <div class="home">
    <van-button type="primary">授权登陆</van-button>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'
import  {Button} from 'vant'
Vue.use(Button);
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
