import { Action } from "../types/HomePageAction"
import { HomePageState } from "../types/HomePageState"


export const initialState: HomePageState = {
    allergens: [],
    allergen: [],
    foodTypes: [],
    foodType: [],
    ingredient: [],
    ingredients: [],
    newAllergen: undefined,
    newFoodType: undefined,
    newIngredient: undefined,
    submitNewAllergen: false,
    submitNewFoodType: false,
    submitNewIngredient: false,
}

export const homePageReducer = (state: HomePageState, action: Action) => {
    switch (action.type) {
        case ("Add Allergen"):
            state.submitNewAllergen = false
            state.newAllergen = action.value
            return { ...state };
        case ("Add Food Type"):
            state.submitNewFoodType = false
            state.newFoodType = action.value
            return {...state};
        case("Add Ingredient"):
            state.submitNewIngredient = false
            if(state.newIngredient == undefined){
                state.newIngredient = {name: "", allergens: [], foodTypes: []}
            }
            if (action.name) state.newIngredient!.name = action.name
            if (action.allergens) state.newIngredient!.allergens = state.allergens.filter((allergen) => action.allergens?.includes(allergen.id))
            if (action.foodTypes) state.newIngredient!.foodTypes = state.foodTypes.filter((foodType) => action.foodTypes?.includes(foodType.id))
            return {...state}
        case ("Submit Allergen"):
            state.submitNewAllergen = true;
            return { ...state };
        case ("Submit Food Type"):
            state.submitNewFoodType = true;
            return { ...state };
        case ("Submit Ingredient"):
            state.submitNewIngredient = true;
            return {...state}
        case ("Select Allergens"):
            state.allergen = state.allergens.filter((val) => action.value.includes(val.id)) || undefined;
            return { ...state };
        case ("Select Food Types"):
            state.foodType = state.foodTypes.filter((val) => action.value.includes(val.id)) || undefined;
            return { ...state };
        case ("Select Ingredients"):
            state.ingredient = state.ingredients.filter((val) => action.value.includes(val.id ?? -10)) || undefined;
            return { ...state };
        case ("Get Allergens"):
            state.allergens = action.value;
            return { ...state }
        case ("Get Food Types"):
            state.foodTypes = action.value;
            return { ...state }
        case ("Get Ingredients"):
            state.ingredients = action.value;
            return {...state}
    }
}