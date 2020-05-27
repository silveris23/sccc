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
          <!-- <swiper-slide>
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
          </swiper-slide> -->
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
    },
    likert: [
      { catetory: '관계', question: '배우자(비혼의 경우 친지)와 소통이 잘 되고 있다고 생각한다', qId: '관계-likert-1' },
      { catetory: '관계', question: '자녀(자녀가 없는 경우 친구)와 소통이 잘 되고 있다고 생각한다', qId: '관계-likert-2' },
      { catetory: '관계', question: '가족(비혼의 경우, 친지 또는 친구)과 함께 취미활동을 하거나 또는 관심영역에 대한 대화를 즐겨하는 편이다', qId: '관계-likert-3' },
      { catetory: '관계', question: '관심분야(또는 취미)를 즐기고, 개발하기 위해 외부사람들과 적극적으로 교류하고 있다', qId: '관계-likert-4' },
      { catetory: '관계', question: '내가 어려울 때 도움을 줄 수 있는 사람이 있을 것이다', qId: '관계-likert-5' },
      { catetory: '관계', question: '타인과 교류시 타인과 나를 비교하지 않고 개인의 다름을 인정하는 편이다', qId: '관계-likert-6' },
      { catetory: '관계', question: '주변 지인들이 나는 상대적으로 타인에 대한 배려를 잘 한다고 말한다', qId: '관계-likert-7' },
      { catetory: '관계', question: '주변 지인들이 나는 솔직한 나의 감정을 잘 표현한다고 한다', qId: '관계-likert-8' },
      { catetory: '관계', question: '주변 지인들이 나는 잘 경청해주는 편이다라고 말한다', qId: '관계-likert-9' },
      { catetory: '관계', question: '나는 나의 행복(즐거움)을 위해 누구와도 기꺼이 대화하고 어울릴 수 있다', qId: '관계-likert-10' },
      { catetory: '커리어', question: '업무외 시간(퇴근 후, 주말 등)에 자기개발을 위해 시간과 노력을 투자하고 있다', qId: '커리어-likert-1' },
      { catetory: '커리어', question: '새로운 경력개발을 위해 향후 3년간 무엇을 해야 할 지 계획을 가지고 있다', qId: '커리어-likert-2' },
      { catetory: '커리어', question: '주직장 퇴직 후 어떤 직업을 가질 지 구체화하였다', qId: '커리어-likert-3' },
      { catetory: '커리어', question: '현재의 전문성으로 은퇴 크레바스(60~64세)까지에도 직업으로 유지할 수 있다', qId: '커리어-likert-4' },
      { catetory: '커리어', question: '나의 경력의 장,단점을 잘 알고 있다', qId: '커리어-likert-5' },
      { catetory: '커리어', question: '주직장 퇴직 후에도 새로운 직업을 찾아 계속 유지할 생각이다', qId: '커리어-likert-6' },
      { catetory: '커리어', question: '주직장 퇴직 후에 새로운 직장(직업)에서 직급이나 소득의 변화가 현저하더라도 수용 할 수 있다', qId: '커리어-likert-7' },
      { catetory: '커리어', question: '주직장 퇴직 후에도 활용할 수 있는 경력자산(자격증, 어학, 노하우 등)이 충분하다', qId: '커리어-likert-8' },
      { catetory: '커리어', question: '시간만 주어진다면 꼭 하고 싶은 취미나 관심영역이 있다', qId: '커리어-likert-9' },
      { catetory: '커리어', question: '주변지인(가족 친지, 학교/사회/업무관계의 네트웍) 중에 함께 할 사업 아이템이나 취업 가능한 네트웍이 있다', qId: '커리어-likert-10' },
      { catetory: '건강', question: '나는 같은 동년배 대비 건강상태가 양호하다고 생각한다', qId: '건강-likert-1' },
      { catetory: '건강', question: '건강검진 결과 대사증후군 항목(복부 비만, 고혈압, 고혈당, 고 중성지방혈증, 저 HDL 콜레스테롤 혈증)중, 몇개가 증상이 있는지? (10_1개 미만, 8_2개, 6_3개, 4_4개, 2_5개)', qId: '건강-likert-2' },
      { catetory: '건강', question: '평소 식사메뉴 선택시 균형적인 식단을 고려하여 메뉴를 선택한다', qId: '건강-likert-3' },
      { catetory: '건강', question: '30분 이상의 시간이 소요되는 운동을 자주 하는 편이다 (10_매일, 8_주3회, 6_주2~3회, 4_주 1회, 2_거의 안함)', qId: '건강-likert-4' },
      { catetory: '건강', question: '스트레스 관리를 위해 평소 나만의 방법으로 해소 하고 있다', qId: '건강-likert-5' },
      { catetory: '건강', question: '여가 활동을 즐기는 편이다', qId: '건강-likert-6' },
      { catetory: '건강', question: '즐기는 여가 활동은 전문가 수준이다', qId: '건강-likert-7' },
      { catetory: '건강', question: '건강유지와 여가활동을 위해 합리적인 수준에서 비용지출은 감내할 수 있다', qId: '건강-likert-8' },
      { catetory: '건강', question: '평소 음주를 전혀 하지 않는다 (10_전혀안함, 8_주1회, 6_주2~3회, 4_주 5회, 2_거의 매일)', qId: '건강-likert-9' },
      { catetory: '건강', question: '평소 흡연을 전혀 하지 않는다 (10_전혀안함, 8_1일_10개피 미만, 6_1일_10~20개피, 4_1일_20~40개피, 2_1일_40개피 이상)', qId: '건강-likert-10' },
      { catetory: '재무', question: '은퇴 후에도 재무적인 준비도는 충분하다고 생각한다', qId: '재무-likert-1' },
      { catetory: '재무', question: '전문 재무컨설턴트(또는 배우자)와 재무관리에 대한 상담(또는 협의)을 정기적으로 하는 편이다', qId: '재무-likert-2' },
      { catetory: '재무', question: '평소 소득의 수입과 지출규모에 대해 잘 알고 있다', qId: '재무-likert-3' },
      { catetory: '재무', question: '소득이 준다면 고정생활비도 상대적으로 줄일 의사가 있다', qId: '' },
      { catetory: '재무', question: '50+에 나에게 가장 필요로 하는 가족 이벤트 목적자금 (자녀 결혼, 학자금, 대출상환, 부모 간병비, 예비비 등)이 무엇인지 알고있다', qId: '재무-likert-4' },
      { catetory: '재무', question: '50+에 가족 이벤트 목적자금(자녀 결혼, 학자금, 대출상환, 부모 간병비, 예비비 등)의 준비계획이 구체화 되어있다', qId: '재무-likert-5' },
      { catetory: '재무', question: '3층 연금(국민/퇴직/개인연금)의 연금 수령방법(연금 수령시기, 연금 수령기간 등)변경에 대한 이해도가 높은편이다', qId: '재무-likert-6' },
      { catetory: '재무', question: '퇴직시점의 3층연금의 연금별 재원규모가 얼마나 될지에 대해 잘 알고 있다', qId: '재무-likert-7' },
      { catetory: '재무', question: '주택연금 수령방법에 대해 알고 있다', qId: '재무-likert-8' },
      { catetory: '재무', question: '50+ 에 발생할 수 있는 건강리스크는 보험으로 잘 보장되어 있다고 생각한다', qId: '재무-likert-9' },
    ]

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
  }
}
.box {
  border: 2px solid red;
}
</style>