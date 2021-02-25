import { ProxyState } from "../AppState.js";
import {myPokemonService} from "../Services/MyPokemonService.js"

function _drawMyPokemon(){
  let pokemon = ProxyState.myPokemon
  // console.log(spells)
  // console.log("draw fn");
  let template = ""
  pokemon.forEach(p=> template += `<li onclick="app.myPokemonController.setPokedex('${p._id}')" > ${p.name} </li>`)
  document.getElementById("my-pokemon").innerHTML =template;
}
export default class MyPokemonController{
  constructor(){
    console.log("Mypokemon");
    ProxyState.on("myPokemon", _drawMyPokemon)
  }

  catchPokemon(){
    myPokemonService.catchPokemon()
  }

  setPokedex(id){
    myPokemonService.setPokedex(id)
  }

  releasePokemon(){
    myPokemonService.releasePokemon()
  }
}