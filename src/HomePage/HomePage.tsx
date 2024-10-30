import { useState } from "react"
import { Input, Grid, Stack, Card, Dropdown, MenuButton, Menu, MenuItem, Sheet } from '@mui/joy'
import HomePageDropdown from "./HomePageDropdown";
import { useHomePageContext } from "../Hooks/HomePageContext";
import HomePageModal from "./HomePageModal";
import { CirclePlus } from "lucide-react";

const HomePage = () => {
  const [addAllergenModal, setAddAllergenModal] = useState<boolean>(false)
  const [addFoodTypeModal, setAddFoodTypeModal] = useState<boolean>(false)
  const [addIngredientsModal, setAddIngredientsModal] =useState<boolean>(false)
  const { state, dispatch } = useHomePageContext()

  return (
    <>
      <HomePageModal {...{dispatchType: "Submit Allergen", inputSelections: [<Input placeholder="name" onChange={(event) => dispatch({ type: "Add Allergen", value: event.target.value })} required />], show: addAllergenModal, setShow: setAddAllergenModal}}/>
      <HomePageModal {...{dispatchType: "Submit Food Type", inputSelections: [<Input placeholder="name" onChange={(event) => dispatch({ type: "Add Food Type", value: event.target.value })} required />], show: addFoodTypeModal, setShow: setAddFoodTypeModal}}/>
      <HomePageModal {...{dispatchType: "Submit Ingredient", inputSelections: 
        [<Input placeholder="name" onChange={(event) => dispatch({ type: "Add Ingredient", name: event.target.value })} required />,
          <HomePageDropdown dispatchType={(val)=>({type: "Add Ingredient", allergens: val })}chosen={state.newIngredient?.allergens ?? []} dropdownOptions={state.allergens}  />,
          <HomePageDropdown dispatchType={(val)=>({type: "Add Ingredient", foodTypes: val })} chosen={state.newIngredient?.foodTypes ?? []} dropdownOptions={state.foodTypes}/>
        ], show: addIngredientsModal, setShow: setAddIngredientsModal}}/>

      <Sheet component={"header"} sx={{
        p: 2,
        bgcolor: 'background.surface',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Stack spacing={2} direction={"row"}>
          <h6>Recipes</h6>
          <HomePageDropdown dispatchType={(val)=>({type:"Select Allergens", value: val})} chosen={state.allergen} dropdownOptions={state.allergens} label="Allergens"/>
          <HomePageDropdown dispatchType={(val)=>({type:"Select Food Types", value: val})} chosen={state.foodType} dropdownOptions={state.foodTypes} label="Food Types"/>
          <HomePageDropdown dispatchType={(val)=>({type:"Select Ingredients", value: val})} chosen={state.ingredient} dropdownOptions={state.ingredients} label="Ingredients"/>
        </Stack>
        <Dropdown>
          <MenuButton startDecorator={<CirclePlus />} >Add</MenuButton>
          <Menu>
            <MenuItem key={"add_allergen_modal"}
              onClick={() => setAddAllergenModal(true)}
            >
              Add an allergen
            </MenuItem>
            <MenuItem key={"add_food_type_modal"}
              onClick={() => setAddFoodTypeModal(true)}
            >
              Add a Food Type
            </MenuItem>
            <MenuItem key={"add_ingredients_modal"}
              onClick={() => setAddIngredientsModal(true)}
            >
              Add Ingredients
            </MenuItem>
          </Menu>
        </Dropdown>
      </Sheet>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={12}>
          <Stack direction={"column"} spacing={2}>
            {state.allergens.map((allergenIter, x) =>
              <Card key={`allergenIter_${x}`} orientation="horizontal">
                {allergenIter.name}
              </Card>
            )}

          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage