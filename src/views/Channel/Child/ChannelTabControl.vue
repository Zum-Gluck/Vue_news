<template>
  <TabControl>
    <template #left>
      <div class="iconfont icon-zuojiantou" @click="LeftClick"></div>
    </template>
    <template #center> 频道管理 </template>
  </TabControl>
</template>

<script>
import TabControl from "../../../components/common/TabControl";
export default {
  name: "ChannelTabControl",
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

<style>
</style>