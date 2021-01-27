<template>
  <div style="margin:0; height:100%;display:flex;" :class="themeMode">
    <side-bar></side-bar>
    <div style="display:flex; flex-direction:column;width:100%; overflow:hidden;">
      <header-nav></header-nav>
      <join-form-box></join-form-box>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import HeaderNav from "../components/HeaderNav";
import JoinFormBox from "../components/JoinFormBox";

export default {
  data() {
    return {
      themeMode: this.$store.state.theme,
    };
  },
  components: {
    HeaderNav,
    SideBar,
    JoinFormBox,
  },
};
</script>

<style lang="scss" scoped>
@each $theme in $themes {
  &.#{map-get($theme, "name")} {
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: map-get($map: $theme, $key: "background");
    margin: 0;
    font-family: "Noto Serif KR" serif;
    color: map-get($map: $theme, $key: "font");
  }
}
</style>
