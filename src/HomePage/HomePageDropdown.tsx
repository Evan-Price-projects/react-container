import { FormControl, FormLabel, Option, Select } from "@mui/joy";
import { useHomePageContext } from "../Hooks/HomePageContext";
import { FoodType } from "../types/FoodType";
import { Allergen } from "../types/Allergen";
import { Ingredient } from "../types/Ingredient";
import { Action } from "../types/HomePageAction";

interface HomePageDropdownProps {
  dispatchType: (val: number[]) => Action
  chosen: FoodType[] | Allergen[] | Ingredient[]
  dropdownOptions: FoodType[] | Allergen[] | Ingredient[]
  label?: string
}

const HomePageDropdown = ({ dispatchType, chosen, dropdownOptions, label }: HomePageDropdownProps) => {
  const { dispatch } = useHomePageContext()

  return (
    <FormControl>
      <FormLabel htmlFor={`select_homepage_dropdown_${dispatchType}`}>
        {label}
      </FormLabel>
      <Select
        multiple
        required
        slotProps={{
          button: {
            id: `select_homepage_dropdown_${dispatchType}`
          }
        }}
        value={chosen.map(x => x.id!) ?? []}
        onChange={(_, val: number[]) => {
          dispatch(dispatchType(val.length == 0 ? [] : val))

        }}
        placeholder="select an option"
      >
        {dropdownOptions.map((stateItem) => (
          <Option
            key={stateItem.id}
            value={stateItem.id}
          >
            {stateItem.name}
          </Option>
        ))}
      </Select>
    </FormControl>
  )
}
export default HomePageDropdown;