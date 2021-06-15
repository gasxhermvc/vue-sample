<template>
  <b-container class="mb-3">
    <b-row>
      <b-col>
        <strong :style="style">add your color</strong>
        <b-form-input v-model="customStyle.color" class="mb-3"
          >test</b-form-input
        >
        <b-form-input
          v-model="customStyle.fontSize"
          @keypress="numberOnly($event)"
          class="mb-3"
        ></b-form-input>
        {{ style }}
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button type="button" varient="success" @click="plus"
          >+ Plus</b-button
        >
        <b-button type="button" varient="danger" @click="minus"
          >- Minus</b-button
        ></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
export default {
  computed: {
    style() {
      let styles = { ...this.customStyle };
      styles.fontSize = `${styles.fontSize}px`;
      return styles;
    },
  },
  data() {
    return {
      customStyle: {
        color: "red",
        fontSize: 50,
      },
    };
  },
  methods: {
    plus() {
      let size = this.customStyle.fontSize;
      let cal = size * 0.25 + size;
      if (cal < 10) cal = 10;
      if (cal > 70) cal = 70;
      this.customStyle.fontSize = cal;
    },
    minus() {
      let size = this.customStyle.fontSize;
      let cal = size - size * 0.25;
      if (cal > 70) cal = 70;
      if (cal < 10) cal = 10;
      this.customStyle.fontSize = cal;
    },
    numberOnly(e) {
      let isNumber = /^[0-9]$/gi.test(e.key);
      if (isNumber) return true;
      e.preventDefault();
    },
  },
};
</script>

<style></style>
