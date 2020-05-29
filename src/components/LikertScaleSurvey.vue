<template>
  <div>
    <v-card color="#13547a">
      <v-card-title class="headline font-weight-bold">
        {{`${qNumber}.`}} <v-chip v-if="subCategory !== ''">{{subCategory}}</v-chip> {{`${qMessage}`}}
      </v-card-title>
      <v-item-group v-model="selected">
        <v-container class="pa-12">
          <v-row
            class="justify-space-between"
            dense
          >
            <template v-if="answerList.length === 0">
              <v-col
                cols="2"
                class="text-left"
              >
                <span>
                  매우 그렇지 않다
                </span>
              </v-col>
              <v-col
                cols="2"
                class="text-right"
              >
                <span>
                  매우 그렇다
                </span>
              </v-col>
            </template>
            <template v-else>
              <v-col
                v-for="n in 10"
                :key="'a'+n"
                cols="1"
                class="text-center"
              >
                <span>
                  {{answerList.filter(a => a.score === n).length ===1 ? answerList.filter(a => a.score === n)[0].message : ''}}
                </span>
              </v-col>
            </template>
          </v-row>
          <v-row
            class="justify-space-between"
            dense
          >

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
                  @click="toggle();confirm()"
                >
                  <div
                    v-if="!active"
                    class="display-1 flex-grow-1 text-center"
                  ><span>{{n}}</span></div>

                  <v-scroll-y-transition>
                    <div
                      style="position: absolute;  top: 50%; left: 50%; transform: translate(-50%, -50%);"
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
        :disabled="!selected"
        @click="confirm"
      >확인<v-icon right>mdi-check</v-icon>
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  props: {
    qId: {
      type: String,
      default: ''
    },
    qNumber: {
      type: String,
      default: ''
    },
    qMessage: {
      type: String,
      default: ''
    },
    qTitle: {
      type: String,
      default: ''
    },
    subCategory:{
      type: String,
      default: ''
    },
    answerList: {
      type: Array,
      default: () => []
    }
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