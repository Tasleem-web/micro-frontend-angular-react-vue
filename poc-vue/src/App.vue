<template>
  <div class="wrapper">
    <NavBar />
    <div class="container">test
      <router-view></router-view>
    </div>
    <NotificationsList />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import NotificationsList from "./components/NotificationsList.vue";
export default {
  name: "App",
  components: {
    NavBar,
    NotificationsList,
  },
  // setup() {

  // },
};
</script>

<style>
a.disabled {
  color: gray;
  pointer-events: none;
}
</style>
