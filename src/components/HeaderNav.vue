<template>
  <div class="header">
    <div class="header-container">
      <div class="bookmark-wrapper">
        <ul class="header-nav">
          <li class="nav-item">
            <a href="#">
              <font-awesome-icon :icon="['far', 'calendar']"></font-awesome-icon>
              <div class="hover-bubble">Calendar</div>
            </a>
          </li>

          <li class="nav-item">
            <a href="#">
              <font-awesome-icon :icon="['far', 'comment-alt']"></font-awesome-icon>
              <div class="hover-bubble">Chat</div>
            </a>
          </li>

          <li class="nav-item">
            <a href="#">
              <font-awesome-icon :icon="['far', 'envelope']"></font-awesome-icon>
              <div class="hover-bubble">Email</div>
            </a>
          </li>
        </ul>
      </div>
      <ul class="header-nav">
        <li class="nav-item">
          <a href="#"><font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon> </a>
        </li>
        <li class="nav-item">
          <a href="#" @click="onChangeTheme"
            ><font-awesome-icon :icon="['fas', 'palette']"></font-awesome-icon>
            <div class="hover-bubble">Theme Color</div>
          </a>
        </li>
        <li class="nav-item">
          <a href="#"
            ><font-awesome-icon :icon="['far', 'bell']"></font-awesome-icon>
            <span class="alert-badge"></span>
          </a>
        </li>

        <li class="nav-item">
          <a href="#">
            <div class="user-status">
              <p class="user-name">Torry Han</p>
              <span class="user-grade">admin</span>
            </div>
            <span class="avatar">
              <span class="avatar-img">
                <img src="../images/user-default.png" alt="avatar" />
              </span>
              <span class="avatar-badge"> </span>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="header-shadow"></div>
  </div>
</template>

<script>
import router from "../routes/routes";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCalendar,
  faCommentAlt,
  faEnvelope,
  faBell,
} from "@fortawesome/fontawesome-free-regular";
import { faSearch, faPalette } from "@fortawesome/free-solid-svg-icons";
import { library as faLibrary } from "@fortawesome/fontawesome-svg-core";

faLibrary.add(faCalendar, faCommentAlt, faEnvelope, faBell, faPalette, faSearch);

export default {
  router,
  data() {
    return {};
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    onChangeTheme() {
      const currentTheme = this.$store.state.theme;
      if (currentTheme == "theme-light") {
        this.$store.commit("SETSTYLE", "theme-dark");
        this.themeMode = this.$store.state.theme;
      } else if (currentTheme == "theme-dark") {
        this.$store.commit("SETSTYLE", "theme-light");
        this.themeMode = this.$store.state.theme;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@each $theme in $themes {
  &.#{map-get($theme, "name")} {
    @each $sidebar in $sidebars {
      &.#{map-get($sidebar, "name")} {
        margin: 0;
        font-size: 1rem;

        .header {
          width: calc(100% - 4.4rem - #{map-get($map: $sidebar, $key: "width")});
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
          margin: 1.3rem 2rem 0;
          padding: 0;
          box-shadow: $shadow2;
          color: map-get($map: $theme, $key: "font");
          background-color: map-get($map: $theme, $key: "content-bg");
          box-sizing: border-box;
          border-radius: 0.428rem;
          transition: all 0.3s ease, background 0s;
          right: 0;

          .header-container {
            padding: 0.8rem 1rem;
            flex-basis: 100%;
            position: relative;
            align-items: center;
            display: flex;
            box-sizing: border-box;
            height: $header-height;
            z-index: 12;
            box-shadow: $shadow2;
            background-color: map-get($map: $theme, $key: "content-bg");
            border-radius: 0.428rem;

            .bookmark-wrapper {
              display: flex;
              align-items: center;
              flex-grow: 1;
              box-sizing: border-box;
            }

            .header-nav {
              border-radius: 0.25rem;
              display: flex;
              list-style: none;
              flex-wrap: wrap;
              align-items: center;
              box-sizing: border-box;
              flex-direction: row;

              li {
                line-height: 1.5;
                box-sizing: border-box;

                a {
                  color: map-get($map: $theme, $key: "font-light");
                  margin: 0 0.5rem;
                  position: relative;
                  display: flex;
                  justify-content: center;
                  align-items: center;

                  .hover-bubble {
                    visibility: hidden;
                    position: absolute;
                    bottom: -35px;
                    white-space: nowrap;
                    background: $speech-bubble;
                    border-radius: 0.4em;
                    padding: 0.2em 0.5em;
                    font-size: 0.8rem;
                    color: #d0d2d6;
                  }

                  &:hover .hover-bubble {
                    transition-delay: 0.5s;
                    visibility: visible;

                    &::after {
                      content: "";
                      position: absolute;
                      top: 0;
                      left: 50%;
                      width: 0;
                      height: 0;
                      border: 5px solid transparent;
                      border-bottom-color: $speech-bubble;
                      border-top: 0;
                      margin-left: -5px;
                      margin-top: -5px;
                    }
                  }

                  .alert-badge {
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    width: 8px;
                    height: 8px;
                    background-color: map-get($map: $theme, $key: "emphasize1");
                    border-radius: 50%;
                    box-sizing: border-box;
                    cursor: pointer;
                  }

                  .user-status {
                    float: left;
                    margin-right: 0.8rem;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    cursor: pointer;
                    white-space: nowrap;
                    padding: 0 0.5rem;

                    p {
                      margin-left: 0.2rem;
                      display: inline-block;
                      margin-top: 0;
                      font-weight: 600;
                      line-height: 1rem;
                      box-sizing: border-box;
                    }

                    span {
                      font-size: smaller;
                      box-sizing: border-box;
                    }
                  }

                  .avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    font-size: 0.857rem;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    vertical-align: middle;
                    flex-shrink: 0;
                    line-height: 1;
                    overflow: visible;
                    position: relative;

                    .avatar-img {
                      border-radius: inherit;
                      width: 100%;
                      height: 100%;
                      overflow: hidden;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      box-sizing: border-box;

                      img {
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                      }
                    }

                    .avatar-badge {
                      width: 11px;
                      height: 11px;
                      border: 1px solid #fff;
                      padding: 0.25em;
                      border-radius: 10em;
                      position: absolute;
                      line-height: 1;
                      z-index: 1;
                      background-color: $badge-success;
                      box-sizing: border-box;
                      bottom: 0;
                      right: 0;
                    }
                  }
                }
              }
            }
          }

          .header-shadow {
            width: calc(100% - 4.4rem - #{map-get($map: $sidebar, $key: "width")});
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
