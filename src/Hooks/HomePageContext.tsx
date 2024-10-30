import { createContext, useContext } from "react";
import { HomePageProps } from "./HomePageProvider";

export const HomePageContext = createContext<HomePageProps | undefined>(undefined);

export const useHomePageContext = () => {
    const HomePageContextProps = useContext(HomePageContext);
    if (!HomePageContextProps) {
        throw Error("homePage context doesn't work here")
    }
    return HomePageContextProps
}