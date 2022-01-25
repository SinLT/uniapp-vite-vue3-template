const state = {
  test: 1
}
const mutations = {
  SET_TEST(state, data) {
    state.test++
  }
}
const actions = {
  getTest({ state, commit }) {
    try {
      setTimeout(() => {
        commit('SET_TEST')
      }, 500)
    } catch (error) {
      console.error(error)
    }
  }
}
export default {
  state,
  mutations,
  actions
}
