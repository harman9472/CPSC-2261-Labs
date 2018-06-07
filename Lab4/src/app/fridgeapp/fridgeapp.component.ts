import { Component, OnInit } from '@angular/core';
import { RecipeManagementService, item, recipe } from '../recipe-management.service';

@Component({
  selector: 'fridgeapp',
  templateUrl: './fridgeapp.component.html',
  styleUrls: ['./fridgeapp.component.css'],
  providers: [RecipeManagementService]
})
export class FridgeappComponent implements OnInit {

  newIngredient1 = new item ("Grape", 2);
  newIngredient2 = new item ("Apple", 4);
  newIngredient3 = new item ("Egg", 1);
  newIngredient4 = new item ("Banana", 5);

  fridgeContainer : Array<item> = [];

  newIngredient: item = new item("", 0);
  
  selectedItem : item = null;

  constructor(private newApp : RecipeManagementService) { }

  ngOnInit() {
  }

  addIngredient() {
    let newIngredientEmpty1 : item = new item("New Ingredient", 0);
    let newIngredientEmpty2 : item = new item("New Ingredient", 0);
    this.selectedItem = newIngredientEmpty1;
    this.newIngredient = newIngredientEmpty2;
    this.fridgeContainer.push(this.selectedItem);

    this.newApp.updateFridgeContainer(this.fridgeContainer);
  }

  selectIngredient(ingredient) {
    this.selectedItem = ingredient;
    this.newIngredient.itemName = this.selectedItem.itemName;
    this.newIngredient.itemQuantity = this.selectedItem.itemQuantity;
  }

  deleteIngredient() {
    for (let i = 0; i < this.fridgeContainer.length; i++) {
      if (this.fridgeContainer[i] == this.selectedItem) {
        this.fridgeContainer.splice(i, 1);
      }
    }
    this.selectedItem = null;

    this.newApp.updateFridgeContainer(this.fridgeContainer);
  }

  editIngredient() {
    let findDuplicate = false;
    for (let i = 0; i < this.fridgeContainer.length; i++) {
      if (this.newIngredient.itemName == this.fridgeContainer[i].itemName && this.newIngredient.itemName != this.selectedItem.itemName) {
        findDuplicate = true;
        this.selectedItem = this.fridgeContainer[i];
      }
    }
    if (findDuplicate == false) {
      this.selectedItem.itemName = this.newIngredient.itemName;
      this.selectedItem.itemQuantity = this.newIngredient.itemQuantity;
    }
    else {
      this.selectedItem.itemQuantity = this.newIngredient.itemQuantity;
    }

    this.newApp.updateFridgeContainer(this.fridgeContainer);
  }
}

