<template>
  <v-container
    fluid
    class="main-container"
  >
    <div class="content-box">
      <swiper
        class="swiper"
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
            :question-sub-category="item.subCategory"
            :max-text="item.maxText"
            :question-predicate="item.predicate"
            :answer-list="item.answerList"
            :email-type="item.isEmail"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div class="justify-end d-flex align-center bottom-bar">
      <v-progress-linear :value="progress()" />
      <v-btn
        icon
        x-large
        @click="prev"
        color="secondary"
      >
        <v-icon large>mdi-arrow-up-drop-circle-outline</v-icon>
      </v-btn>
      <v-btn
        icon
        x-large
        @click="next"
        color="secondary"
      >
        <v-icon large>mdi-arrow-down-drop-circle-outline</v-icon>
      </v-btn>
    </div>
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
      speed: 300,
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
.main-container {
  background-image: url("/images/left-bottom.svg");
  background-repeat: no-repeat;
  background-size: 467px;
  background-position: 0px 0px;
  padding: 0px 50px;
  padding-top: 50px;
}
.swiper {
  min-height: 560px;
  height: 50vh;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.box {
  // border: 2px solid red;
}
.content-box {
  // margin-top: 50px;
  min-height: 560px;
  width: 780px;
  margin-left: auto;
  margin-right: auto;
}
.bottom-bar {
  min-width: 1000px;
  min-height: 70px;
  max-height: 80px;
}
</style>