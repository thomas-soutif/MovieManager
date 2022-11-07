import Vue from 'vue'
import Vuex from 'vuex'
import MoviesService from "@/services/MovieService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    all_movies: [],
  },
  getters: {
    getMovie : (state) => (id) => {
      return state.all_movies.find(movie => movie.id === id)
    },
    get_all_movies: (state) => {
      return state.all_movies;
    }
  },
  mutations: {
    setMovies(state, movies) {
      state.all_movies = movies
    },
    updateMovie(state, movie) {
      const existsAtIndex = state.all_movies.findIndex(m => m.id === movie.id)
      if (existsAtIndex !== -1) {
        state.all_movies[existsAtIndex] = movie
      } else {
        state.all_movies.push(movie)
      }
    },

    getMovie(state, id) {
      return state.all_movies.find(item => item.id === id)
    },
  },
  actions: {
     updateListMovie({commit}, movie_list) {
      movie_list.forEach(movie => {
        commit('updateMovie',movie)
      })
    },
    },
    modules: {
  },

})
