const API_URL = import.meta.env.VITE_API_URL

export const Api ={
    signup: async(body: User):Promise<string>=>{
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
    }
}

export interface User{
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