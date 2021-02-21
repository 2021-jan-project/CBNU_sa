<template>
  <footer class="footer">
    <p class="footer-text">
      <span class="footer-left">SA Homepage@0.0.1</span>
      <span class="footer-right">Made by SA students</span>
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@each $theme in $themes {
  &.#{map-get($theme, "name")} {
    @each $sidebar in $sidebars {
      &.#{map-get($sidebar, "name")} {
        margin: 0;
        user-select: none;

        .footer {
          padding: 0.8rem 2.3rem;
          min-height: 3.35rem;
          box-sizing: border-box;
          margin-left: map-get($map: $sidebar, $key: "width");

          .footer-text {
            margin: 0;
            line-height: 1.5rem;
            box-sizing: border-box;
            margin: 0.25rem 0;
            font-weight: 100;
            color: map-get($map: $theme, $key: "font-light");
            letter-spacing: 0.1rem;
            font-size: 0.8rem;
            user-select: none;

            .footer-left {
              float: left;
              box-sizing: border-box;
            }

            .footer-right {
              float: right;
              box-sizing: border-box;
            }
          }
        }
      }
    }
  }
}
</style>
