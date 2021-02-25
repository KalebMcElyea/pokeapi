import { ProxyState } from "../AppState.js"

export default class Pokemon{
    constructor(data){
      this.name = data.name
      this.img =data.img || data.sprites.other.dream_world.front_default
      this.description = data.description
      this.weight = data.weight
      this.height = data.height 
      this.types = data.types[0].type ? data.types[0].type.name : data.types[0]
      this._id = data._id 
  
      if(Array.isArray(this.description)){
        this.description = this.description.join("\n")
      }
    }
  
    get ActiveTemplate(){
      return /*html*/`
      <div class="card">
                      <div class="card-body">
                          <h1 class="card-title">Pokemon Name: ${this.name}</h1>
                          <img src ="${this.img}">
                          <p class="card">Weight: ${this.weight}</p>
                          <p class="card">Height: ${this.height}</p>
                          <p class="card">Type(s): ${this.types}</p>
                          ${this.ButtonBuilder}
                      </div>
        </div>
      `
    }
  
 

    get ButtonBuilder(){
      if(this._id){
        return `
        <button class="btn btn-danger" onclick="app.myPokemonController.releasePokemon()">Release Pokemon</button>
        `
      }
      return `
        <button class="btn btn-success" onclick="app.myPokemonController.catchPokemon()">Catch Pokemon</button>
        `
    }

  
  }