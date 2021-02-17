<template>
  <div style="margin: 0">
    <div
      class="menu-bar"
      @mouseover="hoverSidebar"
      @mouseleave="unhoverSidebar"
      :style="{ width: opened }"
    >
      <div class="sidebar-header">
        <ul>
          <li>
            <router-link to="/" tag="a" class="sidebar-brand">
              <span class="brand-logo"><img src="../assets/logo.png" alt="logo"/></span>
              <h2 class="brand-text">Homepage</h2>
            </router-link>
          </li>
          <li>
            <a href="#" class="sidebar-toggle" :class="{ active: isActive }">
              <font-awesome-icon
                :icon="['fas', 'thumbtack']"
                class="toggle-icon"
                @click="setSidebarWidth"
              ></font-awesome-icon>
            </a>
          </li>
        </ul>
      </div>
      <ul class="menu-content">
        <ul class="navigation">
          <li v-if="isActive || isHovered" class="nav-header">
            <span>Boards</span>
          </li>
          <li class="nav-item">
            <router-link to="/board/notice" tag="a">
              <font-awesome-icon :icon="['fas', 'bullhorn']" class="bar-icon"></font-awesome-icon>
              <span v-if="isActive || isHovered" class="menu-title">공지사항</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/board/free" tag="a">
              <font-awesome-icon
                :icon="['fas', 'clipboard-list']"
                class="bar-icon"
              ></font-awesome-icon>
              <span v-if="isActive || isHovered" class="menu-title">자유 게시판</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/board/photo" tag="a">
              <font-awesome-icon :icon="['far', 'image']" class="bar-icon"></font-awesome-icon>
              <span v-if="isActive || isHovered" class="menu-title">사진 게시판</span>
            </router-link>
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faClipboardList, faThumbtack, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/fontawesome-free-regular";
import { library as faLibrary } from "@fortawesome/fontawesome-svg-core";
import router from "../routes/routes";

faLibrary.add(faClipboardList, faThumbtack, faBullhorn, faImage);

export default {
  router,
  data() {
    return {
      opened: "80px",
      isActive: false,
      isHovered: false,
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    setSidebarWidth() {
      const currentSidebar = this.$store.state.sidebar;
      if (currentSidebar == "sidebar-opened") {
        this.$store.commit("SETSIDEBARWIDTH", "sidebar-closed");
        this.opened = "80px";
        this.isActive = false;
      } else if (currentSidebar == "sidebar-closed") {
        this.$store.commit("SETSIDEBARWIDTH", "sidebar-opened");
        this.opened = "260px";
        this.isActive = true;
      }
    },
    hoverSidebar() {
      this.opened = "260px";
      this.isHovered = true;
    },
    unhoverSidebar() {
      if (this.$store.state.sidebar == "sidebar-closed") {
        this.opened = "80px";
        this.isHovered = false;
      }
    },
  },
  mounted: function() {
    this.setSidebarWidth();
  },
};
</script>

<style lang="scss" scoped>
@each $theme in $themes {
  &.#{map-get($theme, "name")} {
    @each $sidebar in $sidebars {
      &.#{map-get($sidebar, "name")} {
        .menu-bar {
          width: map-get($map: $sidebar, $key: "width");
          height: 100%;
          position: fixed;
          background-color: map-get($map: $theme, $key: "content-bg");
          z-index: 1000;
          box-shadow: $shadow;
          margin: 0;
          box-sizing: border-box;
          color: map-get($map: $theme, $key: "font-light");
          display: table-cell;
          overflow: hidden;
          transition: 0.3s width ease;
          user-select: none;

          &:hover {
            transition: 0.3s width ease;
          }

          .sidebar-header {
            width: 260px;
            height: 4.45rem;
            padding: 0.35rem 1rem 0.3rem 1.2rem;
            position: relative;
            transition: all 0.3s ease, background 0s;
            box-sizing: border-box;

            ul {
              margin: 0;
              padding: 0;
              list-style: none;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              box-sizing: border-box;

              li {
                margin-right: auto;
                box-sizing: border-box;
                cursor: pointer;
                display: flex;
                justify-content: center;

                a {
                  color: map-get($map: $theme, $key: "color1");
                }

                .sidebar-brand {
                  // margin-top: 1.34rem;
                  display: flex;
                  align-items: center;
                  margin-right: 1rem;
                  white-space: nowrap;

                  .brand-logo {
                    box-sizing: border-box;
                    img {
                      max-width: 46px;
                      vertical-align: middle;
                    }
                  }

                  .brand-text {
                    animation: fadein 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards;
                    padding-left: 1rem;
                    font-size: 1.3rem;
                    line-height: 1.2;
                  }
                }

                .sidebar-toggle {
                  padding: 0;
                  margin: 1.571rem 0;
                  &.active {
                    color: map-get($map: $theme, $key: "emphasize1");
                  }

                  .toggle-icon {
                    width: 20px;
                    height: 20px;
                  }
                }
              }
            }
          }

          .menu-content {
            height: calc(100% - 4.45rem);
            position: relative;
            list-style: none;
            overflow: hidden;

            .navigation {
              font-size: 1.1rem;
              font-weight: 400;

              li {
                position: relative;
                white-space: nowrap;
                box-sizing: border-box;

                a {
                  align-items: center;
                  padding: 10px 15px;
                  margin: 0 15px;
                  line-height: 1.45;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  outline: none;
                  text-decoration: none;
                  color: map-get($map: $theme, $key: "font-light");
                  transition: transform 0.25s ease, -webkit-transform 0.25s ease;
                  display: flex;

                  &:hover {
                    padding-left: 20px;
                    transition: all 0.3s ease;
                    color: map-get($map: $theme, $key: "color1");
                  }

                  .bar-icon {
                    width: 20px;
                    height: 20px;
                    font-size: 1.45rem;
                  }
                  span {
                    margin-left: 1.1rem;
                  }
                }
              }

              .nav-header {
                margin: 2.286rem 0 0.8rem 2.2rem;
                line-height: 1.5;
                letter-spacing: 0.01rem;
                font-weight: 500;
                font-size: 0.9rem;
                -moz-user-select: none;
                user-select: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
