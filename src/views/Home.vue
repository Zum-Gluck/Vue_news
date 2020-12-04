<template>
  <div>
    <HomeTabControl></HomeTabControl>
    <HomeCate></HomeCate>
    
    <HomeNews>
      <HomeNewItem></HomeNewItem>
    </HomeNews>
  </div>
</template>

<script>
import HomeTabControl from "./child/HomeTabControl";
import HomeCate from "./child/HomeCate";
import HomeNews from "./child/HomeNews";
import HomeNewItem from "./child/HomeNewItem";

export default {
  name: "home",
  components: {
    HomeTabControl,
    HomeCate,
    HomeNews,
    HomeNewItem,
  },
};
</script>

<style>
</style>