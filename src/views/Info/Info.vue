<template>
  <div class="info">
    <InfoTabControl>
    </InfoTabControl>
    <Scroll>
      <InfoContent></InfoContent>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "components/content/Scroll";
import InfoContent from "./child/InfoContent";
import InfoTabControl from './child/InfoTabControl'
export default {
  name: "Info",
  components: {
    Scroll,
    InfoContent,
    InfoTabControl
  },
};
</script>

<style lang="less" >
.info {
  margin-top: 44px;
  height: calc(100vh - 44px);
}
</style>