import Api from './Api'

export default {
  auth (data) {
    return Api().post('auth', data)
  }
}
