<template>
  <TabControl>
    <template #left>
      <div class="iconfont icon-user"></div>
    </template>
    <template #center> 掌上新闻 </template>
    <template #right>
      <div class="iconfont icon-search"></div>
    </template>
  </TabControl>
</template>

<script>
import TabControl from "components/common/TabControl";

export default {
  name: "HomeTabControl",
  components: {
    TabControl,
  },
};
</script>
