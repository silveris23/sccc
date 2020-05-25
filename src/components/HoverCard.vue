<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      @click="toggle"
      :color="activate ? 'purple' : '#385F73'"
      :raised="activate"
      :outlined="!activate"
      height="15vh"
      class="d-flex align-center"
    >
      <v-chip
        v-if="activate"
        label
        class="transition-fast-in-fast-out headline purple--text"
        color="white"
        style="position: absolute; top:10px; left: 10px;"
      >
        {{order}}
      </v-chip>
      <!-- <v-btn
        v-if="activate"
        dark
        fab
        color="grey"
        class="white--text title"
        style="position: absolute; top:10px; left: 10px;"
      >
        {{order}}
      </v-btn> -->
      <v-card-text class="title text-center ">
        {{title}} <br>
        {{`(${subTitle})`}}
      </v-card-text>
      <v-expand-transition>
        <div
          v-if="!activate && hover"
          class="d-flex transition-fast-in-fast-out accent darken-2 v-card--reveal display-3 white--text"
        >
          {{nextNumber}}
        </div>

        <v-icon
          size="72"
          v-if="activate && hover && order === (nextNumber -1)"
          class="selected-card transition-fast-in-fast-out"
          color="white"
        >
          mdi-close
        </v-icon>
      </v-expand-transition>

    </v-card>

  </v-hover>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    nextNumber: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      activate: false,
      order: 0

    }
  },
  methods: {
    toggle () {

      if ((this.order > 0 && this.order === (this.nextNumber - 1)) || this.order === 0) {
        this.activate = !this.activate
        if (this.activate) {
          this.$emit('activate')
          this.order = this.nextNumber
        } else {
          this.$emit('deactivate', this.order)
          this.order = 0
        }
      }

    }
  },

}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.3;
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.selected-card {
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>