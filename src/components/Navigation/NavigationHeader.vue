<template>
  <div class="navigation-header d-flex pa-8 align-center">
    <v-icon class="mr-8 hamburger" src="@/assets/img/hamburger.svg"
      >$Hamburger</v-icon
    >
    <h1 class="page-title">Kanban</h1>
  </div>
</template>

<style lang="scss" scoped>
.navigation-header {
  .hamburger {
    cursor: pointer;
  }
  .page-title {
    color: var(--v-primary-lighten1);
  }
}
</style>
