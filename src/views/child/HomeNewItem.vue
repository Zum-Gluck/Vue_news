<template>
  <div>
    <div
      class="NewItem"
      v-for="(item, index) in newsList"
      :key="item.id"
      v-on:click="newclick(index)"
    >
      <div class="pic">
        <img :src="item.pic" />
      </div>
      <div class="title">
        <div>{{ item.title }}</div>
        <div>{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNewItem",
  created() {
    this.getNewsList();
  },
  data() {
    return {
      newsList: [],
    };
  },
  methods: {
    async getNewsList() {
      let { data: res } = await this.$http.get("/list");
      this.newsList = res.result[0].list;
      this.$Bus.$emit("over");
    },
    newclick(index) {
      this.$router.replace({ name: "info", query: { id: index, cid: 1 } });
    },
  },
};
</script>

<style lang="less" scoped>
.NewItem {
  display: flex;
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .pic {
    width: 104px;
    height: 70px;
    margin-right: 10px;
    img {
      width: 104px;
      height: 70px;
    }
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    :first-child {
      font-weight: 600;
      font-size: 12px;
    }
    :last-child {
      font-size: 12px;
    }
  }
}
</style>