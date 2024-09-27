import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrl: './recipe-list-component.component.css'
})
export class RecipeListComponentComponent implements OnInit {

  public recipes: Recipe[] = [];

  constructor( private recipeService: RecipesService) {}
  
  ngOnInit(): void {
    this.recipes = this.recipeService.recipesList;
  }



}
