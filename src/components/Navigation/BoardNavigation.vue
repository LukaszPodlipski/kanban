<template>
  <div class="board-navigation d-flex flex-column">
    <div class="d-flex pa-8 align-center">
      <v-icon class="mr-8 hamburger" src="@/assets/img/hamburger.svg"
        >$Hamburger</v-icon
      >
      <h1 class="page-title">Kanban</h1>
    </div>
    <div class="theme-switcher d-flex align-center justify-center">
      <v-switch
        v-model="$vuetify.theme.dark"
        :ripple="false"
        inset
        dense
        persistent-hint
      ></v-switch>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.board-navigation {
  height: 100vh;
  width: 300px;
  background-color: var(--v-grayscale-darken3);
  position: relative;
  .hamburger {
    cursor: pointer;
  }

  .page-title {
    color: var(--v-primary-lighten1);
  }
  .theme-switcher {
    background-color: var(--v-grayscale-darken4);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 80%;
    margin: 0 auto 24px auto;
    height: 48px;
    border-radius: 4px;
  }
}
</style>
