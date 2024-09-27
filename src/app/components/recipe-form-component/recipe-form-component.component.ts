import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Recipe } from '../../interfaces/recipe';
import { RecipeModel } from '../../model/recipe.component';

@Component({
  selector: 'app-recipe-form-component',
  templateUrl: './recipe-form-component.component.html',
  styleUrl: './recipe-form-component.component.css'
})
export class RecipeFormComponentComponent {

  public recipe: Recipe[] = [];

  myForm = this.fb.group({
    name: ['', Validators.required],
    dificulty: ['', Validators.required]
  })

  constructor( 
    private recipesService: RecipesService,
    private fb: FormBuilder
  ) {

  }

  messageError(text: string) {
    if(text === 'name') {
      return this.myForm.get('name')?.invalid || this.myForm.get('name')?.pristine;
    }
    return this.myForm.get('dificulty')?.invalid || this.myForm.get('dificulty')?.pristine;
  }
  

  sendRecipe(): void {
    // this.recipesService.addRecipe(  )

  
    if (this.myForm.validator) {
      // this.myForm.value
      // let recipe = new RecipeModel(this.myForm.get('name')?.value, this.myForm.get('name')?.value)
      let name = this.myForm.get('name')?.value || '';
      let dificulty = this.myForm.get('dificulty')?.value || '';

      let recipe = new RecipeModel(name, dificulty);

      this.recipesService.addRecipe( recipe );
      console.log( this.myForm.value );

    }
  }

}
