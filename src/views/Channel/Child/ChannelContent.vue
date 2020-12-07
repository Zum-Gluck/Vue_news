<template>
  <div class="Content">
    <div class="delete">点击删除以下频道</div>
    <ul class="Content_main">
      <li
        v-for="(item, index) in cateList"
        :key="item.id"
        :class="index == GetCid ? 'currentColor' : ''"
      >
        {{ item.cateName }}
      </li>
    </ul>
    <div class="delete">点击添加以下频道</div>
    <ul class="Content_main">
      <li>旅游</li>
      <li>历史</li>
      <li>探索</li>
      <li>美食</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChannelContent",
  data() {
    return {
      cateList: [],
    };
  },
  computed: {
    GetCid() {
      return this.$store.state.cid;
    },
  },
  created() {
    this.getCateList();
  },
  methods: {
    async getCateList() {
      let { data: res } = await this.$http.get("/cate");
      this.cateList = res.result;
    },
  },
};
</script>

<style lang="less" scoped>
.Content {
  margin-top: 50px;
  padding: 0 10px;
  .delete {
    color: #666666;
  }
}
.Content_main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 13px;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 64px;
    height: 34px;
    margin-bottom: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
}
.currentColor {
  background-color: #f0f0f0;
}
</style>