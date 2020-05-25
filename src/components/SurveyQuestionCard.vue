<template>
  <v-card
    color="#13547a"
    dark
    height="100%"
    width="100%"
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
    <open-ended-survey
      class="mx-6"
      v-if="questionType === 'openEnded'"
      :q-number="questionNumber"
      :q-message="questionMessage"
      :q-title="questionTitle"
      @nextSlide="next"
    />
    <ordering-survey
      class="ml-12"
      v-if="questionType === 'ordering'"
      :items="items"
      @nextSlide="next"
    />
    <likert-survey
      v-if="questionType === 'likert'"
      @nextSlide="next"
    />
    <!-- </v-img> -->
  </v-card>
</template>

<script>
import OpenEndedSurvey from '@/components/OpenEndedSurvey'
import OrderingSurvey from '@/components/OrderingSurvey'
import LikertSurvey from '@/components/LikertScaleSurvey'
export default {
  components: {
    OpenEndedSurvey,
    OrderingSurvey,
    LikertSurvey
  },
  props: {
    questionNumber: {
      type: Number,
      default: 0
    },
    questionMessage: {
      type: String,
      default: '정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.'
    },
    questionTitle: {
      type: String,
      default: '정당의 목적'
    },
    questionType: {
      type: String,
      default: 'openEnded'

    }
  },
  data () {
    return {
      valid: false,
      nickname: '',
      nameRules: [
        v => !!v || '닉네임을 써주세요',
        v => v.length <= 10 || '10글자 미만으로 해주세요',
      ],
      items: [
        { title: '돈', subTitle: '경제적 안정' },
        { title: '집', subTitle: '가족 간 배려, 소통' },
        { title: '일', subTitle: '전문성/직업의 연속성' },
        { title: '벗', subTitle: '외롭지 않는 삶. 네트웍' },
        { title: '낙', subTitle: '즐거운 꺼리들' },
        { title: '건강', subTitle: '몸과 마음의 건강' }
      ]
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