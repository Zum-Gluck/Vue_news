<template>
  <div>
    <HomeTabControl></HomeTabControl>
    <HomeCate></HomeCate>
    <Scroll>
      <HomeNews>
        <HomeNewItem></HomeNewItem>
      </HomeNews>
    </Scroll>
  </div>
</template>

<script>
import HomeTabControl from "./child/HomeTabControl";
import HomeCate from "./child/HomeCate";
import HomeNews from "./child/HomeNews";
import HomeNewItem from "./child/HomeNewItem";
import Scroll from "../components/content/Scroll";

export default {
  name: "home",
  components: {
    HomeTabControl,
    HomeCate,
    HomeNews,
    HomeNewItem,
    Scroll,
  },
  created() {
    this.$notify({
      message: "为你推荐了9篇文章",
      color: "#2a90d7",
      background: "#D9EBF8",
    });
  },
};
</script>

<style>
.van-popup--top {
  top: calc(44px + 37px) !important;
}
</style>