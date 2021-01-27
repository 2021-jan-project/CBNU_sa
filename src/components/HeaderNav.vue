<template>
  <div>
    <div class="header"></div>
    <div class="head"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@each $theme in $themes {
  &.#{map-get($theme, "name")} {
    margin: 0;

    .head {
      width: 100%;
      height: $header-height;
      position: relative;
    }

    .header {
      width: 100%;
      height: $header-height;
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 99;
      margin: 0;
      padding: 0;
      box-shadow: $box-shadow;
      color: map-get($map: $theme, $key: "font");
      background-color: map-get($map: $theme, $key: "content-bg");
    }
  }
}
</style>
