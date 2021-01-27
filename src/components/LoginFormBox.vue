<template>
  <div>
    <div class="form-wrapper">
      <div class="form-box">
        <div class="form-box-connect">
          <div class="form-box-tab-items">
            <div class="form-box-content">
              <h2 class="form-box-connect-title">Log in with your account</h2>
              <form class="login-form">
                <div class="form-row">
                  <div class="form-item">
                    <a type="primary" class="social-login-btn google-btn">
                      <font-awesome-icon
                        :icon="['fab', 'google']"
                        class="social-login-icon"
                      ></font-awesome-icon>
                      구글 계정으로 로그인하기
                    </a>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-item">
                    <a type="primary" class="social-login-btn kakao-btn">
                      <font-awesome-icon
                        :icon="['fas', 'comment']"
                        class="social-login-icon"
                      ></font-awesome-icon>
                      카톡 계정으로 로그인하기
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="form-box-classic">
          <div class="form-box-tab-items">
            <div class="form-box-content">
              <h2 class="form-box-classic-title">Or use the classical way</h2>
              <form class="login-form">
                <!-- ID -->
                <div class="form-row">
                  <div class="form-item">
                    <div class="form-input">
                      <label for="login_id">ID</label>
                      <input
                        type="text"
                        id="login_id"
                        name="login_id"
                        @focus="onFocusInput"
                        @blur="onUnfocusInput"
                        @keydown.enter.prevent="nextInput"
                        v-model="formData.loginId"
                      />
                    </div>
                  </div>
                </div>

                <!-- PW -->
                <div class="form-row">
                  <div class="form-item">
                    <div class="form-input">
                      <label for="login_pw">PW</label>
                      <input
                        type="password"
                        id="login_pw"
                        name="login_pw"
                        @focus="onFocusInput"
                        @blur="onUnfocusInput"
                        v-model="formData.loginPw"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-item">
                    <button class="form-btn">로그인하기</button>
                  </div>
                </div>

                <div class="form-row">
                  <router-link to="/join" tag="div" class="form-item" style="text-align:right;">
                    <span class="form-switch">계정이 없으신가요?</span>
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faComment, faMinus } from "@fortawesome/free-solid-svg-icons";
import { library as faLibrary } from "@fortawesome/fontawesome-svg-core";

faLibrary.add(faGoogle, faComment, faMinus);

export default {
  data() {
    return {
      themeMode: this.$store.state.theme,
      formData: {
        loginId: "",
        loginPw: "",
      },
    };
  },
  components: {
    FontAwesomeIcon,
  },

  methods: {
    onFocusInput() {
      event.target.parentElement.classList.add("active");
    },
    onUnfocusInput() {
      if (event.target.value == "") {
        event.target.parentElement.classList.remove("active");
      }
    },
    nextInput() {
      event.target.parentElement.parentElement.parentElement.nextElementSibling.children[0].children[0].children[1].focus();
    },
    onChangeTheme() {
      this.$store.commit("SETSTYLE", "theme-dark");
      this.themeMode = this.$store.state.theme;
    },
  },
};
</script>

<style lang="scss" scoped>
@each $theme in $themes {
  &.#{map-get($theme, "name")} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: map-get($map: $theme, $key: "content-bg");

    .form-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .form-box {
        display: flex;
        background-color: map-get($theme, "content-bg");
        box-shadow: $box-shadow;
        position: relative;
        box-sizing: border-box;
        border-radius: 12px;
        margin: 50px;

        .form-box-connect {
          background-color: map-get($theme, "color2");
          width: 300px;
          padding: 64px;
          border-radius: 12px 0 0 12px;

          .social-login-btn {
            display: block;
            position: relative;
            text-decoration: none;
            margin: 20px 0;
            padding: 15px 15px 15px 64px;
            border-radius: 10px;
            cursor: pointer;
            color: $black;
            font-weight: 100;

            &::after {
              content: "";
              position: absolute;
              z-index: 1;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              transition: all 0.3s ease-in-out;
              box-shadow: $box-shadow;
              border-radius: 10px;
            }

            &:hover::after {
              background: hsla(0, 0, 0, 0.1);
            }

            .social-login-icon {
              position: absolute;
              top: 0;
              left: 0;
              width: 50px;
              height: 100%;
              text-align: center;
              background: hsla(0, 0, 0, 0.1);
              line-height: 3.2;
              border-radius: 10px 0 0 10px;
              padding: 12px;
              box-sizing: border-box;
              color: $black;
            }
          }

          .google-btn {
            background-color: $google;
          }

          .kakao-btn {
            background-color: $kakao;
          }
        }

        .form-box-connect-title {
          color: map-get($theme, "font");
          font-size: 1.4rem;
          text-align: left;
          font-weight: bold;
        }

        .form-box-classic {
          width: 300px;
          height: fit-content;
          padding: 64px;
        }

        .form-box-classic-title {
          color: map-get($theme, "font");
          line-height: 1.4rem;
          font-size: 1rem;
          text-align: left;
          font-weight: normal;
        }

        form {
          width: 100%;
        }

        .login-form {
          margin-top: 30px;

          .form-row {
            width: 100%;
            margin: 20px 0;

            .form-item {
              width: 100%;
              position: relative;

              .form-input {
                position: relative;

                &.active label {
                  padding: 0 6px;
                  font-size: 0.75rem;
                  top: -6px;
                  left: 12px;
                  background-color: map-get($theme, "content-bg");
                  color: map-get($theme, "font");
                }

                label {
                  color: map-get($theme, "color3");
                  font-size: 1rem;
                  font-weight: 600;
                  line-height: 1em;
                  position: absolute;
                  top: 13px;
                  left: 20px;
                  z-index: 2;
                  transition: all 0.3s ease-in-out;
                  pointer-events: none;
                  box-sizing: border-box;
                }

                .num-label {
                  font-size: 0.75rem;
                  font-weight: 600;
                  margin: 5px;
                  line-height: 1em;
                  width: 50px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: map-get($map: $theme, $key: "font");
                }

                input {
                  height: 43px;
                  padding: 0 18px;
                  box-sizing: border-box;
                  width: 100%;
                  border-radius: 12px;
                  font-weight: 700;
                  border: 1.6px solid map-get($theme, "color3");
                  transition: border-color 0.2s ease-in-out;
                  background: map-get($map: $theme, $key: "content-bg");
                  color: map-get($map: $theme, $key: "font");

                  &:focus {
                    border-radius: 12px;
                    border: 2px solid map-get($theme, "font");
                    padding: 0 18px;
                    box-sizing: border-box;
                    width: 100%;
                    outline: none;
                  }

                  &::-webkit-outer-spin-button,
                  &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                  }
                  &[type="number"] {
                    -moz-appearance: textfield;
                  }
                }
                .num-input-wrapper {
                  display: flex;
                  justify-content: space-between;

                  .num-input-connector {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 0.6rem;
                    color: map-get($theme, "color1");
                    margin: 3px;
                  }

                  .num-input {
                    margin: 0;
                    height: 43px;
                    box-sizing: border-box;
                    width: 75px;
                    border-radius: 12px;
                    font-weight: 700;
                    border: 1.6px solid map-get($theme, "color3");
                    text-align: center;
                    transition: border-color 0.2s ease-in-out;

                    &:focus {
                      border-radius: 12px;
                      border: 2px solid map-get($theme, "font");
                      box-sizing: border-box;
                      outline: none;
                      width: 75px;
                    }

                    &::placeholder {
                      color: map-get($theme, "color3");
                    }
                  }
                }
              }

              .form-btn {
                font-size: 14px;
                color: map-get($theme, "font");
                line-height: 1.2;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 20px;
                width: 100%;
                height: 50px;
                background-color: map-get($theme, "color2");
                outline: none;
                border-radius: 12px;
                box-shadow: 0 10px 30px 0px rgba(0, 0, 0, 0.1);
                border: none;
                transition: all 0.4s;
                cursor: pointer;

                &:hover {
                  background-color: map-get($theme, "font");
                  color: map-get($theme, "content-bg");
                  box-shadow: 0 10px 30px 0px rgba(0, 0, 0, 0.5);
                }
              }

              .form-switch {
                font-size: 0.8rem;
                color: map-get($theme, "color1");
                cursor: pointer;
                text-decoration: underline;
                transition: all 0.3s;

                &:hover {
                  color: map-get($theme, "font");
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
