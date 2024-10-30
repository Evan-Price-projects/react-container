import { Allergen } from "./Allergen"
import { FoodType } from "./FoodType"
import { Ingredient } from "./Ingredient"

export type HomePageState = HomePageInterface

export interface HomePageInterface{
    newAllergen: string | undefined
    newFoodType: string | undefined
    newIngredient: Ingredient | undefined
    allergens: Allergen[]
    allergen: Allergen[]
    submitNewAllergen: boolean
    submitNewFoodType: boolean
    submitNewIngredient: boolean
    foodTypes: FoodType[]
    foodType: FoodType[]
    ingredients: Ingredient[]
    ingredient: Ingredient[]
}