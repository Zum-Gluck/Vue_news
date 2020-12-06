<template>
  <div class="infoContent">
    <h2>{{ contentList.title }}</h2>
    <div class="header">
      <img src="https://p3.pstatp.com/thumb/bc20000b91968707dab" alt="" />
      <div class="yx">
        <span>{{ contentList.src }}</span>
        <span class="fontC">{{ contentList.time }}</span>
      </div>
    </div>
    <div v-html="contentList.content" class="content"></div>
  </div>
</template>

<script>
export default {
  name: "InfoContent",
  created() {
    this.getListContent();
  },
  data() {
    return {
      contentList: [],
    };
  },
  methods: {
    async getListContent() {
      // category Id
      let cid = this.$route.query.cid;
      // list Id
      let id = this.$route.query.id;
      let { data: res } = await this.$http.get(`/info?id=${id}&cid=${cid}`);

      this.contentList = res;
      this.$Bus.$emit("over");
      console.log(res);
    },
  },
};
</script>

<style lang="less" >
.infoContent {
  padding: 0 15px;
  figure {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .header {
    display: flex;
    margin-top: 14px;
    img {
      width: 45px;
      height: 45px;
    }
    .yx {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 7px;
      .fontC {
        color: #bcbcbc;
      }
    }
  }
  .content {
    margin-top: 20px;
    font-size: 16px;
    .art_t {
      video {
        width: 100% !important;
        height: 100% !important ;
      }
    }
  }
}
</style>