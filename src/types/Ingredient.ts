import { Allergen } from "./Allergen"
import { FoodType } from "./FoodType"

export interface Ingredient{
    id?: number
    name: string
    foodTypes: FoodType[]
    allergens: Allergen[]
    deleted?: boolean
    date_deleted?: Date
}