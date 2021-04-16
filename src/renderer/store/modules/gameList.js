const state = {
  listOfGames: [{
    name: 'Fallout New Vegas',
    img: 'static/fallout_new_vegas.jpg',
    type: 'rpg'
  }, {
    name: 'Cyberpunk 2077',
    img: 'static/fallout_new_vegas.jpg',
    type: 'rpg'
  }]
}
const mutations = {
  addGame (state, payload) {
    state.listOfGames = [...payload]
  },
  removeGame (state, payload) {
    if (payload.id && state.games.find(i => i.id === payload.id)) {
      state.games = state.games.filter(i => i.id !== payload.id)
    }
  }
}

const getters = {
  getAllGames (state) {
    return state.listOfGames
  },
  getAGame (state, id) {
    return state.listOfGames.filter(game => game.id === id) || false
  }
}

export default {
  state,
  mutations,
  getters
}
