import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brands: [],
    brand: {}
  },
  mutations: {
    SET_BRANDS(state, response) {
      state.brands = response
    },
    SET_BRAND(state, response) {
      state.brand = response
    }
  },
  actions: {
    loadBrands({ commit }) {
      axios.get("http://private-bc245d-brewoptixv2.apiary-mock.com/brands")
      .then(response => response.data)
      .then(response => {
        commit('SET_BRANDS', response)
      })
    },
    loadBrandById({ commit }, entity_id) {
      axios.get("http://private-bc245d-brewoptixv2.apiary-mock.com/brands/" + entity_id)
      .then(({data}) => commit('SET_BRAND', data))
      // .then(response => {
      //   console.log(typeof(response))
      //   commit('SET_BRAND', JSON.parse(response))    //////parse error////////
      // })
      
    }
  }
})
