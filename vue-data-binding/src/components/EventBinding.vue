<template>
  <b-container class="mb-3">
    <b-row>
      <b-col>
        <strong v-bind:style="{ color: color }">Display color</strong>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button type="button" v-on:click="setColorRed">v-on:click</b-button>
        <b-button type="button" @click="setColorBlue">@click</b-button>
        <b-button type="button" @click.shift="setColorGreen"
          >Shift + Click</b-button
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <label>Number only</label>
        <b-form-input @keypress="allowNumberOnly" v-model="text"></b-form-input>

        <p>Result: {{ text }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  model: {
    event: "click",
  },
  data() {
    return {
      color: "red",
      text: "",
    };
  },
  methods: {
    setColorRed() {
      this.color = "red";
    },
    setColorBlue() {
      this.color = "blue";
    },
    setColorGreen() {
      this.color = "green";
    },
    allowNumberOnly(e) {
      let isNumber = /^[0-9]$/gi.test(e.key);
      //=>ถ้าเป็น number จะอนุญาตให้พิมพ์เข้าไป
      if (isNumber) return true;

      //=>ไม่ใช่ number จะหยุดอีเว้นท์ทันที
      e.preventDefault();
    },
  },
};
</script>

<style></style>
