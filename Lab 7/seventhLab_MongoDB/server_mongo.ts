import Mongo = require('mongodb');

class item {
    constructor(itemName, itemQuantity) {
        itemName = itemName;
        itemQuantity = itemQuantity
    }
}

class recipe {
    constructor(recipeName, ingredients, instructions, estimatedTime) {
        recipeName = recipeName;
        ingredients = ingredients;
        instructions = instructions;
        estimatedTime = estimatedTime;
    }
}

const recipeCollection = {};

db.recipeCollection.insertMany([
    {recipeName : "Apple Pie", ingredients : [new item ("apple", 8), new item ("egg", 3)],
     instructions: ["cut apples to small pieces", "mix apples with eggs", "bake it"],
     estimatedTime : 30},
    {recipeName : "Egg Sandwich", ingredients : [new item ("egg", 3), new item ("bread", 2)],
     instructions: ["either boil or fry eggs", "put them between breads"],
     estimatedTime : 10},
    {recipeName : "Fruit Salad", ingredients : [new item ("apple", 8), new item ("banana", 3), new item ("lettuce", 1)],
     instructions: ["cut fruits and lettuce to small pieces", "mix them"],
     estimatedTime : 2},
 ]);