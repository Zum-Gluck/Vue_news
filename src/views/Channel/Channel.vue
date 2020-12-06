<template>
  <div class="main">
    <ChannelTabControl></ChannelTabControl>
    <ChannelContent></ChannelContent>
  </div>
</template>

<script>
import ChannelTabControl from "./Child/ChannelTabControl";
import ChannelContent from "./Child/ChannelContent";
export default {
  name: "Channel",
  components: {
    ChannelTabControl,
    ChannelContent,
  },
};
</script>

<style lang="less" scoped>
.main {
  height: calc(100vh - 44px - 6px);
  background-color: #f8f8f8;
}
</style>