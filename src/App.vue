<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar
      app
      color="primary"
      src="/images/senior-bg.jpg"
      dark
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,1), rgba(128,208,199,.5)"
        />
      </template>
      <v-btn
        icon
        x-large
      >
        <v-icon>mdi-tree</v-icon>
      </v-btn>
      <v-toolbar-title class="headline">행복한 2nd Life Re-design</v-toolbar-title>

      <v-spacer />
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">삼성금융경력커리어센터</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Survey />
    </v-content>
  </v-app>
</template>

<script>
import Survey from './components/SurveyPrototype';

export default {
  name: 'App',

  components: {
    Survey,
  },

  data: () => ({
    //
  }),
  computed: {
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
};
</script>
