import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";

class MyPokemonService{


constructor(){
  console.log("mypokemonservice");
  this.getMyPokemon()
}

async getMyPokemon(){
  try {
    let res = await sandboxApi.get("")
    console.log(res.data)
    ProxyState.myPokemon = res.data.map(s => new Pokemon(s))
    console.log(ProxyState.myPokemon)
  } catch (error) {
    console.error(error)
  }
}

async catchPokemon() {
  try {
    let res = await sandboxApi.post("", ProxyState.pokedex)
    console.log(res)
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)]
  } catch (error) {
    console.error(error)
  }
}

setPokedex(id) {
 let setPokedex = ProxyState.myPokemon.find(p => p._id == id)
 ProxyState.pokedex = setPokedex
}

async releasePokemon() {
 try {
   await sandboxApi.delete(ProxyState.pokedex._id)
   this.getMyPokemon()
   ProxyState.pokedex = null
   } catch (error) {
   console.error(error)
 }
}

}

export const myPokemonService = new MyPokemonService