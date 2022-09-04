<template>
  <div class="navigation-header d-flex pa-8 align-center mt-4">
    <v-icon
      class="mr-8 hamburger"
      :ripple="false"
      @click="changeNavigationrState"
      :class="{ 'hamburger--small': !fullSizeNavigation }"
      src="@/assets/img/hamburger.svg"
      >$Hamburger</v-icon
    >
    <h1 v-if="fullSizeNavigation" class="page-title">Kanban</h1>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "NavigationHeader",
  methods: {
    ...mapActions("layout", ["changeNavigationState"]),
    changeNavigationrState() {
      this.changeNavigationState();
    },
  },
  computed: {
    ...mapState("layout", ["fullSizeNavigation"]),
  },
};
</script>

<style lang="scss" scoped>
.navigation-header {
  height: 64px;
  .hamburger {
    cursor: pointer;

    &--small {
      transform: rotate(90deg);
    }
  }
  .page-title {
    color: var(--v-primary-lighten1);
  }
}
.v-icon::after {
  display: none;
}
</style>
