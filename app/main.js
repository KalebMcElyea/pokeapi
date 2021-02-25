import CatchController from "./Controllers/CatchController.js";
import MyPokemonController from "./Controllers/MyPokemonController.js";


class App {
  // valuesController = new ValuesController();
  catchController = new CatchController();

  myPokemonController = new MyPokemonController();

}

window["app"] = new App();
