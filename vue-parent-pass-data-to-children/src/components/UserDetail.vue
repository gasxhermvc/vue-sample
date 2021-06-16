<template>
  <b-col :sm="sm" :lg="lg" class="mb-3 pointer" @click="onSelected(user)">
    <b-card :class="{ selected: user.selected }">
      <b-card-text class="present text-left">
        <b-col> ชื่อจริง: {{ user.name }} </b-col>
        <b-col> ชื่อผู้ใช้งาน: {{ user.username }} </b-col>
      </b-card-text>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
      default: null,
    },
    sm: {
      type: Number,
      default: 6,
    },
    lg: {
      type: Number,
      default: 4,
    },
  },
  methods: {
    onSelected(user) {
      user.selected = !user.selected;
      this.$emit("updateSelected", user);
    },
  },
};
</script>

<style>
.present {
  white-space: pre-line;
  word-break: break-all;
}
.pointer {
  cursor: pointer;
}
.selected {
  border-color: rgb(57, 57, 177);
}
</style>
