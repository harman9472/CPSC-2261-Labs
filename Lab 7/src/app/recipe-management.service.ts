import { Injectable } from '@angular/core';
import { RecipeappComponent } from './recipeapp/recipeapp.component';
import { FridgeappComponent } from './fridgeapp/fridgeapp.component';
import { ShoppingListappComponent } from './shopping-listapp/shopping-listapp.component';

@Injectable()

export class RecipeManagementService {

  static newSelectedRecipe : recipe;
  static newFridgeContainer : Array<item>;
  static newShoppingListContainer : Array<item> = [];

  constructor() { 
  }

  //update newSelectedRecipe when any change happens in recipeapp component
  updateSelectedRecipe(recipe) {
    RecipeManagementService.newSelectedRecipe = recipe;
  }

  //update newFridgeContainer when any change happens in freidgeapp component
  updateFridgeContainer(fridgeContainer) {
    RecipeManagementService.newFridgeContainer = fridgeContainer;
  }
 
  //create and update newShoppingListContainer when button is clicked
  updateShoppingList() {
    RecipeManagementService.newShoppingListContainer = [];
    if (RecipeManagementService.newSelectedRecipe != undefined) {
      if (RecipeManagementService.newFridgeContainer == undefined || RecipeManagementService.newFridgeContainer.length == 0) {
        RecipeManagementService.newShoppingListContainer = RecipeManagementService.newSelectedRecipe.ingredients;
      }
      else {
        for (let i = 0; i < RecipeManagementService.newSelectedRecipe.ingredients.length; i++) {
          let existInFridge = false;
          for (let j = 0; j < RecipeManagementService.newFridgeContainer.length; j++) {
            if (RecipeManagementService.newFridgeContainer[j].itemName == RecipeManagementService.newSelectedRecipe.ingredients[i].itemName) {
              existInFridge = true;
              if (RecipeManagementService.newFridgeContainer[j].itemQuantity < RecipeManagementService.newSelectedRecipe.ingredients[i].itemQuantity) {
                let newItem = new item(RecipeManagementService.newSelectedRecipe.ingredients[i].itemName, RecipeManagementService.newSelectedRecipe.ingredients[i].itemQuantity);
                newItem.itemQuantity -= RecipeManagementService.newFridgeContainer[j].itemQuantity;
                RecipeManagementService.newShoppingListContainer.push(newItem);
              }
            }
            if (existInFridge == false && j == RecipeManagementService.newFridgeContainer.length - 1) {
              RecipeManagementService.newShoppingListContainer.push(RecipeManagementService.newSelectedRecipe.ingredients[i]);
            }
          }
        }
      }
    }
  }
}

export class item {
  
  constructor(public itemName : string, public itemQuantity : number) {
  }
}


export class recipe {

  addItem(newItem : item) {
      this.ingredients.push(newItem);
  }

  addInstruction(newInstruction : string) {
      this.instructions.push(newInstruction);
  }

  constructor(public recipeName : String, public ingredients : Array<item>, public instructions : Array<string>, public estimatedTime : number) {
  }
}