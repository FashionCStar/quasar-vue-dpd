import axios from 'axios'
import { Notify } from 'quasar'
// const API_URL = 'http://localhost:8000/api'
const API_URL = '/api'

class RestApi {
  instance = void 0
  uploadinstance = void 0
  __token = void 0
  constructor () {
    this.instance = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  config ({ router, store }) {
    this.token = store.state.auth.token
    let that = this
    this.instance.interceptors.request.use(function (config) {
      config.headers.Authorization = 'Bearer ' + that.token
      return config
    }, function (error) {
      return Promise.reject(error)
    })

    this.instance.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      if (error.response.status === 401) {
        Notify.create({
          color: 'red-5',
          textColor: 'white',
          position: 'top',
          icon: 'fas fa-exclamation-triangle',
          message: error.response.data.message
        })
        // LocalStorage.remove('token')
        store.commit('auth/token', '')
        // LocalStorage.remove('user')
        store.commit('auth/user', {})
        if (router.currentRoute.name !== 'Login') {
          router.push('/')
        }
        return Promise.reject(error)
      }
      let data = error.response.data || {}
      let message = data.message
      Notify.create({
        color: 'red-5',
        textColor: 'white',
        position: 'top',
        icon: 'fas fa-exclamation-triangle',
        message: message
      })
      return Promise.reject(error)
    })
  }

  async getMyProfile (params) {
    return this.instance.get('/my-profile', params)
  }
  async updateUserInfo (params) {
    return this.instance.post('/update-profile', params)
  }
  async sendVerifyEmail (params) {
    return this.instance.post('/sendVerifyEmail', params)
  }
  async sendVerifyPhone (params) {
    return this.instance.post('/sendVerifyPhone', params)
  }
  async uploadUserAvatar (params, headers) {
    return this.instance.post('/uploadUserAvatar', params, headers)
  }
  async getUsers (params) {
    return this.instance.post('/getUsers', params)
  }
  async getUserInfo (id) {
    return this.instance.get('/getUserDetails?id=' + id)
  }
  async updateUser (params) {
    return this.instance.post('/updateUser', params)
  }
  async removeUser (params) {
    return this.instance.post('/removeUser', params)
  }
  async getReports (params) {
    return this.instance.post('/getReports', params)
  }
  async getMonthlyReports (params) {
    return this.instance.post('/getMonthlyReports', params)
  }
  async getReportInfo (reportNo) {
    return this.instance.get('/getReportDetails?reportNo=' + reportNo)
  }
  async getRegularRoutes () {
    return this.instance.get('/getRegularRoutes')
  }
  async getExtraRoutes () {
    return this.instance.get('/getExtraRoutes')
  }
  async getCourierList () {
    return this.instance.get('/getCourierList')
  }
  async getCouriers (params) {
    return this.instance.post('/getCouriers', params)
  }
  async createCourier (params) {
    return this.instance.post('/createCourier', params)
  }
  async updateCourier (params) {
    return this.instance.post('/updateCourier', params)
  }
  async removeCourier (params) {
    return this.instance.post('/removeCourier', params)
  }
  async getRoutes (params) {
    return this.instance.post('/getRoutes', params)
  }
  async createRoute (params) {
    return this.instance.post('/createRoute', params)
  }
  async updateRoute (params) {
    return this.instance.post('/updateRoute', params)
  }
  async removeRoute (params) {
    return this.instance.post('/removeRoute', params)
  }
  async createSingleRecord (params) {
    return this.instance.post('/createSingleRecord', params)
  }
  async updateSingleRecord (params) {
    return this.instance.post('/updateSingleRecord', params)
  }
  async createReport (params) {
    return this.instance.post('/createReport', params)
  }
  async updateReport (params) {
    return this.instance.post('/updateReport', params)
  }
  async removeReport (params) {
    return this.instance.post('/removeReport', params)
  }
  async registerUser (params) {
    return this.instance.post('/registerUser', params)
  }
  async login (params) {
    let response = await this.instance.post('/loginUser', params)
    this.token = response.data.token
    return response
  }
  async forgotPassword (params) {
    return this.instance.post('/forgotPassword', params)
  }
  async resetPassword (params) {
    return this.instance.post('/resetPassword', params)
  }
  async confirmUser (params, token) {
    this.token = token
    return this.instance.post('/confirmUser', params)
  }
}

const api = new RestApi()

export default ({ Vue, router, store }) => {
  api.config({ router, store })
  Vue.prototype.$api = api
}
export { api }
