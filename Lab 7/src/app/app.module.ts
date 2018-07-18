import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeappComponent } from './recipeapp/recipeapp.component';
import { FridgeappComponent } from './fridgeapp/fridgeapp.component';
import { ShoppingListappComponent } from './shopping-listapp/shopping-listapp.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeappComponent,
    FridgeappComponent,
    ShoppingListappComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
