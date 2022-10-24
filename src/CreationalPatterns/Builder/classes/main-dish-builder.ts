import { MealBuilderInterface } from "../interface/meal-builder-interface";
import { MealBox } from "./meal-box";
import { Beans, Beverage, Dessert, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderInterface {
    private _meal: MealBox = new MealBox();

    reset(): this {
        this._meal = new MealBox();
        return this;
    }

    makeMeal(): this {
        const rice = new Rice("Arroz", 5);
        const beans = new Beans("Feijão", 10);
        const meat = new Meat("Carne", 25);

        this._meal.add(rice, beans, meat);
        return this;
    }
    makeBeverage(): this {
        const beverage = new Beverage("Refrigerante", 5);
        this._meal.add(beverage);
        return this;
    }
    makeDessert(): this {
        const dessert = new Dessert("Pudim", 8);
        this._meal.add(dessert);
        return this;
    }

    getMeal(): MealBox {
        return this._meal;
    }

    getPrice(): number {
        return this._meal.getPrice();
    }
}