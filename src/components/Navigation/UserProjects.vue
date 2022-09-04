<template>
  <div>
    <span class="ml-9 section-caption">All boards (0)</span>
    <div class="d-flex flex-column pr-7 mt-2">
      <div class="project d-flex align-center">
        <v-icon class="ml-8 mr-4">$Project</v-icon><span>Sortable</span>
      </div>
      <v-divider class="ml-8 my-2"></v-divider>
      <div class="add-project d-flex align-center">
        <v-icon class="ml-8 mr-4">$Project</v-icon
        ><span>+ Create New Board</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-caption {
  font-size: 14px;
  color: var(--v-grayscale-darken1);
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.11em;
}
.project {
  height: 48px;
  cursor: pointer;
  color: var(--v-primary-lighten1);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  &:hover {
    background-color: var(--v-primary-darken1);
  }
  .v-icon {
    fill: var(--v-primary-lighten1);
  }
}

.add-project {
  height: 48px;
  cursor: pointer;
  color: var(--v-primary-base);
  .v-icon {
    fill: var(--v-primary-base);
  }
  &:hover {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: var(--v-primary-darken2);
  }
}
</style>
