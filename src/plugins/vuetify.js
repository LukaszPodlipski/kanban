import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export const options = {
  theme: {
    options: {
      customProperties: true,
    },
    dark: true,
    themes: {
      dark: {
        primary: {
          base: "#6560BA",
          lighten1: "#DFDCFF",
          darken1: "#5554A0",
          darken2: "#474479",
        },
        grayscale: {
          base: "#E2E3E8",
          darken1: "#70727F",
          darken2: "#E2E3E8",
          darken3: "#2C2C38",
          darken4: "#21212D",
        },
        error: {
          base: "#E8465C",
          lighten1: "#FF9393",
          lighten2: "#FFD5D5",
          darken1: "#BB3748",
          darken2: "#7A0824",
        },
        info: "#2196F3",
        success: {
          base: "#52BA28",
          lighten1: "#AAEA7B",
          lighten2: "#EAFBD4",
          darken1: "#258514",
          darken2: "#095907",
        },
        warning: "#FFC107",
        background: "#f7f9fb",
        black: "#0A0B0B",
      },
    },
    icons: {
      iconfont: "md",
      values: {
        Hamburger: {
          component: HamburgerIcon,
        },
      },
    },
  },
};

export default new Vuetify(options);
