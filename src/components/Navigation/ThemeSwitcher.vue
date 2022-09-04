<template>
  <div
    class="switcher d-flex align-center justify-center"
    :class="{ 'switcher--small': !fullSizeNavigation }"
  >
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

<script>
import { mapState } from "vuex";
export default {
  name: "ThemeSwitcher",
  computed: {
    ...mapState("layout", ["fullSizeNavigation"]),
  },
};
</script>

<style lang="scss" scoped>
.switcher {
  background-color: var(--v-grayscale-darken4);
  height: 48px;
  border-radius: 4px;

  &--small {
    flex-direction: column;
  }
}
</style>
