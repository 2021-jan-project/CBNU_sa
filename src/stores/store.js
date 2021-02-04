import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);

const resourceHost = "http://localhost:8000";

const enhanceAccessToken = () => {
  const { accessToken } = localStorage;
  if (!accessToken) return;
  axios.defaults.headers.common["Authorization"] = `${accessToken}`;
};

enhanceAccessToken();

export default new Vuex.Store({
  state: {
    theme: "theme-light",
    sidebar: "sidebar-closed",
    accessToken: null,
  },
  getters: {
    theme: (state) => state.theme,
    sidebar: (state) => state.sidebar,
  },
  mutations: {
    SETSTYLE(state, mode) {
      state.theme = mode;
    },
    SETSIDEBARWIDTH(state, opened) {
      state.sidebar = opened;
    },
    LOGIN(state, { accessToken }) {
      state.accessToken = accessToken;
      localStorage.accessToken = accessToken;
      console.log("state.accessToken :>> ", state.accessToken);
      axios.defaults.headers.common["Authorization"] = `${accessToken}`;
    },
  },
  actions: {
    SETSTYLE({ commit }) {
      commit("SETSTYLE");
    },
    SETSIDEBARWIDTH({ commit }) {
      commit("SETSIDEBARWIDTH");
    },
    LOGIN({ commit }, { id, pw }) {
      return axios.post(`${resourceHost}/account/join`, { id, pw }).then(({ data }) => {
        commit("LOGIN", data);
        axios.defaults.headers.common["Authorization"] = `${data.accessToken}`;
      });
    },
  },
});
