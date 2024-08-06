import API from './API'

export default {
    getPokedexList(limit, offset) {
        return API().get(`pokemon?limit=${limit}&offset=${offset}`)
    },

    getPokemonByName(pokemon) {
        return API().get(`pokemon/${pokemon}`)
    }
}