<template>
  <b-container class="mt-3">
    <b-row>
      <b-col>
        <b-alert show>Default Alert</b-alert>
        <b-alert show variant="success">Success Alert</b-alert>
        <b-alert
          :show="dismissCountDown"
          dismissible
          variant="info"
          @dismissed="dismissCountDown = 0"
          @dismiss-count-down="countDownChanged"
          >Show Info Alert</b-alert
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
        <b-button variant="info" @click="alertCooldownTimer"
          >Toggle alert with cool-down timer</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    alertCooldownTimer() {
      this.showDismissibleAlert = true;
      this.dismissCountDown = this.dismissSecs
    },
  },
};
</script>

<style></style>
