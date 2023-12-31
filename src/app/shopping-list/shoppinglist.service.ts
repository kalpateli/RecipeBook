import { Ingredient } from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core"
export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private  ingredients : Ingredient[] = [
        new Ingredient("Mangoes" , 8),
        new Ingredient("Tomatoes" , 5),
        new Ingredient("Apples" , 2),       
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredient(ingredient : Ingredient)
      {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}