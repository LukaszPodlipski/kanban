export default {
  namespaced: true,

  state: {
    fullSizeNavigation: true,
  },

  mutations: {
    SET_NAVIGATION_STATE(state, value) {
      state.fullSizeNavigation = value;
    },
  },
  actions: {
    changeNavigationState({ commit, state }) {
      commit("SET_NAVIGATION_STATE", !state.fullSizeNavigation);
    },
  },
};
