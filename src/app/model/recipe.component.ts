import { Recipe } from "../interfaces/recipe";

export class RecipeModel implements Recipe {
    name: string;
    difficulty: string;

    constructor (name: string, dificulty: string) {
        this.name = name;
        this.difficulty = dificulty;
    }

}