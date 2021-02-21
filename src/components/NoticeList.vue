<template>
  <div class="card-wrapper">
    <div class="notice-card" v-for="index in loaded" :key="index">
      <div class="card-content">
        <div v-if="noticeLists[index - 1].imgUri.length > 0" class="img-wrapper">
          <img :src="noticeLists[index - 1].imgUri" alt="" />
        </div>

        <div class="card-body">
          <h4 class="card-title">
            <font-awesome-icon
              style="color:red; margin-right:0.5rem"
              :icon="['fas', 'bullhorn']"
            ></font-awesome-icon>
            {{ noticeLists[index - 1].title }}
          </h4>
          <div class="author">
            <div class="author-profile">
              <div class="author-img-wrapper">
                <img src="../images/user-default.png" alt="" class="author-img" />
              </div>
            </div>
            <div class="author-name">
              <span class="name">{{ noticeLists[index - 1].author }}</span>
              <span class="date">| {{ noticeLists[index - 1].date }}</span>
            </div>
          </div>
          <div class="content">{{ noticeLists[index - 1].content }}</div>
          <hr class="whitespace" />
          <div class="card-footer">
            <div class="footer-left">
              <div class="footer-item">
                <font-awesome-icon :icon="['far', 'comment-alt']"></font-awesome-icon>
                <div class="footer-text">2</div>
              </div>
              <div class="footer-item">
                <font-awesome-icon :icon="['far', 'thumbs-up']"></font-awesome-icon>
                <div class="footer-text">18</div>
              </div>
            </div>
            <div class="footer-right">
              <font-awesome-icon :icon="['fas', 'share-alt']"></font-awesome-icon>
            </div>
          </div>
        </div>
      </div>
    </div>

    <infinite-loading @infinite="infiniteHandler" spinner="circles">
      <!-- <div slot="spinner">Loading...</div> -->
      <div slot="no-results">No results</div>
      <div slot="no-more"></div>
      <div slot="error">Error</div>
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCommentAlt, faThumbsUp } from "@fortawesome/fontawesome-free-regular";
import { faBullhorn, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { library as faLibrary } from "@fortawesome/fontawesome-svg-core";

faLibrary.add(faCommentAlt, faThumbsUp, faBullhorn, faShareAlt);

export default {
  data() {
    return {
      page: 1,
      loaded: 0,
      noticeLists: [
        {
          title: "[test1] Notice Notice Notice",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri:
            "https://images.unsplash.com/photo-1510658464263-7b7cdcd46bef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
        {
          title: "[test2] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title:
            "[test3] 내린 우는 동경과 벌써 봅니다. 내 소학교 파란 된 추억과 사랑과 프랑시스 멀리 있습니다. 써 계절이 책상을 이국 못 헤일 같이 노루, 덮어 듯합니다. 차 된 나는 별들을 내린 거외다. 애기 아이들의 나는 언덕 새겨지는 이름과, 있습니다. 별 말 풀이 계십니다. 까닭이요, 밤이 잔디가 추억과 토끼, 까닭이요, 이런 듯합니다.",
          author: "tester",
          content:
            "계절이 하나에 벌레는 것은 소학교 나의 아스라히 잔디가 계십니다. 나는 마디씩 같이 있습니다. 가을 노루, 파란 이런 벌써 이름을 하늘에는 아무 까닭입니다. 멀듯이, 그리고 책상을 계십니다. 별을 까닭이요, 피어나듯이 강아지, 언덕 어머니 다 봅니다. 옥 시인의 이웃 이런 가슴속에 어머니, 거외다. 멀리 하나의 나는 이름을 노새, 계십니다. 다하지 딴은 나는 어머니, 비둘기, 흙으로 때 있습니다. 파란 무덤 릴케 아이들의 지나고 차 걱정도 멀리 있습니다.",
          date: "2021-02-17",
          imgUri:
            "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80",
        },
        {
          title:
            "[test4] Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita necessitatibus sequi min icing elit. Expedita necessitatib icing elit. Expedita necessitatib",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri:
            "https://images.unsplash.com/photo-1552083974-186346191183?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
        {
          title: "[test5]testtest",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test6] tst",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test7] This is Notice Title",
          author: "Lorem ipsum dolor sit amet",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test8] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test9] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test10] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test11] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test12] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test13] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test14] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test15] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test16] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test17] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test18] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test19] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test20] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test21] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test22] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test23] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test24] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test25] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test26] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test27] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test28] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test29] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test30] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test31] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test32] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test33] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test34] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test35] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test36] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test37] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
        {
          title: "[test38] This is Notice Title",
          author: "tester",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque totam, nulla similique consectetur molestias distinctio ea minus rerum eveniet quod voluptates recusandae ipsum cum debitis quos repudiandae libero obcaecati.",
          date: "2021-02-17",
          imgUri: "",
        },
      ],
    };
  },
  components: {
    FontAwesomeIcon,
    InfiniteLoading,
  },
  methods: {
    infiniteHandler($state) {
      const total = this.noticeLists.length;

      if (this.loaded == total) $state.complete();
      else {
        setTimeout(() => {
          if (total - this.loaded > 10) {
            this.loaded += 10;
            $state.loaded();
          } else if (total - this.loaded <= 10) {
            const leftNum = total - this.loaded;
            this.loaded += leftNum;
            $state.loaded();
          }
        }, 1000);
      }
    },
  },
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
            box-shadow: $shadow2;

            .card-content {
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              box-sizing: border-box;
              width: 100%;
              position: relative;
              border: none;
              margin-bottom: 2rem;
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
                max-height: 450px;
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                img {
                  width: 100%;
                  height: 100%;
                }
              }

              .card-body {
                padding: 1.5rem;
                flex: 1 1 auto;
                box-sizing: border-box;
                width: 100%;

                .card-title {
                  margin-bottom: 1.5rem;
                  font-weight: 500;
                  font-size: 1.28rem;
                  color: map-get($map: $theme, $key: "font");
                  line-height: 1.2;
                  box-sizing: border-box;
                  letter-spacing: 0.02rem;
                  word-wrap: break-word;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  cursor: pointer;

                  &:hover {
                    text-decoration: underline;
                  }
                }

                .author {
                  display: flex;
                  align-items: center;
                  box-sizing: border-box;
                  color: map-get($map: $theme, $key: "font-light");
                  margin-bottom: 1rem;

                  .author-profile {
                    margin-right: 0.5rem;
                    display: flex;
                    align-items: center;
                    box-sizing: border-box;

                    .author-img-wrapper {
                      width: 24px;
                      height: 24px;
                      cursor: pointer;
                      border: none;
                      padding: 0;
                      border-radius: 50%;
                      display: inline-flex;
                      align-items: center;
                      justify-content: center;
                      vertical-align: middle;
                      position: relative;

                      .author-img {
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        box-sizing: border-box;
                        cursor: pointer;
                      }
                    }
                  }

                  .author-name {
                    box-sizing: border-box;
                    flex: 1;
                    font-size: 0.85rem;
                    font-weight: 400;
                    letter-spacing: 0.1rem;

                    .name {
                      cursor: pointer;
                      font-size: 1rem;

                      &:hover {
                        text-decoration: underline;
                        transition: all 0.3s ease-in-out;
                      }
                    }

                    .date {
                      color: map-get($map: $theme, $key: "text-muted");
                    }
                  }
                }

                .content {
                  color: map-get($map: $theme, $key: "text-muted");
                  line-height: 1.3rem;
                  word-wrap: break-word;
                  display: -webkit-box;
                  -webkit-line-clamp: 5;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  cursor: pointer;
                  font-weight: 300;
                  margin-bottom: 1.5rem;

                  &:hover {
                    color: map-get($map: $theme, $key: "font-light");
                    transition: all 0.3s ease-in-out;
                  }
                }

                .whitespace {
                  margin: 1.5rem 0;
                  border: 0;
                  border-top: 1px solid map-get($map: $theme, $key: "table-border");
                }

                .card-footer {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  box-sizing: border-box;

                  .footer-left {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;

                    .footer-item {
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      box-sizing: border-box;
                      margin-right: 1.5rem;
                      cursor: pointer;

                      &:hover {
                        color: map-get($map: $theme, $key: "color1");
                      }

                      .footer-text {
                        margin-left: 0.5rem;
                      }
                    }
                  }

                  .footer-right {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                    cursor: pointer;

                    &:hover {
                      color: map-get($map: $theme, $key: "color1");
                    }
                  }
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
