<template>
  <div class="wappers" ref="wapper" >
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scorll",
  mounted() {
    this.$Bus.$on("over", () => {
      setTimeout(() => {
        new BScroll(this.$refs.wapper, {
          click: true,
        });
      }, 200);
    });
  },
};
</script>

<style lang="less" scoped>
.wappers {
  height: 100%;
}
</style>
