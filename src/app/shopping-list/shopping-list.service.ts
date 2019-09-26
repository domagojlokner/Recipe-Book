import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5)
    ];

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    getIngredient(i: number): Ingredient {
      return this.ingredients[i];
    }

    addIngredient(ingrediant: Ingredient) {
        this.ingredients.push(ingrediant);
        this.ingredientsChanged.next(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]) {
       this.ingredients.push(...ingredients);
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
      this.ingredients.splice(index, 1);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
}
