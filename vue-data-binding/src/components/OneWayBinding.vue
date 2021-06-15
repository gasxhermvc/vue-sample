<template>
  <b-container class="mb-3">
    <b-row>
      <b-col>
        <p :class="className">
          <strong v-bind:style="style">
            One-way binding data script to template:
          </strong>
          {{ text }}
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>
          <strong>One-way binding data template to script</strong>
          <b-form-input @keyup="onKeyup"></b-form-input>
          {{ text1 }}
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      className: "custom-margin",
      text: "Hello world",
      text1: "",
      style: {
        color: "red",
        padding: "1rem",
      },
    };
  },
  methods: {
    onKeyup(e) {
      this.text1 = e.target.value;
    },
  },
};
</script>

<style>
.custom-margin {
  margin: 5rem 0;
}
</style>
