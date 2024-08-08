import API from './API'

export default {
    getPokedexList(limit, offset) {
        return API().get(`pokemon?limit=${limit}&offset=${offset}`)
    },

    getPokemonById(pokemon) {
        return API().get(`pokemon/${pokemon}`)
    },

    getPokemonSpeciesById(pokemon) {
        return API().get(`pokemon-species/${pokemon}`)
    }
}