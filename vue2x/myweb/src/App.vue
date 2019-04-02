<template>
  <div id="app">
    <router-link to="/1">1</router-link>
    <router-link to="/2">2</router-link>
    <router-link to="/3">3</router-link>
    <router-link to="/player/1">1-1</router-link>
    <router-link to="/player/2">1-2</router-link>
    <router-view></router-view>

    <router-view name="myHeader"></router-view>
    <router-view name="mySlider"></router-view>
    <router-view name="myFooter"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
