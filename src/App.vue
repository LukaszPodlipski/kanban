<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({}),
};
</script>

<style>
@import url("http://fonts.cdnfonts.com/css/manrope");
.v-application {
  font-family: "Manrope", sans-serif !important;
}
</style>
