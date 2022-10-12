/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
    if (time || time === 0) return time ? 'Not done, please wait.' : 'Lasagna is done.'
    return 'You forgot to set the timer.'
}

export function preparationTime(layers, cookingTime = 2) {
    return layers.length * cookingTime
}

export function quantities(layers) {
    let sauce = 0;
    let noodles = 0;
    for (let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        if (layer === 'noodles') {
            noodles += 50
        } else if (layer === 'sauce') {
            sauce += 0.2
        }
    }
    return { noodles, sauce }
}

export function addSecretIngredient(friendsList, myList) {
    myList[myList.length] = friendsList[friendsList.length - 1]
}

export function scaleRecipe(recipe, portions) {
    let onePortionRecipe = {}

    for (const ingredient in recipe) {
        onePortionRecipe[ingredient] = recipe[ingredient] / 2;
    }

    let newRecipe = {}
    for (const ingredient in recipe) {
        newRecipe[ingredient] = onePortionRecipe[ingredient] * portions;
    }

    return newRecipe;
}



