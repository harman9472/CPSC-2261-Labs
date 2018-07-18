import { Component, OnInit } from '@angular/core';
import { RecipeManagementService, item, recipe } from '../recipe-management.service';

@Component({
  selector: 'recipeapp',
  templateUrl: './recipeapp.component.html',
  styleUrls: ['./recipeapp.component.css'],
  providers: [RecipeManagementService]
})
export class RecipeappComponent implements OnInit {

  //new edit recipe object
  newRecipe: recipe = new recipe("", [new item ("",0)], [""], 0);
  
  //new select recipe object
  selectedItem : recipe = null;

  constructor(private newApp : RecipeManagementService) { }

  ngOnInit() {
  }

  //add recipe method
  addRecipe() {
    let newRecipeEmpty1 : recipe = new recipe("New Recipe", [new item ("",0)], [""], 0);
    let newRecipeEmpty2 : recipe = new recipe("New Recipe", [new item ("",0)], [""], 0);
    this.selectedItem = newRecipeEmpty1;
    this.newRecipe = newRecipeEmpty2;
    this.recipeMenu.push(this.selectedItem);

    this.newApp.updateSelectedRecipe(this.selectedItem);
  }

  //select recipe method
  selectRecipe(recipe) {
    this.selectedItem = recipe;
    this.newRecipe.recipeName = this.selectedItem.recipeName;
    let j = 0;
    for (let i = 0; i < this.selectedItem.ingredients.length; i++) {
      if (j > 0) {
        this.newRecipe.ingredients.push(new item ("",0));
      }
      this.newRecipe.ingredients[i].itemName = this.selectedItem.ingredients[i].itemName;
      this.newRecipe.ingredients[i].itemQuantity = this.selectedItem.ingredients[i].itemQuantity;
      j++;
    }
    for (let i = 0; i < this.selectedItem.instructions.length; i++) {
      this.newRecipe.instructions[i] = this.selectedItem.instructions[i];
    }
    this.newRecipe.estimatedTime = this.selectedItem.estimatedTime;

    //service method
    this.newApp.updateSelectedRecipe(this.selectedItem);
  }

  //delete recipe method
  deleteRecipe() {
    for (let i = 0; i < this.recipeMenu.length; i++) {
      if (this.recipeMenu[i] == this.selectedItem) {
        this.recipeMenu.splice(i, 1);
      }
    }
    this.selectedItem = null;

    //service method
    this.newApp.updateSelectedRecipe(this.selectedItem);
  }

  //edit recipe method
  editRecipe() {
    this.selectedItem.recipeName = this.newRecipe.recipeName;
    for (let i = 0; i < this.selectedItem.ingredients.length; i++) {
      this.selectedItem.ingredients[i].itemName = this.newRecipe.ingredients[i].itemName;
      this.selectedItem.ingredients[i].itemQuantity = this.newRecipe.ingredients[i].itemQuantity;
    }
    for (let i = 0; i < this.selectedItem.instructions.length; i++) {
      this.selectedItem.instructions[i] = this.newRecipe.instructions[i];
    }
    this.selectedItem.estimatedTime = this.newRecipe.estimatedTime;

    //service method
    this.newApp.updateSelectedRecipe(this.selectedItem);
  }

  //method to add instruction to new or currently editing recipe
  addInstruction() {
    this.selectedItem.instructions.push("");
    this.newRecipe.instructions.push("");
  }

  //method to add ingredient to new or currently editing recipe
  addIngredient() {
    let emptyItem = new item ("", 0);
    let emptyItem2 = new item ("", 0);
    this.selectedItem.ingredients.push(emptyItem);
    this.newRecipe.ingredients.push(emptyItem2);

    //service method
    this.newApp.updateSelectedRecipe(this.selectedItem);
  }

  //method to remove instruction from new or currently editing recipe
  removeInstruction() {
    if (this.selectedItem.instructions.length > 1) {
      this.selectedItem.instructions.pop();
      this.newRecipe.instructions.pop();
    }
  }

  //method to remove ingredient from new or currently editing recipe
  removeIngredient() {
    if (this.selectedItem.ingredients.length > 1) {
      this.selectedItem.ingredients.pop();
      this.newRecipe.ingredients.pop();

      //service method
      this.newApp.updateSelectedRecipe(this.selectedItem);
    }
  }
}

