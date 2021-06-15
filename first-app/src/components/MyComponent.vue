<template>
  <div id="content">
    <h1>This is from my component</h1>
    <p>Hello my name {{ myPropName }}</p>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      myPropName: "Tanasit Auewongaree",
    };
  },
};
</script>

<style>
#content {
  text-align: center;
  color: blue;
}
</style>
