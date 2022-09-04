<template>
  <div>
    <div class="ml-9 section-caption">
      <span v-if="fullSizeNavigation">All boards</span>
      <span> (0)</span>
    </div>
    <div
      class="projects-wrapper d-flex flex-column"
      :class="{ 'projects-wrapper--small': !fullSizeNavigation }"
    >
      <div class="project d-flex align-center">
        <v-icon
          class="project__icon"
          :class="[!fullSizeNavigation ? 'project__icon--small' : '']"
          >$Project</v-icon
        ><span>{{ getProjectName("Sortable") }}</span>
      </div>

      <v-divider v-if="fullSizeNavigation" class="ml-8 my-2"></v-divider>
      <div v-if="fullSizeNavigation" class="add-project d-flex align-center">
        <v-icon class="ml-8 mr-4">$Project</v-icon
        ><span>+ Create New Board</span>
      </div>
      <div v-else class="add-project--small"><span>+</span></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserProjects",
  computed: {
    ...mapState("layout", ["fullSizeNavigation"]),
  },
  methods: {
    getProjectName(name) {
      return this.fullSizeNavigation ? name : name.slice(0, 3).toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped>
.section-caption {
  font-size: 14px;
  color: var(--v-grayscale-darken1);
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.11em;
}
.projects-wrapper {
  padding-right: 28px;
  margin-top: 8px;

  &--small {
    padding-right: 0;
  }
  .project {
    height: 48px;
    cursor: pointer;
    color: var(--v-primary-lighten1);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    &__icon {
      fill: var(--v-primary-lighten1);
      margin-left: 32px;
      margin-right: 16px;

      &--small {
        margin: 0 12px !important;
      }
    }

    &:hover {
      background-color: var(--v-primary-darken1);
    }
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
  &--small {
    font-size: 28px;
    text-align: center;
    color: var(--v-primary-base);
    cursor: pointer;
  }
}
</style>
