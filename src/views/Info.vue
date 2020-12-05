<template>
  <h1>我是列表页</h1>
</template>

<script>
export default {
  name: "Info",
  created() {
    this.getListContent();
  },
  methods: {
    async getListContent() {
      // category Id
      let cid = this.$route.query.cid;
      // list Id
      let id = this.$route.query.id;
      let { data: res } = await this.$http.get(`/info?id=${id}&cid=${cid}`);
      console.log(res);
    },
  },
};
</script>

<style lang="less" scoped>
</style>