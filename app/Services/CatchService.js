import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";

class CatchService{

  constructor(){
    console.log("Catch service");
    this.getWildPokemon()
  }

  async getWildPokemon(){
    try {
      let res = await pokeApi.get("pokemon/?offset=0&limit=1118")
      console.log(res)
      ProxyState.wildPokemon = res.data.results
        
    } catch (error) {
      console.error(error)
    }
  }

  async setPokedex(index) {
    try {
      console.log('index', index);
      let res = await pokeApi.get("pokemon/" + index)
      console.log(res)
      ProxyState.pokedex = new Pokemon(res.data)
    } catch (error) {
      console.error(error)
    }
  }

}

export const catchservice = new CatchService();