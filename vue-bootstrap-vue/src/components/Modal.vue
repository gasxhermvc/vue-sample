<template>
  <b-container class="mt-3">
    <b-row>
      <b-col>
        <b-button v-b-modal.modal-1>Lunch modal</b-button>

        <b-modal id="modal-1" title="bootstrap vue modal">
          <p class="my-4">Hello from modal!!</p>
        </b-modal>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style></style>
