<template>
  <div class="d-flex">
    <BoardNavigation></BoardNavigation>
  </div>
</template>

<script>
import BoardNavigation from "@/components/Navigation/BoardNavigation.vue";

export default {
  name: "BoardView",
  components: {
    BoardNavigation,
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped></style>
