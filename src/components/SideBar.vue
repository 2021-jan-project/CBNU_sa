<template>
  <div style="margin: 0">
    <div class="header">
      <div class="header-container">
        <span>헤더부분</span>
      </div>
    </div>
    <div class="head"></div>
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
.head {
  width: 100%;
  height: 200px;
  position: relative;
}

.header {
  width: 100%;
  height: 200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: $light-gray;
  z-index: 997;
  margin: 0 auto;
  padding: 0;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: $black;
  user-select: none;

  .header-container {
    width: 1050px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    @media only screen and (max-width: 1050px) {
      width: 100%;
    }
  }
}

/*  User Menu  *****************************************************************/
</style>
