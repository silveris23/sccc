import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import { preset } from 'vue-cli-plugin-vuetify-preset-reply/preset'

import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify)

export default new Vuetify({
  // preset,
  theme: {
    dark: false,
    themes: {
      light: {
        // primary: colors.teal.base,
        primary: '#5878b8',
        secondary: '#70cae9',
        // secondary: colors.orange.base,
        accent: colors.blueGrey.base,
        error: colors.deepOrange.base,
        warning: colors.amber.base,
        info: colors.lightGreen.base,
        success: colors.indigo.base
      },
      dark: {
        background: "#13547a",
        // background: colors.blueGrey.darken2
      }
    },
  },
})
