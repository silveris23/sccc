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
                :class="['dragArea',  'order-box', orderedList.length === 0? 'empty-box' : 'not-empty-box']"
                :option="{animation:300, handle:'.handle'}"
                group="tasks"
              >
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
.order-box {
  border: 2px dashed grey !important;
}
.empty-box{
  background: url(/images/drag.svg) no-repeat center center;
  background-size: 30%;
  transition: background 1s ease-in-out;
}
.not-empty-box {
  background-color: #13547a
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