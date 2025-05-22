<template>
    <div v-if="isloading"  class="loading ">
        <span class="loader"></span>
    </div>
</template>

<script setup lang="ts">
const {isloading} = defineProps<{isloading? : boolean}>()
</script>

<style scoped>
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    top: 0;
    left: 0;
    background-color:rgba( 0, 0 , 0 , 0.8 ) ;
    width: 100%;
    height: 100%;
    z-index: 9999999999;
}
.loader {
    animation: rotate 1s infinite;
    height: 50px;
    width: 50px;
  }

  .loader:before,
  .loader:after {
    border-radius: 50%;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
  }
  .loader:before {
    animation: ball1 1s infinite;
    background-color: #fff;
    box-shadow: 30px 0 0 #e12afb;
    margin-bottom: 10px;
  }
  .loader:after {
    animation: ball2 1s infinite;
    background-color: #e12afb;
    box-shadow: 30px 0 0 #fff;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg) scale(0.8) }
    50% { transform: rotate(360deg) scale(1.2) }
    100% { transform: rotate(720deg) scale(0.8) }
  }

  @keyframes ball1 {
    0% {
      box-shadow: 30px 0 0 #e12afb;
    }
    50% {
      box-shadow: 0 0 0 #e12afb;
      margin-bottom: 0;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #e12afb;
      margin-bottom: 10px;
    }
  }

  @keyframes ball2 {
    0% {
      box-shadow: 30px 0 0 #fff;
    }
    50% {
      box-shadow: 0 0 0 #fff;
      margin-top: -20px;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #fff;
      margin-top: 0;
    }
  }
  
</style>