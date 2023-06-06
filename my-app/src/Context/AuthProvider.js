import axios from "axios";
import { createContext } from "react";

export const createAuthContext = createContext();
export function AuthProvider({children}){
  console.log(localStorage.getItem("token"))
  const LoginUser = async (email,password) => {
    try{
      const {data} = await axios.post("/api/auth/login",{email,password})
      // console.log(data)
      localStorage.setItem("token", data.encodedToken);
       
    } catch(error) {
      console.error("error")
    }
  }

  return(
    <>
    <createAuthContext.Provider value={{LoginUser}}>
      {children}
    </createAuthContext.Provider>
    </>
  )
}