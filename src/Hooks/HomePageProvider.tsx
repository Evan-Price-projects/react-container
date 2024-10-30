import React, { useEffect, useReducer } from "react"
import { HomePageContext } from "./HomePageContext"
import { initialState, homePageReducer } from "./HomePageReducer"
import { HomePageState } from "../types/HomePageState"
import { Action } from "../types/HomePageAction"
import { Api } from "../Api"
export const HomePageProvider = ({ children }: React.PropsWithChildren<any>) => {
    const [state, dispatch] = useReducer(homePageReducer, initialState)

    const refreshProps = ()=>{
        Api.allergens().then((allergens)=>{
            dispatch({type: "Get Allergens", value: allergens ?? []})
        })
        Api.foodTypes().then((foodTypes)=>{
            dispatch({type: "Get Food Types", value: foodTypes ?? []})
        })
        Api.ingredients().then((ingredients)=>{
            dispatch({type: "Get Ingredients", value: ingredients ?? []})
        })
    }
    useEffect(()=>{
        refreshProps()
    }, [])
    useEffect(()=>{
        if(state.newAllergen != null && state.submitNewAllergen == true){
            Api.addAllergen(state.newAllergen).then(resp=>{
                console.log(resp)
            })
            dispatch({type: "Add Allergen", value: undefined})
            refreshProps()
        }
    }, [state.submitNewAllergen])
    useEffect(()=>{
        if(state.newFoodType != null && state.submitNewFoodType== true){
            Api.addFoodType(state.newFoodType).then(resp=>{
                console.log(resp)
            })
            dispatch({type: "Add Food Type", value: undefined})
            refreshProps()
        }
    }, [state.submitNewFoodType])
    useEffect(()=>{
        if(state.newIngredient != null && state.submitNewIngredient== true){
            Api.addIngredient(state.newIngredient).then(resp=>{
                console.log(resp)
            })
            dispatch({type: "Add Ingredient", name: ""})
            dispatch({type: "Add Ingredient", allergens: []})
            dispatch({type: "Add Ingredient", foodTypes: []})
            refreshProps()
        }
    }, [state.submitNewIngredient])
    const gameRulesProps = {
        state, dispatch
    }

    return (<HomePageContext.Provider value={gameRulesProps}>
        {children}
    </HomePageContext.Provider>)

}

export interface HomePageProps {
    state: HomePageState,
    dispatch: React.Dispatch<Action>
}