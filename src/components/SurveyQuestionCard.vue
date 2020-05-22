<template>
  <v-card
    color="#13547a"
    dark
    height="100%"
    min-width="900"
  >
    <!-- <v-img
      class="white--text"
      position="top"
      src="https://picsum.photos/1024/640?random"
      gradient="to top right, rgba(19,84,122,1), rgba(128,208,199,.5)"
    > -->
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-comment-question-outline
      </v-icon>
      <span class="title">Master</span>
    </v-card-title>
    <div
      style="width: 70%;"
      class="px-12 mb-12"
    >
      <p class="headline font-weight-bold">
        <span>1. </span> <span>먼저, 나만의 영문 닉네임을 만들어 주세요</span>
      </p>

      <v-text-field
        class="mx-5"
        v-model="nickname"
        :rules="nameRules"
        :counter="10"
        label="닉네임"
        placeholder="여기에 닉네임을 써주세요"
        required
      />
    </div>
    <v-card-actions class="px-12">
      <!-- color="#80d0c7" -->
      <v-btn
        color="cyan darken-1"
        large
        :disabled="!(nickname.length > 0)"
        width="100"
        class="title"
        @click="next"
      >확인<v-icon right>mdi-check</v-icon>
      </v-btn>

    </v-card-actions>
    <!-- </v-img> -->
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      nickname: '',
      nameRules: [
        v => !!v || '닉네임을 써주세요',
        v => v.length <= 10 || '10글자 미만으로 해주세요',
      ],
    }
  },
  methods: {
    next () {
      this.$emit('next')

    }
  },

}
</script>

<style>
</style>