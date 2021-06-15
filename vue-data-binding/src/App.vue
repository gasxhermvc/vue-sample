<template>
  <div id="app">
    <OneWayBinding />
    <two-way-binding />
    <property-binding />
    <event-binding />
  </div>
</template>

<script>
import OneWayBinding from "@/components/OneWayBinding.vue";
import TwoWayBinding from "./components/TwoWayBinding.vue";
import PropertyBinding from './components/PropertyBinding.vue';
import EventBinding from './components/EventBinding.vue';
export default {
  name: "App",
  components: { OneWayBinding, TwoWayBinding, PropertyBinding, EventBinding },
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
