<template>
  <div id="app">
    <h1>Vue App Component</h1>
    <div id="my-data">ชื่อ {{ name }} อายุ {{ age }}</div>
    {{ myProfile() }}
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      name: "tanasit auewongaree",
      age: 28,
    };
  },
  methods: {
    myProfile() {
      return `My name: ${this.name}, age: ${this.age}`;
    },
    method1() {
      return "First result";
    },
    method2(id) {
      return `Second result is: ${id}`;
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
