<template>
  <TabControl>
    <template #left>
      <div class="iconfont icon-zuojiantou" @click="LeftClick"></div>
    </template>
    <template #center>
      <span>头条新闻</span>
    </template>
    <template #right>
      <div class="iconfont icon-search"></div>
    </template>
  </TabControl>
</template>

<script>
import TabControl from "../../../components/common/TabControl";

export default {
  name: "InfoTabControl",
  components: {
    TabControl,
  },
  methods: {
    LeftClick() {
      this.$router.push("/home");
    },
  },
};
</script>
