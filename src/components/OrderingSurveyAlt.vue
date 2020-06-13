<template>
  <div>
    <v-card color="transparent" flat>
      <v-card-title class="display-3 font-weight-bold q-message">{{`${qNumber}. ${qMessage}`}}</v-card-title>
      <v-container class="pa-0">
        <v-row dense>
          <v-col cols="6">
            <draggable
              :list="initialList"
              class="dragArea"
              :option="{animation:300, handle:'.handle'}"
              group="tasks"
            >
              <div
                v-for="(item, i) in initialList"
                :key="item.title"
                :class="['row-box','handle', i === initialList.length-1 ? 'no-border' : '']"
              >
                <!-- <v-list-item-avatar>
                    <v-icon v-text="item.icon" />
                </v-list-item-avatar>-->

                <div class="answer">
                  {{`${item.title} `}}
                  <span class="pl-4">({{item.subTitle}})</span>
                </div>
              </div>
            </draggable>
          </v-col>
          <!-- <v-col cols="2" /> -->

          <v-col cols="6">
            <div class="drag-box">
              <div class="number-box">
                <template v-for="n in 6">
                  <div class="row-box" :key="n">
                    <v-icon large color="secondary">{{`mdi-numeric-${n}-box-outline`}}</v-icon>
                  </div>
                </template>
              </div>
              <draggable
                :list="orderedList"
                :class="['order-box', orderedList.length === 0? 'empty-box' : 'not-empty-box']"
                :option="{animation:300, handle:'.handle'}"
                group="tasks"
              >
                <div
                  class="row-box handle no-border"
                  v-for="(item) in orderedList"
                  :key="item.title"
                >
                  <div class="answer">
                    {{`${item.title} `}}
                    <span class="pl-4">({{item.subTitle}})</span>
                  </div>
                </div>
              </draggable>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card-actions>
      <v-btn
        color="#70cae9"
        width="100"
        class="headline white--text"
        @click="confirm"
        :disabled="!(orderedList.length === 6)"
      >
        확인
        <v-icon right>mdi-check</v-icon>
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
// import HoverCard from '@/components/HoverCard'
import draggable from "vuedraggable";
export default {
  components: {
    // HoverCard,
    draggable
  },
  props: {
    qId: {
      type: String,
      default: ""
    },
    qMessage: {
      type: String,
      default:
        "지금까지 살면서 가장 잘 이루어 놓은 것은 ? (우선순위대로 선택 해주세요)"
    },
    qNumber: {
      type: String,
      default: "1"
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.initialList = this.items.map((item, i) => ({
      ...item,
      order: i + 1,
      fixed: false
    }));
    console.log(this.$vuetify);
  },
  data: () => ({
    maxSelectedNumber: 0,
    nextNumber: 1,
    initialList: [],
    orderedList: []
  }),
  methods: {
    move() {
      console.log("moving");
    },
    confirm() {
      this.$emit("nextSlide");
    },
    activate() {
      this.nextNumber++;
    },
    deactivate() {
      this.nextNumber--;
    }
  },
  computed: {}
};
</script>

<style>
.q-message {
  color: #5878b8;
}
.answer {
  color: #70cae9 !important;
  font-size: 20px !important;
}
.no-border {
  border-bottom: none !important;
}
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
  background-color: transparent;
  border: 1px solid #70cae9;
  color: #70cae9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.drag-box {
  display: flex;
  border: 1px solid #70cae9;
  padding: 20px;
  height: 348px;
}
.order-box {
  padding-left: 15px;
  width: 100%;
}
.empty-box {
  background: url(/images/drag.svg) no-repeat center center;
  background-size: 30%;
  transition: background 1s ease-in-out;
}
.not-empty-box {
  background-color: transparent;
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
.row-box {
  flex: 0;
  margin-bottom: 3px;
  min-height: 48px;
  display: flex;
  align-items: center;
}
.handle {
  /* padding: 5px;
  margin-right: 10px;*/
  border-bottom: 1px solid #70cae9;
  cursor: move;
}
</style>