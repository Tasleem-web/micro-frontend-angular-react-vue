<template>
  <div :class="typeClass" class="alert-dismissible fade show" role="alert">
    <!-- <svg
      class="bi flex-shrink-0 me-2"
      width="24"
      height="24"
      role="img"
      aria-label="Success:"
    >
      <use xlink:href="#check-circle-fill" />
    </svg> -->

    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
    {{ notification?.message }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NotificationMessage",
  props: ["notification"],
  data() {
    return {
      timeout: null,
    };
  },
  computed: {
    typeClass() {
      return `alert alert-${this.notification.type}`;
    },
  },
  methods: mapActions(["removeNotification"]),
  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 3000);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
};
</script>

<style scoped></style>
