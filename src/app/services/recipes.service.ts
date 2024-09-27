import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  public recipes: Recipe[] = [
    {
      name: 'Arroz con Pollo',
      difficulty: 'Baja'
    },
    {
      name: 'Mote de Queso',
      difficulty: 'Media'
    },
    {
      name: 'Bandeja Paisa',
      difficulty: 'Alta'
    }
  ];

  get recipesList(): Recipe[] {
    return [...this.recipes];
  }

  addRecipe(recipe: Recipe | null): void {
    if (recipe != null){
      this.recipes.push(recipe);
    }
  }


}
