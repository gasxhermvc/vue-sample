<template>
  <div id="app" class="container">
    <div>
      This content is in bootstrap's container
    </div>
    <MyButtonCollection />
    <MyIcon />
    <MyAlertCollection />
    <gird-system />
  </div>
</template>

<script>
import MyButtonCollection from "@/components/MyButtonCollection.vue";
import MyIcon from "@/components/MyIcon.vue";
import MyAlertCollection from "@/components/MyAlertCollection.vue";
import GirdSystem from "@/components/GirdSystem.vue"

export default {
  name: "App",
  components: {
    MyButtonCollection,
    MyIcon,
    MyAlertCollection,
    GirdSystem
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
