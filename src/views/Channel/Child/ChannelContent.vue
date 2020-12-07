<template>
  <div class="Content">
    <div class="delete">点击删除以下频道</div>
    <ul class="Content_main" ref="ul">
      <li
        v-for="(item, index) in cateList"
        :key="item.id"
        :class="index == GetCid ? 'currentColor' : ''"
        @click="chanelItemClick"
      >
        {{ item.cateName }}
      </li>
    </ul>
    <div class="delete">点击添加以下频道</div>
    <ul class="Content_main">
      <li v-for="item in myList" :key="item" @click="deleteClick(item, $event)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChannelContent",
  data() {
    return {
      cateList: [],
      myList: ["旅游", "历史", "探索", "美食"],
      item: "",
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
    chanelItemClick($event) {
      let El = $event.target;
      let content = El.innerHTML;
      this.myList.push(content);
      El.style.transform = "scale(0)";
      El.style.display = "none";
    },
    deleteClick(item, $event) {
      $event.target.style.transform = "scale(0)";
      $event.target.style.display = "none";
      this.item = item.trim();
      let obj = { cateName: item, id: item };
      this.cateList.push(obj);
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
    animation: myfirst 0.3s;
    transition: all 0.3s;
  }
}
.currentColor {
  background-color: #f0f0f0;
}
@keyframes myfirst {
  from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
}
</style>