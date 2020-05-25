<template>
  <div>
    <v-card color="#13547a">
      <v-card-title class="headline font-weight-bold">
        {{`${qNumber}.  ${qMessage}`}}
      </v-card-title>
      <div style="width: 60%">
        <v-text-field
          class="mx-5"
          v-model="answer"
          :rules="nameRules"
          :counter="10"
          :label="qTitle"
          :placeholder="`여기에 ${qTitle}을 써주세요`"
          required
        />
      </div>
    </v-card>
    <v-card-actions>
      <v-btn
        color="pink"
        large
        :disabled="!(answer.length > 0)"
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
      valid: false,
      answer: '',
      nameRules: [
        v => !!v || '닉네임을 써주세요',
        v => v.length <= 10 || '10글자 미만으로 해주세요',
      ],
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