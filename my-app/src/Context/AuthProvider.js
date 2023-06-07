import axios from "axios";
import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const createAuthContext = createContext();
export function AuthProvider({children}){
  const navigate= useNavigate();
  const location = useLocation();
  const localStorageUser =  JSON.parse(localStorage.getItem("user"));
  const [user,setUser] = useState(localStorageUser?.user);
  console.log(user);
  const LoginUser = async (email,password) => {
    try{
      const {data} = await axios.post("/api/auth/login",{email,password})
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user",  JSON.stringify({ user: data.foundUser }));
      setUser(data.foundUser);
      (location?.state===null)?navigate("/productListing"):navigate(location?.state?.from?.pathname);
       
    } catch(error) {
      console.error("error")
    }
  }

  return(
    <>
    <createAuthContext.Provider value={{LoginUser,user,setUser}}>
      {children}
    </createAuthContext.Provider>
    </>
  )
}