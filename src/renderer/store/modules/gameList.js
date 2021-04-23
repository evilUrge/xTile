const state = {
  listOfGames: [{
    id: 'tZ58@a',
    name: 'Fallout New Vegas',
    img: 'static/fallout_new_vegas.jpg',
    type: 'rpg',
    uri: {
      'url-route': '#?cmsId=100250211&launchSource=External&shortName=death_stranding_steam&parentGameId=48a598f8-4719-4d9f-b2db-f2f7461c40f7'
    }
  }, {
    id: 'dM36!S',
    name: 'Cyberpunk 2077',
    img: 'static/cyberpunk.jpg',
    type: 'rpg',
    uri: '/Applications/VLC.app'
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
