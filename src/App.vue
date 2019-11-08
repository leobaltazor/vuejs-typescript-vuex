<template>
<div>
  <b-navbar variant="primary" type="light" fixed="top">
    <b-container>
      <b-row>
        <b-col>
        <b-navbar-brand href="#">Home</b-navbar-brand>
        </b-col>
      </b-row>
    </b-container>
  </b-navbar>
  <div class="content">
  <b-container>
    <HomePage />
  </b-container>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomePage from "@/page/HomePage.vue";

@Component({
  components: {
    HomePage,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  .content {
    padding: 60px 0;
  }
</style>
