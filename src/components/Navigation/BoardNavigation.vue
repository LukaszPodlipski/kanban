<template>
  <div
    class="board-navigation d-flex flex-column justify-space-between"
    :class="{ 'board-navigation--small': !fullSizeNavigation }"
  >
    <div>
      <NavigationHeader></NavigationHeader>
      <UserProjects></UserProjects>
    </div>
    <ThemeSwitcher
      v-if="fullSizeNavigation"
      class="theme-switcher"
    ></ThemeSwitcher>
  </div>
</template>

<script>
import ThemeSwitcher from "./ThemeSwitcher.vue";
import NavigationHeader from "./NavigationHeader.vue";
import UserProjects from "./UserProjects.vue";
import { mapState } from "vuex";
export default {
  name: "BoardNavigation",
  components: {
    ThemeSwitcher,
    NavigationHeader,
    UserProjects,
  },
  computed: {
    ...mapState("layout", ["fullSizeNavigation"]),
  },
};
</script>

<style lang="scss" scoped>
.board-navigation {
  height: 100vh;
  width: 300px;
  background-color: var(--v-grayscale-darken3);
  position: relative;
  border: 2px solid var(--v-grayscale-darken4);

  &--small {
    width: 100px;
  }

  .theme-switcher {
    width: 80%;
    margin: 0 auto 32px auto;
  }
}
</style>
