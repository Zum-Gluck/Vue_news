<template>
  <main class="TabControl">
    <div class="left">
      <slot name="left">1</slot>
    </div>
    <div class="center">
      <slot name="center">标题</slot>
    </div>
    <div class="right">
      <slot name="right">3</slot>
    </div>
  </main>
</template>

<script>
export default {
  name: "TabControl",
};
</script>

<style lang="less" scoped>
@bgc: #d43d3d;
.TabControl {
  position: fixed;
  display: flex;
  text-align: center;
  width: 100%;
  height: 44px;
  background-color: @bgc;
  color: #fff;
  .left {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 44px;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font: 600 17px "微软雅黑";
  }
  .right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 44px;
  }
}
</style>