<template>
  <div id="app">
    <GirdSystem />
    <Alert />
    <Modal />
  </div>
</template>

<script>
import GirdSystem from "@/components/GirdSystem.vue";
import Alert from "@/components/Alert.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "App",
  components: {
    GirdSystem,
    Alert,
    Modal,
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
