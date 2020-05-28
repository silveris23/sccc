<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          생애연표
        </h1>
        <!-- <p class="subheading font-weight-regular">
        </p> -->
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        class="mb-5"
        cols="8"
      >
        <h2 class="headline font-weight-bold mb-3 text-center">
          안녕하세요
        </h2>
        <swiper
          class="swiper box"
          :options="swiperOption"
          ref="mySwiper"
        >
          <swiper-slide
            v-for="(item) in surveyList"
            :key="item.id"
          >
            <survey-question-card
              @next="next"
              :question-type="item.type"
              :question-category="item.category"
              :question-number="item.number"
              :question-message="item.message"
              :question-title="item.title"
              :max-text="item.maxText"
              :question-predicate="item.predicate"
              :answer-list="item.answerList"
              :email-type="item.isEmail"
            />
          </swiper-slide>
          <!--<swiper-slide>
             <survey-question-card
              @next="next"
              question-category="Master"
              :question-number="0"
              question-message="먼저 나만의 영문 닉네임을 만들어주세요"
              question-title="닉네임"
              question-type="openEnded"
              :max-text="12"
            />
          </swiper-slide>
          <swiper-slide>
            <survey-question-card
              @next="next"
              question-category="Master"
              :question-number="1"
              question-message="상담결과를 받으실 이메일 주소를 남겨주세요"
              question-title="이메일"
              question-type="openEnded"
              email-type
              :max-text="30"
            />
          </swiper-slide>
          <swiper-slide>
            <survey-question-card
              @next="next"
              question-category="Master"
              question-type="ordering"
              :question-number="2"
              question-message="지금까지 살면서 가장 잘 이루어 놓은 것은?"
            />
          </swiper-slide>
          <swiper-slide>
            <survey-question-card
              @next="next"
              question-category="Master"
              question-type="ordering"
              :question-number="3"
              question-message="앞으로 살면서(2nd Life) Risk(위험)에 노출될 수 있는 가장 위협적인 것은?"
            />
          </swiper-slide>
          <swiper-slide
            v-for="(item, i) in likert"
            :key="item.qId+i"
          >
            <survey-question-card
              @next="next"
              question-category="Master"
              question-type="likert"
              :question-number="4+i"
              :question-message="item.question"
            />
          </swiper-slide>
          <swiper-slide>
            <survey-question-card
              @next="next"
              question-category="Master"
              :question-number="0"
              question-message="지금까지 살아온 나의 삶은"
              question-title=""
              question-type="openEnded"
              :max-text="12"
              question-predicate="삶이었다."
            />
          </swiper-slide>
          <swiper-slide>
            <survey-question-card
              @next="next"
              question-category="Master"
              :question-number="0"
              question-message="내가 생각하는 행복한 삶이란"
              question-title=""
              question-type="openEnded"
              :max-text="12"
              question-predicate="삶이다."
            />
          </swiper-slide>
          <swiper-slide>
            <survey-question-card
              @next="next"
              question-category="Master"
              :question-number="0"
              question-message="삶의 이정표가 될 만한 나의 롤 모델은"
              question-title=""
              question-type="openEnded"
              :max-text="12"
              question-predicate="이다."
            />
          </swiper-slide> -->
          <!-- <div class="swiper-button-prev" slot="button-prev" />
          <div class="swiper-button-next" slot="button-next" /> -->

        </swiper>
      </v-col>
      <v-col
        cols="8"
        class="justify-end d-flex align-center"
      >
        <v-progress-linear :value="progress()" />
        <v-btn
          icon
          x-large
          @click="prev"
        >
          <v-icon large>mdi-arrow-up-drop-circle-outline</v-icon>
        </v-btn>
        <v-btn
          icon
          x-large
          @click="next"
        >
          <v-icon large>mdi-arrow-down-drop-circle-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import SurveyQuestionCard from '@/components/SurveyQuestionCard'
import surveyData from '@/store/survey.json'
export default {
  name: 'HelloWorld',
  components: {
    SurveyQuestionCard,
  },
  mounted () {
  },
  data: () => ({
    swiperOption: {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 30,
      // mousewheel: true,
      speed: 500,
      allowTouchMove: false,
      // allowSlidePrev: false,
      // allowSlideNext: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },
    currentSlideSeq: 0,
    surveyList: surveyData

  }),
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    next () {
      this.swiper.slideNext()
      this.currentSlideSeq++
    },
    prev () {
      this.swiper.slidePrev()
      this.currentSlideSeq--
      if (this.currentSlideSeq < 0) this.currentSlideSeq = 0
    },
    progress () {
      return this.currentSlideSeq / (this.surveyList.length || 1) * 100
    }
  },
}
</script>
<style scoped lang="scss">
.swiper {
  height: 60vh;
  width: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.box {
  // border: 2px solid red;
}
</style>