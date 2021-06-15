<template>
  <b-container class="mb-3">
    <b-row>
      <b-col>
        <b-form-input v-model="text"></b-form-input>
        <p><strong>Two way binding data:</strong> {{ text }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style></style>
