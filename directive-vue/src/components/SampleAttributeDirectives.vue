<template>
  <div>
    <h3>Binding sample with attribute directive</h3>
    <img v-bind:src="src" :width="width" v-bind:height="height" />

    <h3>Change attribute with array</h3>
    <div :class="myClassArray">Hello World with :class</div>
    <div v-bind:class="myClassArray">Hello World with v-bind:class</div>

    <h3>Chaneg attribute with object</h3>
    <div :class="myClassObject">Hello World with :class</div>
    <div v-bind:class="myClassObject">Hello World with v-bind:class</div>

    <h3>Sample dynamic</h3>
    <div :class="{ green: isDivide, red: !isDivide }">Hello world</div>
    <p>{{ num }} หารสองลงตัว {{ isDivide ? "yes" : "no" }}</p>
    <ul>
      <ol>
        หารลงตัวสีเขียว
      </ol>
      <ol>
        หารไม่ลงตัวสีแดง
      </ol>
    </ul>
    <button @click="random">Random</button>
    <h3>Toggle div</h3>
    <div :class="{ 'd-none': !displayed }">
      Hello World
    </div>
    <button @click="displayed = !displayed">Toggle display</button>
    <br />
    <hr />
    <br />
  </div>
</template>

<script>
export default {
  computed: {
    isDivide() {
      return this.num % 2 === 0;
    },
  },
  data() {
    return {
      displayed: false,
      num: Math.floor(Math.random() * 100),
      myClassObject: {
        "font-18": false,
        "text-left": true,
        bold: true,
      },
      myClassArray: ["font-18", "text-left", "bold"],
      width: "300px",
      height: "200px",
      src:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    };
  },
  methods: {
    random() {
      this.num = Math.floor(Math.random() * 100);
    },
  },
};
</script>

<style>
ul {
  width: 300px;
  list-style: circle;
}
ol {
  list-style: disc;
}
.green {
  color: rgb(19, 250, 58);
}
.red {
  color: rgb(221, 48, 57);
}
.font-18 {
  font-size: 18px;
}
.text-left {
  text-align: left;
}
.bold {
  font-weight: bold;
}
</style>
