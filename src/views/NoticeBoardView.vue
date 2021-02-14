<template>
  <div
    style="margin: 0; height: 100%; display: flex; overflow-x:hidden"
    :class="[getTheme, getSidebar]"
  >
    <side-bar></side-bar>
    <header-nav></header-nav>
    <div class="content">
      <login-form-box></login-form-box>
    </div>
  </div>
</template>

<script>
import HeaderNav from "../components/HeaderNav";
import SideBar from "../components/SideBar";
import LoginFormBox from "../components/LoginFormBox";

export default {
  data() {
    return {};
  },
  components: {
    HeaderNav,
    SideBar,
    LoginFormBox,
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
        margin: 0;
        background-color: map-get($map: $theme, $key: "background");
        margin: 0;
        font-family: "Noto Serif KR" serif;
        color: map-get($map: $theme, $key: "font");

        .content {
          padding: 7.75rem 2rem 0;
          position: relative;
          margin-left: calc(#{map-get($map: $sidebar, $key: "width")} + 5px);
          transition: 0.3s margin-left ease;
          width: 100%;
        }
      }
    }
  }
}
</style>
