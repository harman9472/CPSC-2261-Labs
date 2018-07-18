import { Component, OnInit } from '@angular/core';
import { RecipeManagementService, item, recipe } from '../recipe-management.service';

@Component({
  selector: 'shopping-listapp',
  templateUrl: './shopping-listapp.component.html',
  styleUrls: ['./shopping-listapp.component.css'],
  providers: [RecipeManagementService]
})
export class ShoppingListappComponent implements OnInit {

  shoppingListContainer : Array<item> = [];

  constructor(private newApp : RecipeManagementService) { }

  ngOnInit() {
  }

  updateShoppingList() {
    this.newApp.updateShoppingList();
    this.shoppingListContainer = RecipeManagementService.newShoppingListContainer;
  }
}
