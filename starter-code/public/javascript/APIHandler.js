class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      return  axios.get(this.BASE_URL);
      }
  

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/${id}`)
  }

  createOneRegister (obj) {
    return axios.post(this.BASE_URL, obj)

  }

  updateOneRegister (obj) {
   return axios.put(this.BASE_URL, obj)

  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/${id}`)
  }
}
