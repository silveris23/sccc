<template>
  <div>
    <v-card color="#13547a">
      <v-card-title class="headline font-weight-bold">
        {{`${qNumber}.  ${qMessage}`}}
      </v-card-title>
      <v-container>
        <v-row class="px-10">
          <v-col
            v-for="(item) in items"
            :key="item.title"
            cols="4"
          >
            <hover-card
              class="ma-2"
              :next-number="nextNumber"
              :title="item.title"
              :sub-title="item.subTitle"
              @activate="activate"
              @deactivate="deactivate"
            />
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
        :disabled="!(nextNumber === items.length +1 )"
      >확인<v-icon right>mdi-check</v-icon>
      </v-btn>
    </v-card-actions>

  </div>
</template>

<script>
import HoverCard from '@/components/HoverCard'
export default {
  components: {
    HoverCard,
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
  data: () => ({
    maxSelectedNumber: 0,
    nextNumber: 1,
    selected: [],
  }),
  methods: {
    confirm () {
      this.$emit('nextSlide')
    },
    activate () {
      this.nextNumber++
    },
    deactivate () {
      this.nextNumber--
    }
  },
  computed: {
  },
}
</script>

<style>
</style>