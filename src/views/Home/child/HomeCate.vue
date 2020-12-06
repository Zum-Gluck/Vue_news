<template>
  <div class="box">
    <ul>
      <li
        v-for="(item, index) in CateList"
        :key="item.id"
        @click="navClick(index)"
        :class="{ currentcolor: index == currentIndex }"
      >
        <div>{{ item.cateName }}</div>
      </li>
      <div class="changeCate" @click="ChangeCateClick">
        <div class="iconfont icon-jiahao"></div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeCanel",
  data() {
    return {
      CateList: [],
      currentIndex: 0,
    };
  },
  async created() {
    let { data: res } = await this.$http.get("/cate");
    this.CateList = res.result;
  },
  methods: {
    navClick(index) {
      this.currentIndex = index;
    },
    ChangeCateClick() {
      this.$router.push("/channel");
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  position: sticky;
  top: 44px;
  z-index: 9;
}
ul {
  display: flex;
  height: 37px;
  overflow-x: scroll;
  background-color: #f4f5f6;
  &::-webkit-scrollbar {
    display: none;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 37px;
    flex-shrink: 0;
    font-size: 16px;
    color: #505050;
  }
}
.currentcolor {
  color: #f85959;
}
.changeCate {
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 100%;
  color: #f86969;
  background-color: #f4f5f6;
}
</style>