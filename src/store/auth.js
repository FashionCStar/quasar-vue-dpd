const state = {
  loggedIn: false,
  user: {},
  token: '',
  isAdmin: '',
  pageTitle: '',
  userLevel: ''
}

const getters = {
  isLoggedIn: state => {
    return state.loggedIn
  },
  token: state => {
    return state.token
  },
  user: state => {
    return state.user
  },
  isAdmin: state => {
    return state.isAdmin
  },
  pageTitle: state => {
    return state.pageTitle
  },
  userLevel: state => {
    return state.userLevel
  }
}

const actions = {
}

const mutations = {
  user (state, user) {
    state.user = user
  },
  login (state, auth) {
    state.loggedIn = !!auth.token
    state.token = auth.token
    state.user = auth.user
  },
  token (state, token) {
    state.token = token
  },
  isAdmin (state, isAdmin) {
    state.isAdmin = isAdmin
  },
  pageTitle (state, pageTitle) {
    state.pageTitle = pageTitle
  },
  userLevel (state, userLevel) {
    state.userLevel = userLevel
  },
  logout (state) {
    state.loggedIn = false
    state.token = ''
    state.user = {}
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
