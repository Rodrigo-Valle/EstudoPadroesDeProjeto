import { MainDishBuilder } from "./classes/main-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

const mainDishBuilder = new MainDishBuilder();
const veganDishBuilder = new VeganDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
mainDishBuilder.makeBeverage();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

veganDishBuilder.makeMeal();
console.log(veganDishBuilder.getMeal());
console.log(veganDishBuilder.getPrice());
