<template>
  <div id="app">
    <UserLists :type="type"></UserLists>
    <button type="button" @click="changeViewer">Change viewer</button>
  </div>
</template>

<script>
import UserLists from "@/components/UserLists";

export default {
  name: "App",
  components: {
    UserLists,
  },
  data() {
    return {
      type: "",
    };
  },
  methods: {
    changeViewer() {
      if (this.type == "card") this.type = "";
      else this.type = "card";
    },
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
