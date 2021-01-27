<template>
  <div style="margin: 0">
    <div class="menu-bar"></div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library as faLibrary } from "@fortawesome/fontawesome-svg-core";

faLibrary.add(faSearch);

export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
@each $theme in $themes {
  &.#{map-get($theme, "name")} {
    .menu-bar {
      width: $folded-sidebar;
      height: 100%;
      background-color: map-get($map: $theme, $key: "content-bg");
      position: relative;
      z-index: 99;
    }
  }
}
</style>
