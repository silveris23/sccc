<template>
  <v-form
    ref="form"
    v-model="valid"
    :lazy-validation="lazy"
  >
    <v-card color="#13547a">
      <v-card-title class="headline font-weight-bold">
        {{`${qNumber}.  ${qMessage}`}}
      </v-card-title>
      <div class="d-flex">
        <div style="width: 300px">
          <v-text-field
            class="mx-5"
            v-model="answer"
            :rules="emailType ? [rules.required, rules.emailRules] : [rules.required]"
            :counter="maxText"
            :label="qTitle"
            :placeholder="`여기에 ${qTitle}을 써주세요`"
            required
            @keyup.enter="confirm"
          />
        </div>
        <div
          v-if="qPredicate.length > 0"
          class="headline pt-5"
        > <span>{{qPredicate}}</span>
        </div>
      </div>
    </v-card>
    <v-card-actions>
      <v-btn
        color="pink"
        large
        :disabled="!valid"
        width="100"
        class="title"
        @click="confirm"
      >확인<v-icon right>mdi-check</v-icon>
      </v-btn>
      <v-btn
        text
        color="grey"
        class="title"
        v-if="valid"
      >
        Enter 키를 눌러주세요 <v-icon>mdi-keyboard-return</v-icon>
      </v-btn>

    </v-card-actions>
  </v-form>
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
      default: "qNumber"
    },
    qMessage: {
      type: String,
      default: ''
    },
    qTitle: {
      type: String,
      default: ''
    },
    qPredicate: {
      type: String,
      default: ''

    },
    emailType: {
      type: Boolean,
      default: false
    },
    maxText: {
      type: Number,
      default: 10
    },
  },
  data () {
    return {
      valid: true,
      answer: '',
      lazy: false,
      rules: {
        required: value => !!value || '꼭 써주셔야 합니다',
        counter: value => value.length <= 20 || '최대 20 글자까지 해주세요',
        emailRules: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },

      }
    }
  },
  methods: {
    confirm () {
      this.valid && this.$emit('nextSlide')
    }
  }
}

</script>

<style>
</style>