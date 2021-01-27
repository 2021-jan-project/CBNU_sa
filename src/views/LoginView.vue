<template>
  <div style="margin:0; height:100%;" :class="themeMode">
    <header-nav></header-nav>
    <login-form-box></login-form-box>
  </div>
</template>

<script>
import HeaderNav from "../components/HeaderNav";
import LoginFormBox from "../components/LoginFormBox";

export default {
  data() {
    return {
      themeMode: this.$store.state.theme,
    };
  },
  components: {
    HeaderNav,
    LoginFormBox,
  },
};
</script>

<style lang="scss" scoped>
@each $theme in $themes {
  &.#{map-get($theme, "name")} {
    width: 100%;
    margin: 0;
    background-color: map-get($map: $theme, $key: "background");
    margin: 0;
    font-family: "Noto Serif KR" serif;
    color: map-get($map: $theme, $key: "font");
  }
}
</style>
