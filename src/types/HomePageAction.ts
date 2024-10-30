import { Allergen } from "./Allergen"
import { FoodType } from "./FoodType"
import { Ingredient } from "./Ingredient"

export type Action = AddAllergen | AddFoodType | SelectAllergens | SelectFoodTypes | GetAllergens | GetFoodTypes | SubmitAllergen | SubmitFoodType | AddIngredient | SubmitIngredient | GetIngredients | SelectIngredients

export interface SubmitAllergen {
    type: "Submit Allergen"
}
export interface SubmitFoodType {
    type: "Submit Food Type"
}
export interface SubmitIngredient {
    type: "Submit Ingredient"
}

export interface AddAllergen {
    type: "Add Allergen"
    value: string | undefined
}

export interface AddFoodType {
    type: "Add Food Type"
    value: string | undefined
}

export interface AddIngredient {
    type: "Add Ingredient"
    name?: string
    foodTypes?: number[]
    allergens?: number[]
}

export interface SelectAllergens {
    type: "Select Allergens"
    value: number[]
}

export interface SelectFoodTypes {
    type: "Select Food Types"
    value: number[]
}

export interface SelectIngredients {
    type: "Select Ingredients"
    value: number[]
}

export interface GetAllergens {
    type: "Get Allergens"
    value: Allergen[]
}

export interface GetFoodTypes {
    type: "Get Food Types"
    value: FoodType[]
}

export interface GetIngredients {
    type: "Get Ingredients"
    value: Ingredient[]
}