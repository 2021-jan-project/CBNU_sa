<template>
  <div>
    <div class="form-wrapper ">
      <div class="form-box">
        <div class="form-box-connect">
          <div class="form-box-tab-items">
            <div class="form-box-content">
              <h2 class="form-box-connect-title">Create your account</h2>
              <form class="join-form">
                <div class="form-row">
                  <div class="form-item">
                    <a type="primary" class="social-join-btn google-btn">
                      <font-awesome-icon
                        :icon="['fab', 'google']"
                        class="social-join-icon"
                      ></font-awesome-icon>
                      구글 계정으로 회원가입하기
                    </a>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-item">
                    <a type="primary" class="social-join-btn kakao-btn">
                      <font-awesome-icon
                        :icon="['fas', 'comment']"
                        class="social-join-icon"
                      ></font-awesome-icon>
                      카톡 계정으로 회원가입하기
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
              <form class="join-form">
                <!-- ID -->
                <div class="form-row">
                  <div class="form-item">
                    <div class="form-input">
                      <label for="join_id">ID</label>
                      <input
                        type="text"
                        id="join_id"
                        name="join_id"
                        maxlength="20"
                        @focus="onFocusInput"
                        @blur="onUnfocusInput"
                        @keydown.enter.prevent="nextInput"
                        @keyup="checkId()"
                        v-model="formData.joinId"
                      />
                      <div v-if="errors.joinId" class="join-warning">
                        <font-awesome-icon
                          :icon="['fas', 'exclamation-circle']"
                        ></font-awesome-icon>
                        <div class="warning-bubble">{{ errors.joinId }}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- PW -->
                <div class="form-row">
                  <div class="form-item">
                    <div class="form-input">
                      <label for="join_pw">PW</label>
                      <input
                        type="password"
                        id="join_pw"
                        name="join_pw"
                        maxlength="20"
                        @focus="onFocusInput"
                        @blur="onUnfocusInput"
                        @keydown.enter.prevent="nextInput"
                        @keyup="checkPassword()"
                        v-model="formData.joinPw"
                      />
                      <div v-if="errors.joinPw" class="join-warning">
                        <font-awesome-icon
                          :icon="['fas', 'exclamation-circle']"
                        ></font-awesome-icon>
                        <div class="warning-bubble">{{ errors.joinPw }}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- PW CHECK -->
                <div class="form-row">
                  <div class="form-item">
                    <div class="form-input">
                      <label for="join_pw">PW check</label>
                      <input
                        type="password"
                        id="join_pw_chk"
                        name="join_pw"
                        maxlength="20"
                        @focus="onFocusInput"
                        @blur="onUnfocusInput()"
                        @keydown.enter.prevent="nextInput"
                        @keyup="checkPasswordCheck()"
                        v-model="formData.joinPwChk"
                      />
                      <div v-if="errors.joinPwChk" class="join-warning">
                        <font-awesome-icon
                          :icon="['fas', 'exclamation-circle']"
                        ></font-awesome-icon>
                        <div class="warning-bubble">{{ errors.joinPwChk }}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- NAME -->
                <div class="form-row">
                  <div class="form-item">
                    <div class="form-input">
                      <label for="join_name">NAME</label>
                      <input
                        type="text"
                        id="join_name"
                        name="join_name"
                        maxlength="20"
                        v-model="formData.joinName"
                        @focus="onFocusInput"
                        @blur="onUnfocusInput"
                        @keydown.enter.prevent="telInput"
                        @keyup="checkName()"
                      />
                      <div v-if="errors.joinName" class="join-warning">
                        <font-awesome-icon
                          :icon="['fas', 'exclamation-circle']"
                        ></font-awesome-icon>
                        <div class="warning-bubble">{{ errors.joinName }}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- TEL -->
                <div class="form-row">
                  <div class="form-item">
                    <div class="form-input" style="display:flex; justify-content:space-between;">
                      <div class="num-label">Tel</div>
                      <div class="num-input-wrapper">
                        <input
                          type="number"
                          name="tel_first"
                          class="num-input"
                          v-model="formData.joinTel.first"
                          placeholder="010"
                          @keydown.enter.prevent="nextTelInput"
                          @keyup="limitNumber"
                        />
                        <div class="num-input-connector">
                          <font-awesome-icon :icon="['fas', 'minus']"></font-awesome-icon>
                        </div>
                        <input
                          type="number"
                          name="tel_second"
                          class="num-input"
                          v-model="formData.joinTel.second"
                          placeholder="0000"
                          @keydown.enter.prevent="nextTelInput"
                          @keyup="limitNumber"
                        />
                        <div class="num-input-connector">
                          <font-awesome-icon :icon="['fas', 'minus']"></font-awesome-icon>
                        </div>
                        <input
                          type="number"
                          name="tel_third"
                          class="num-input"
                          v-model="formData.joinTel.third"
                          placeholder="0000"
                          @keydown.enter.prevent="onSubmitForm"
                          @keyup="limitNumber"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-item">
                    <button type="submit" class="form-btn" @click.prevent="onSubmitForm">
                      회원가입하기
                    </button>
                  </div>
                </div>

                <div class="form-row">
                  <router-link to="/login" tag="div" class="form-item" style="text-align:right;">
                    <span class="form-switch">이미 계정이 있으신가요?</span>
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
import router from "../routes/routes";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faComment, faMinus, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { library as faLibrary } from "@fortawesome/fontawesome-svg-core";

faLibrary.add(faGoogle, faComment, faMinus, faExclamationCircle);

export default {
  router,
  data() {
    return {
      themeMode: this.$store.state.theme,
      formData: {
        joinId: "",
        joinPw: "",
        joinPwChk: "",
        joinName: "",
        joinTel: {
          first: "",
          second: "",
          third: "",
        },
      },
      errors: {
        joinId: "",
        joinPw: "",
        joinPwChk: "",
        joinName: "",
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
    telInput() {
      event.target.parentElement.parentElement.parentElement.nextElementSibling.children[0].children[0].children[1].children[0].focus();
    },
    nextTelInput() {
      event.target.nextElementSibling.nextElementSibling.focus();
    },
    limitNumber() {
      if ((event.target.name == "tel_first") & (event.target.value.length == 3)) {
        this.nextTelInput();
      }
      if ((event.target.name == "tel_first") & (event.target.value.length > 3)) {
        event.target.value = event.target.value.slice(0, 3);
        this.formData.joinTel.first = event.target.value;
      }
      if ((event.target.name == "tel_second") & (event.target.value.length == 4)) {
        this.nextTelInput();
      }
      if ((event.target.name == "tel_second") & (event.target.value.length > 4)) {
        event.target.value = event.target.value.slice(0, 4);
        this.formData.joinTel.second = event.target.value;
      }
      if ((event.target.name == "tel_third") & (event.target.value.length > 4)) {
        event.target.value = event.target.value.slice(0, 4);
        this.formData.joinTel.third = event.target.value;
      }
    },
    checkRequired() {
      for (const item in this.formData) {
        try {
          if (!this.formData[item]) {
            throw "빈 칸을 채워주세요";
          }
        } catch (error) {
          this.errors[item] = error;
        }
      }
    },
    checkId() {
      const pattern_joinId = /^[a-zA-Z가-힣0-9]{4,20}$/;
      try {
        if (!pattern_joinId.test(this.formData.joinId)) {
          throw "한글, 영어, 숫자로만 이루어진 4~20글자로 입력해주세요";
        } else {
          console.log("test :>> ");
          this.errors.joinId = "";
        }
      } catch (error) {
        this.errors.joinId = error;
      }
    },
    checkPassword() {
      const pattern_joinPw = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,}$/;

      try {
        if (!pattern_joinPw.test(this.formData.joinPw))
          throw "영어, 숫자를 혼용해 8자 이상으로 입력해주세요 (!@$%*& 사용가능)";
        else this.errors.joinPw = "";
      } catch (error) {
        this.errors.joinPw = error;
      }
    },
    checkPasswordCheck() {
      try {
        if (this.formData.joinPw !== this.formData.joinPwChk) {
          throw "패스워드를 확인해주세요";
        } else {
          this.errors.joinPwChk = "";
        }
      } catch (error) {
        this.errors.joinPwChk = error;
      }
    },
    checkName() {
      const pattern_joinName = /^[a-zA-Z가-힣]{2,15}$/;
      try {
        if (!pattern_joinName.test(this.formData.joinName))
          throw "한글 혹은 영어로만 이루어진 2~15글자로 입력해주세요";
        else this.errors.joinName = "";
      } catch (error) {
        this.errors.joinName = error;
      }
    },
    validate() {
      this.checkRequired();
      this.checkId();
      this.checkPassword();
      this.checkPasswordCheck();
      this.checkName();
    },
    onSubmitForm(e) {
      e.preventDefault();

      this.validate();

      if (
        !this.errors.joinId &&
        !this.errors.joinPw &&
        !this.errors.joinPwChk &&
        !this.errors.joinName
      ) {
        const path = "http://localhost:8000/account/join/";
        const payload = {
          id: this.formData.joinId,
          pw: this.formData.joinPw,
          username: this.formData.joinName,
          tel:
            this.formData.joinTel.first +
            this.formData.joinTel.second +
            this.formData.joinTel.third,
        };
        console.log("payload :>> ", payload);
        axios
          .post(path, payload)
          .then((res) => {
            if (res.data.error) {
              console.log("res.data.error :>> ", res.data.error);
            } else {
              router.push({ name: "login" });
            }
          })
          .catch((error) => {
            console.log("error :>> ", error);
          });
      } else {
      }
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

          .social-join-btn {
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

            .social-join-icon {
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

        .join-form {
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

                .join-warning {
                  position: absolute;
                  height: 43px;
                  width: 43px;
                  box-sizing: border-box;
                  top: 0;
                  right: 0;
                  font-size: 20px;
                  color: map-get($map: $theme, $key: "error");
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;

                  &:hover .warning-bubble {
                    display: block;
                  }

                  .warning-bubble {
                    position: absolute;
                    top: -35px;
                    background: map-get($map: $theme, $key: "color3");
                    border-radius: 10px;
                    font-size: 15px;
                    padding: 10px 12px;
                    white-space: nowrap;
                    color: map-get($map: $theme, $key: "font");
                    display: none;

                    &::after {
                      content: "";
                      position: absolute;
                      bottom: 0;
                      right: 50%;
                      left: 50%;
                      width: 0;
                      height: 0;
                      border: 10px solid transparent;
                      border-top-color: map-get($map: $theme, $key: "color3");
                      border-bottom: 0;
                      margin-left: -10px;
                      margin-bottom: -10px;
                    }
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
                background-color: map-get($theme, "color1");
                outline: none;
                border-radius: 12px;
                box-shadow: 0 10px 30px 0px rgba(0, 0, 0, 0.1);
                border: none;
                transition: all 0.4s;
                cursor: pointer;

                &:hover {
                  background-color: map-get($theme, "color1");
                  color: map-get($theme, "font2");
                  box-shadow: 0 10px 30px 0px rgba(0, 0, 0, 0.5);
                }
              }

              .form-switch {
                font-size: 0.8rem;
                color: map-get($theme, "font");
                cursor: pointer;
                text-decoration: underline;
                transition: all 0.3s;

                &:hover {
                  color: map-get($theme, "color1");
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
