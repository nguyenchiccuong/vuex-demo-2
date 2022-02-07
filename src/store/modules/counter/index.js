const state = {
  count: 0,
};
//payload can be object
const mutations = {
  UPDATE_COUNT(state, payload) {
    state.count = payload;
  },
  CLEAR_COUNT(state) {
    state.count = 0;
  },
};
//count can be object
const actions = {
  addCount({ commit }, count) {
    commit("UPDATE_COUNT", count);
  },
  clear({ commit }, count) {
    commit("CLEAR_COUNT");
  },
};

const getters = {
  getCount: (state) => state.count,
};

const counterModule = {
  state,
  mutations,
  actions,
  getters,
};

export default counterModule;
