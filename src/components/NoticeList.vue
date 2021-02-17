<template>
  <div class="card-wrapper">
    <div class="notice-card" v-for="(noticeList, index) in noticeLists" :key="index">
      <div class="card-content">
        <div v-if="noticeList.imgUri.length > 0" class="img-wrapper">
          <img :src="noticeList.imgUri" alt="" />
        </div>

        <div class="card-body">
          <h4 class="card-title">{{ noticeList.title }}</h4>
          <div class="author">{{ noticeList.author }}</div>
          <div class="category">{{ noticeList.category }}</div>
          <div class="content"></div>
          <hr class="whitespace" />
          <div class="card-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleLeft, faAngleRight, faPen } from "@fortawesome/free-solid-svg-icons";
import { library as faLibrary } from "@fortawesome/fontawesome-svg-core";

faLibrary.add(faAngleLeft, faAngleRight, faPen);

export default {
  data() {
    return {
      noticeLists: [
        {
          title: "[test1] Notice Notice Notice",
          category: ["web"],
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri:
            "https://images.unsplash.com/photo-1510658464263-7b7cdcd46bef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
        {
          title: "[test2] This is Notice Title",
          category: ["web", "ai"],
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test3] lorem ipsum",
          category: ["web"],
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri:
            "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
        },
        {
          title:
            "[test4] Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita necessitatibus sequi min icing elit. Expedita necessitatib icing elit. Expedita necessitatib",
          category: ["web", "security"],
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri:
            "https://images.unsplash.com/photo-1552083974-186346191183?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
        {
          title: "[test5]testtest",
          category: ["web"],
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test6] tst",
          category: ["web"],
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
      ],
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {},
  mounted: function() {},
};
</script>

<style lang="scss" scoped>
@each $theme in $themes {
  &.#{map-get($theme, "name")} {
    @each $sidebar in $sidebars {
      &.#{map-get($sidebar, "name")} {
        margin: 0;
        font-size: 1rem;

        .card-wrapper {
          box-sizing: border-box;

          .notice-card {
            box-sizing: border-box;

            .card-content {
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              box-sizing: border-box;
              width: 100%;
              position: relative;
              border: none;
              margin-bottom: 2rem;
              box-shadow: 0 4px 24px 0 rbga(34, 41, 47, 0.1);
              background-color: map-get($map: $theme, $key: "content-bg");
              background-clip: border-box;
              border-radius: 0.428rem;
              transition: all 0.3s ease-in-out;

              .img-wrapper {
                border-top-left-radius: calc(0.428rem - 1px);
                border-top-right-radius: calc(0.428rem - 1px);
                width: 100%;
                vertical-align: middle;
                box-sizing: border-box;
                max-height: 350px;
                overflow: hidden;

                img {
                  width: 100%;
                  height: 100%;
                }
              }

              .card-body {
                padding: 1.5rem;
                flex: 1 1 auto;
                box-sizing: border-box;

                .card-title {
                  margin-bottom: 1.5rem;
                  font-weight: 500;
                  font-size: 1.28rem;
                  color: map-get($map: $theme, $key: "font");
                  line-height: 1.2;
                  box-sizing: border-box;
                }

                .author {
                  display: flex;
                  align-items: flex-start;
                  box-sizing: border-box;
                  color: map-get($map: $theme, $key: "font-light");
                }

                .category {
                  padding: 0 0.25rem;
                  margin: 0 1rem;
                  box-sizing: border-box;
                }

                .content {
                  color: map-get($map: $theme, $key: "font-light");
                }

                .whitespace {
                  margin: 0 1.5rem;
                  border: 0;
                  border-top: 1px solid map-get($map: $theme, $key: "table-border");
                }

                .card-footer {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  box-sizing: border-box;
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
