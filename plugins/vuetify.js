// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from "vuetify/lib/util/colors";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.teal.darken4, // #E53935
            secondary: colors.teal.lighten4, // #FFCDD2
            success: colors.green.darken4, //#D50000
            error: colors.red.accent4, //#D50000
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
