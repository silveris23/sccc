<template>
  <v-card
    height="100%"
    width="100%"
  >
    <!-- <v-img
      class="white--text"
      position="top"
      src="https://picsum.photos/1024/640?random"
      gradient="to top right, rgba(19,84,122,1), rgba(128,208,199,.5)"
    > -->
    <div class="d-flex justify-space-between">
      <div class="d-flex survey-category">
        <v-icon
          large
          left
          color="secondary"
        >
          mdi-comment-question-outline
        </v-icon>
        <span>{{questionCategory}}</span>
      </div>
      <div class="survey-category-border"></div>
    </div>
    <open-ended-survey
      class="mx-6"
      v-if="questionType === 'openEnded'"
      :q-number="questionNumber"
      :q-message="questionMessage"
      :q-title="questionTitle"
      :email-type="emailType"
      :q-predicate="questionPredicate"
      :max-text="maxText"
      @nextSlide="next"
    />
    <ordering-survey
      class="ml-12"
      v-if="questionType === 'ordering'"
      :q-number="questionNumber"
      :q-message="questionMessage"
      :items="answerList"
      @nextSlide="next"
    />
    <likert-survey
      v-if="questionType === 'likertScale'"
      :q-number="questionNumber"
      :q-message="questionMessage"
      :q-title="questionTitle"
      :answer-list="answerList"
      :sub-category="questionSubCategory"
      @nextSlide="next"
    />
    <!-- </v-img> -->
  </v-card>
</template>

<script>
import OpenEndedSurvey from '@/components/OpenEndedSurvey'
import OrderingSurvey from '@/components/OrderingSurveyAlt'
import LikertSurvey from '@/components/LikertScaleSurvey'
export default {
  components: {
    OpenEndedSurvey,
    OrderingSurvey,
    LikertSurvey
  },
  props: {
    questionCategory: {
      type: String,
      default: 'Master'
    },
    questionSubCategory: {
      type: String,
      default: ''
    },
    questionNumber: {
      type: String,
      default: 'questionNumber'
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
    },
    questionPredicate: {
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
    answerList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      valid: false,
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

<style lang="scss">
.survey-category {
  font-weight: 900 !important;
  color: #70cae9;
  font-size: 24px;
}
.survey-category-border {
  margin: 0px 20px;
  border-bottom: 1px solid #70cae9;
  flex-basis: 80%;
}
</style>