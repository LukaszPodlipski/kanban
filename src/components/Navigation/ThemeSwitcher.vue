<template>
  <div class="switcher d-flex align-center justify-center">
    <v-icon class="mr-4">$Sun</v-icon>
    <v-switch
      v-model="$vuetify.theme.dark"
      :ripple="false"
      inset
      dense
      persistent-hint
    ></v-switch>
    <v-icon>$Moon</v-icon>
  </div>
</template>

<style lang="scss" scoped>
.switcher {
  background-color: var(--v-grayscale-darken4);
  height: 48px;
  border-radius: 4px;
}
</style>
