import { Allergen } from "./types/Allergen";
import { FoodType } from "./types/FoodType";
import { Ingredient } from "./types/Ingredient";

const API_URL = import.meta.env.VITE_API_URL

export const Api = {
    signup: async (body: User): Promise<string> => {
        console.log(API_URL)
        const albums = await fetch(`${API_URL}/signup`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        )
        return await albums.json();
    },
    allergens: async (): Promise<Allergen[]> => {
        const allergens = await fetch(`${API_URL}/allergens`)
        return allergens.json()
    },
    addAllergen: async (allergen: string): Promise<any> => {
        const allergenResponse = await fetch(`${API_URL}/allergen`,
            {
                method: "POST",
                body: JSON.stringify(allergen),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
        )
        return await allergenResponse.json();
    },
    foodTypes: async (): Promise<FoodType[]> => {
        const foodTypes = await fetch(`${API_URL}/food_types`)
        return foodTypes.json()
    },
    addFoodType: async (foodType: string): Promise<any> => {
        const foodTypeResponse = await fetch(`${API_URL}/food_type`,
            {
                method: "POST",
                body: JSON.stringify(foodType),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
        )
        return await foodTypeResponse.json();
    },
    ingredients: async (): Promise<Ingredient[]> => {
        const ingredients = await fetch(`${API_URL}/ingredients`)
        return ingredients.json()
    },
    addIngredient: async (ingredient: Ingredient): Promise<any> => {
        const ingredientResponse = await fetch(`${API_URL}/ingredient`,
            {
                method: "POST",
                body: JSON.stringify(ingredient),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
        )
        return await ingredientResponse.json();
    },
}

export interface User {
    id?: string
    signIn?: SignIn
    firstName?: string
    lastName?: string
    email?: string
}

export interface SignIn {
    username: string
    password: string
}