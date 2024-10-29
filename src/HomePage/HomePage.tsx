import { useEffect, useState } from "react"
import { Allergen } from "../types/Allergen";
import { Api } from "../Router/Api";

const HomePage = () => {
  const [allergens, getAllergens] = useState<Allergen[]>([])
  useEffect(()=>{
    Api.allergens().then(resp=>getAllergens(resp))
  },[])
  return <>{allergens.map(allergen => <>{allergen.name}</>)}</>
}

export default HomePage