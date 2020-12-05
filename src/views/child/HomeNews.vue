<template>
  <div>
    <div class="News">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNews",

};
</script>

<style lang="less" scoped>
.News {
  margin: 47px 10px 0;
  box-sizing: border-box;
}
</style>