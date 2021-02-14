<template>
  <div
    style="margin: 0; height: 100%; display: flex; overflow-x:hidden"
    :class="[getTheme, getSidebar]"
  >
    <side-bar></side-bar>
    <header-nav></header-nav>
    <div class="content">
      <div class="header-shadow"></div>

      <list-table></list-table>
    </div>
  </div>
</template>

<script>
import HeaderNav from "../components/HeaderNav";
import SideBar from "../components/SideBar";
import ListTable from "../components/ListTable";

export default {
  components: {
    HeaderNav,
    SideBar,
    ListTable,
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

          .header-shadow {
            width: 100%;
            height: 100px;
            display: block;
            top: 0;
            z-index: 11;
            position: fixed;
            background: linear-gradient(
              180deg,
              transparentize(map-get($map: $theme, $key: "background"), 0),
              transparentize(map-get($map: $theme, $key: "background"), 0.2),
              transparentize(map-get($map: $theme, $key: "background"), 1)
            );
          }
        }
      }
    }
  }
}
</style>
