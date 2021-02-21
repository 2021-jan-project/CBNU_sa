<template>
  <div style="margin: 0; " :class="[getTheme, getSidebar]">
    <side-bar></side-bar>
    <header-nav></header-nav>
    <div class="content"></div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import HeaderNav from "../components/HeaderNav";
import FooterNav from "../components/FooterNav";

export default {
  data() {
    return {};
  },
  components: {
    HeaderNav,
    SideBar,
    FooterNav,
  },
  computed: {
    getTheme() {
      return this.$store.state.theme;
    },
    getSidebar() {
      return this.$store.state.sidebar;
    },
  },
};
</script>

<style lang="scss" scoped>
@each $theme in $themes {
  &.#{map-get($theme, "name")} {
    @each $sidebar in $sidebars {
      &.#{map-get($sidebar, "name")} {
        width: 100%;
        height: 100%;
        margin: 0;
        background-color: map-get($map: $theme, $key: "background");
        margin: 0;
        font-family: "Noto Serif KR" serif;
        color: map-get($map: $theme, $key: "font");
        min-height: 100%;

        .content {
          padding: 7.75rem 2.1rem 0;
          position: relative;
          margin-left: calc(#{map-get($map: $sidebar, $key: "width")} + 5px);
          transition: 0.3s margin-left ease;
        }
      }
    }
  }
}
</style>
