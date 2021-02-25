import { ProxyState } from "../AppState.js";
import {catchservice} from"../Services/CatchService.js";

function _drawWildPokemon(){
  let wild = ProxyState.wildPokemon
  console.log(wild)
  console.log("draw");
  let template = ""
  wild.forEach(p=> template += `<li onclick="app.catchController.setPokedex('${p.name}')">${p.name} </li>`)
  document.getElementById("wild-pokemon").innerHTML =template;

}

function _drawPodex(){
  if(ProxyState.pokedex){
    document.getElementById("pokedex").innerHTML = ProxyState.pokedex.ActiveTemplate
  }else {
    document.getElementById("pokedex").innerHTML = ""
  }
}

export default class CatchController{
  constructor(){
    console.log("catch controller");
    ProxyState.on("wildPokemon", _drawWildPokemon)
    ProxyState.on("pokedex", _drawPodex)
  }

  setPokedex(index){
    console.log(index)
    catchservice.setPokedex(index)
  }
}