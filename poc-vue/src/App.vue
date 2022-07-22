<template>
  <div class="wrapper">
    <NavBar />
    <div class="container">
      test
      <!-- <router-view></router-view> -->
      <div class="row">
        <div class="col-12">
          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/cats">Cats</router-link>
          </div>
        </div>

        <div class="col-12 bg-light">
          <!-- <router-view /> -->
        </div>
      </div>
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
