
import { useContext } from "react"
import "./signin.css"
import {Link} from "react-router-dom"
import { createAuthContext } from "../Context/AuthProvider";
export function Signin(){
  const {LoginUser} = useContext(createAuthContext);
  const btnhandler =()=>{
    LoginUser("samsathya89@gmail.com","samme")
  }

  return(
    <div className="container">
        <div className="signin-card">
            <h2 className="signinheading"> Sign in </h2>
            <label htmlFor="email-input">
              Email Address</label>
              <input id="email-input" type="text" placeholder="test@gmail.com" className="emailpasswordinput"/>
            
            <label htmlFor="password-input">
              Password </label>
              <input id="password-input" type="password" placeholder="*********" className="emailpasswordinput"/>
           
            <button className="login-btn" onClick={btnhandler}> Login with Test Credentials</button>
            <Link to="/signup" className="account"> Create New Account &#x003E;</Link>
        </div>
    </div>
   
   
  )
}