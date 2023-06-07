import { useContext } from "react";
import "./ProfileStyle.css"
import { createProductContext } from "../Context/ProductProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {createAuthContext} from "../Context/AuthProvider"


export function Profile(){
  const {dispatch} = useContext(createProductContext)
  const {user,setUser} = useContext(createAuthContext)
  console.log(user);
  const navigate= useNavigate();
  const handleSignout = ()=>{
    dispatch({type:"log_out",payload:null});
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser();
    navigate("/");
    toast.warning("You have logged out!", {
        position: toast.POSITION.TOP_RIGHT
      });

}
  return(
    <>
      
    <div className="profilemaincontainer">
      <div className="profilecontainer">
        <div className="profiletab">
          <h2 className="ProfileDetails"> Profile Details </h2>
          <ul>
            <li><b>Full Name </b></li>
            <li>{user?.firstName} {user?.lastName}</li>
          </ul>
          <ul>
            <li><b>Email</b></li>
            <li>{user?.email}</li>
          </ul>
          <button className="logoutbtn" onClick={() => handleSignout() }> Log Out </button>
        </div>
      </div>
    </div>
    
    </>
  
  )
}