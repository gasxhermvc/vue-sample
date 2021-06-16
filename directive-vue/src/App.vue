<template>
  <div id="app">
    <SampleAttributeDirectives />
    <SampleStructureDirectives />
  </div>
</template>

<script>
import SampleAttributeDirectives from "@/components/SampleAttributeDirectives.vue";
import SampleStructureDirectives from "@/components/SampleStructureDirectives.vue";
export default {
  name: "App",
  components: {
    SampleAttributeDirectives,
    SampleStructureDirectives,
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
