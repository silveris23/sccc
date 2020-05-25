<template>
  <div>
    <v-card color="#13547a">
      <v-card-title class="headline font-weight-bold">
        {{`${qNumber}.  ${qMessage}`}}
      </v-card-title>
      <v-item-group
        v-model="selected"
        :mandatory="mandatory"
        :multiple="multiple"
      >
        <v-container class="pa-12">
          <v-row justify="center" dense>
            <v-col cols="6" class="text-left"><span>매우 그렇지 않다</span></v-col>
            <v-col cols="6" class="text-right"><span>매우 그렇다</span></v-col>
            <v-col
              v-for="n in 10"
              :key="n"
              cols="1"
            >
              <v-item v-slot:default="{ active, toggle }">
                <v-card
                  :color="active ? 'primary' : '#385F73'"
                  class="d-flex align-center"
                  outlined
                  height="70"
                  @click="toggle"
                >
                <div v-if="!active" class="display-1 flex-grow-1 text-center"><span >{{n}}</span></div>

                  <v-scroll-y-transition>
                    <div style="position: absolute;  top: 50%; left: 50%; transform: translate(-50%, -50%);"
                      v-if="active"
                      class="display-3 flex-grow-1 text-center"
                    >
                      {{n}}
                    </div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-card>
    <v-card-actions>
      <v-btn
        color="pink"
        large
        width="100"
        class="title"
        @click="confirm"
      >확인<v-icon right>mdi-check</v-icon>
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  props: {
    qNumber: {
      type: Number,
      default: 0
    },
    qMessage: {
      type: String,
      default: ''
    },
    qTitle: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      selected: null,
    }
  },
  methods: {
    confirm () {
      this.$emit('nextSlide')

    }
  }
}

</script>

<style>
</style>