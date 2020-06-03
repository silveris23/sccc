<template>
  <div>
    <v-card color="#13547a">
      <v-card-title class="headline font-weight-bold">
        {{`${qNumber}.  ${qMessage}`}}
      </v-card-title>
      <v-container class="pa-0">
        <v-row dense>

          <v-col cols="4">
            <v-list
              color="#13547a"
              subheader
            >
              <draggable
                :list="initialList"
                class="dragArea"
                :option="{animation:300, handle:'.handle'}"
                group="tasks"
              >
                <v-list-item
                  v-for="(item) in initialList"
                  :key="item.title"
                  class="handle"
                >
                  <v-list-item-avatar>
                    <v-icon v-text="item.icon" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="title"> {{`${item.title} `}} <span class="subtitle-1 pl-4">({{item.subTitle}})</span></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </draggable>
            </v-list>
          </v-col>
          <v-col cols="2" />
          <v-col
            cols="1"
            class=""
          >
            <v-list
              color="#13547a"
              subheader
            >
              <template v-for="n in 6">
                <v-list-item
                  :key="n"
                  style="border-bottom: 1px solid #13547a"
                >
                  <v-list-item-avatar>
                    <v-icon x-large>{{`mdi-numeric-${n}-box-outline`}}</v-icon>
                  </v-list-item-avatar>
                </v-list-item>
              </template>
            </v-list>
          </v-col>
          <v-col cols="4">
            <v-list
              color="#13547a"
              subheader
            >
              <draggable
                :list="orderedList"
                class="dragArea"
                :option="{animation:300, handle:'.handle'}"
                group="tasks"
              >
                <svg
                  class="box-icon"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 490.667 490.667"
                  style="enable-background:new 0 0 490.667 490.667;"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path d="M416.003,213.333c-8.768,0-16.939,2.667-23.723,7.211C386.435,203.947,370.584,192,352.003,192
			c-8.768,0-16.939,2.667-23.723,7.211c-5.845-16.597-21.696-28.544-40.277-28.544c-7.765,0-15.061,2.091-21.333,5.739v-69.739
			c0-23.531-19.136-42.667-42.667-42.667c-23.531,0-42.667,19.136-42.667,42.667V288l-37.077-27.797
			c-21.995-16.491-53.269-14.272-72.725,5.163c-12.48,12.48-12.48,32.768,0,45.248l151.936,151.936
			c18.133,18.133,42.24,28.117,67.883,28.117h49.984c64.704,0,117.333-52.629,117.333-117.333V256
			C458.669,232.469,439.533,213.333,416.003,213.333z M437.336,373.333c0,52.928-43.072,96-96,96h-49.963
			c-19.947,0-38.699-7.765-52.8-21.867L86.637,295.531c-4.16-4.16-4.16-10.923,0-15.083c6.613-6.613,15.424-9.984,24.299-9.984
			c7.211,0,14.443,2.24,20.544,6.805l54.123,40.597c3.221,2.432,7.552,2.816,11.179,1.003c3.605-1.813,5.888-5.504,5.888-9.536
			V106.667c0-11.755,9.579-21.333,21.333-21.333c11.755,0,21.333,9.579,21.333,21.333v160c0,5.888,4.779,10.667,10.667,10.667
			s10.667-4.779,10.667-10.667v-53.333c0-11.755,9.579-21.333,21.333-21.333c11.755,0,21.333,9.579,21.333,21.333v53.333
			c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667v-32c0-11.755,9.579-21.333,21.333-21.333
			s21.333,9.579,21.333,21.333v32c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667V256
			c0-11.755,9.579-21.333,21.333-21.333s21.333,9.579,21.333,21.333V373.333z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M224.003,21.333c-47.061,0-85.333,38.272-85.333,85.333c0,14.229,3.712,28.117,11.029,41.28
			c1.963,3.499,5.589,5.483,9.344,5.483c1.749,0,3.52-0.427,5.163-1.344c5.141-2.859,6.997-9.365,4.139-14.507
			c-5.547-9.941-8.341-20.352-8.341-30.912c0-35.285,28.715-64,64-64s64,28.715,64,64c0,5.077-0.811,10.389-2.539,16.747
			c-1.557,5.675,1.792,11.541,7.488,13.099c5.589,1.557,11.541-1.792,13.099-7.488c2.24-8.235,3.285-15.339,3.285-22.357
			C309.336,59.605,271.064,21.333,224.003,21.333z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M85.336,0c-5.888,0-10.667,4.779-10.667,10.667v170.667c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667
			V10.667C96.003,4.779,91.224,0,85.336,0z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M135.533,131.136c-4.16-4.16-10.923-4.16-15.083,0l-35.115,35.115L50.2,131.136c-4.16-4.16-10.923-4.16-15.083,0
			c-4.16,4.16-4.16,10.923,0,15.083l42.667,42.667c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.115l42.667-42.667
			C139.693,142.059,139.693,135.296,135.533,131.136z" />
                    </g>
                  </g>
                </svg>
                <v-list-item
                  class="handle"
                  v-for="(item) in orderedList"
                  :key="item.title"
                >
                  <v-list-item-avatar>
                    <v-icon v-text="item.icon" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="title"> {{`${item.title} `}} <span class="subtitle-1 pl-4">({{item.subTitle}})</span></v-list-item-title>

                  </v-list-item-content>

                </v-list-item>
              </draggable>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card-actions>
      <v-btn
        color="pink"
        large
        width="100"
        class="title"
        @click="confirm"
        :disabled="!(orderedList.length === 6)"
      >확인<v-icon right>mdi-check</v-icon>
      </v-btn>
    </v-card-actions>

  </div>
</template>

<script>
// import HoverCard from '@/components/HoverCard'
import draggable from 'vuedraggable'
export default {
  components: {
    // HoverCard,
    draggable
  },
  props: {
    qId: {
      type: String,
      default: ''
    },
    qMessage: {
      type: String,
      default: '지금까지 살면서 가장 잘 이루어 놓은 것은 ? (우선순위대로 선택 해주세요)'
    },
    qNumber: {
      type: String,
      default: "1"
    },
    items: {
      type: Array,
      default: () => [],
    }

  },
  mounted () {
    this.initialList = this.items.map((item, i) => ({ ...item, order: i + 1, fixed: false }))
  },
  data: () => ({
    maxSelectedNumber: 0,
    nextNumber: 1,
    initialList: [],
    orderedList: []
  }),
  methods: {
    move () {
      console.log('moving')
    },
    confirm () {
      this.$emit('nextSlide')
    },
    activate () {
      this.nextNumber++
    },
    deactivate () {
      this.nextNumber--
    },
  },
  computed: {
  },
}
</script>

<style>
.drag {
  height: 100%;
  width: 100%;
  border: 1px solid black;
}
.box {
  border: 1px solid red;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.dragArea {
  min-height: 342px;
  background-color: #13547a;
  border: 1px solid grey;
}

.sortable-chosen {
  opacity: 0.7;
  background-color: #dcdcdc;
}

.sortable-ghost {
  background-color: #dcdcdc;
}
.box-icon {
  width: 100%;
  height: 80px;
  fill: #92b0b3;
  display: block;
  margin-top: 200px;
}
.handle {
  /* padding: 5px;
  margin-right: 10px;
  border: solid #000 1px; */
  cursor: move;
}
</style>