<template>
  <!-- <v-app :style="{background: $vuetify.theme.themes[theme].background}"> -->
  <v-app>
    <header>
      <div class="top-line" />
      <p class="company-name">삼성금융경력컨설팅센터</p>
      <div class="life-plan-box">
        <div>
          <div class="life-plan"><span>생애연표</span></div>
          <div class="life-plan-desc"><span>행복한 2nd life Re-design을 위한</span><br /><span> 설문을 작성해주세요</span>
          </div>
        </div>
      </div>
    </header>
    <v-content>
      <Survey />
    </v-content>
    <v-footer app class="justify-center footer" color="white">
      <div><span>	&copy;삼성금융경력컨설팅센터 </span></div>
    </v-footer>
  </v-app>
</template>

<script>
import Survey from './components/SurveyContents';

export default {
  name: 'App',

  components: {
    Survey,
  },

  data: () => ({
    //
  }),
  computed: {
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
};
</script>
<style lang="scss">
.footer {
  font-weight: 600;

}
.v-footer {
  padding: 0px 0px 20px 0px !important;
  color: grey !important;
  letter-spacing: -1px;

}
header {
  font-family: 'Noto Sans KR' !important;
  width: 100%;
  height: 200px;
  background-image: url("/images/left-top.svg");
  background-repeat: no-repeat;
  background-size: 800px 200px;
  background-position: 0px 0px;
  letter-spacing: -1px;
  // background-image: url("/images/top-line.svg");
  // background-repeat: repeat-x;
  // background-size: contain;
  .top-line {
    width: 100%;
    height: 24px;
    background-color: #70cae9;
  }

  .company-name {
    width: 100%;
    padding: 22px 50px 0px 0px;
    text-align: right;
    font-weight: 600;
    font-size: 20px;
    color: #5878b8;
    margin-bottom: 10px !important;
  }
  .life-plan-box {
    float: right;
    width: 50%;
    min-width: 500px;
    height: 100px;
    padding-right: 50px;
    > div {
      padding-top: 10px;
      border-top: 1px solid #5878b8;
      display: flex;
      align-items: center;
    }
    span {
      color: #5878b8;
    }
    .life-plan-desc {
      margin-left: 17px;
      padding-left: 17px;
      height: 100%;
      border-left: 1px solid #5878b8;
      span {
        font-size: 16px;
        font-weight: 600;
      }
    }
    .life-plan {
      span {
        font-size: 48px;
        font-weight: 600;
      }
    }
  }
}
</style>