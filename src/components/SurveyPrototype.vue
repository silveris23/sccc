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
    <v-row>
      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3 text-center ">
          안녕하세요
        </h2>
        <swiper
          class="swiper"
          :options="swiperOption"
          ref="mySwiper"
        >
          <swiper-slide class="swiper-slide">
            <survey-question-card @next="next" />
          </swiper-slide>
          <swiper-slide>
            <survey-question-card @next="next" />
          </swiper-slide>
          <swiper-slide>
            <survey-question-card @next="next" />
          </swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
          <swiper-slide>Slide 7</swiper-slide>
          <swiper-slide>Slide 8</swiper-slide>
          <swiper-slide>Slide 9</swiper-slide>
          <swiper-slide>Slide 10</swiper-slide>

        </swiper>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

import SurveyQuestionCard from '@/components/SurveyQuestionCard'
export default {
  name: 'HelloWorld',
  components: {
    SurveyQuestionCard,
  },
  data: () => ({
    swiperOption: {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      speed: 500,
    }

  }),
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    next () {
      this.swiper.slideNext()


    }
  },
}
</script>
<style scoped lang="scss">
.swiper {
  height: 70vh;
  width: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1024px;
    margin: auto;
  }
}
.box {
  border: 2px solid red;
}
</style>