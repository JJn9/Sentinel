import Api from '../config'

const state = {
  weather: {}
}

const actions = {
  fetch(context, path) {
    context.commit('SET_SECRETSLOADING', true)
    Api()
      .get(`vault/secret/${path}`, )
      .then(data => {
        let secrets = data.data.data
        context.commit('SET_SECRETS', secrets)
        context.commit('SET_SECRETSLOADING', false)
      })
      .catch(e => {
        console.log(e)
        context.commit('SET_SECRETSLOADING', false)
      })
  },
}

const mutations = {
  SET_DATA(state, secrets) {
    state.secrets = secrets
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}