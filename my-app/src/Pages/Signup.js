import "./SignupStyle.css"
import {Link} from "react-router-dom"
export function Signup(){
  return(
    <div className="container">
        <div className="signin-card">
            <h2 className="signinheading"> Sign Up </h2>
            <div className="nameinput">
              <div className="firstname">
                <label >First Name</label>
                <input type="text" placeholder="test" class="adjust-input-width" />
              </div>
              <div className="lastname">
                <label >Last Name</label>
                <input type="text" placeholder="Admin" class="adjust-input-width" />
              </div>
                
            </div>
            <label htmlFor="email-input">
              Email Address</label>
              <input id="email-input" type="text" placeholder="test@gmail.com" className="emailpasswordinput"/>
            
            <label htmlFor="password-input">
              Password </label>
              <input id="password-input" type="password" placeholder="*********" className="emailpasswordinput"/>
           
            <button className="login-btn"> Create a new account </button>
            <Link to="/signin" className="account"> Already have an account&#x003E;</Link>
        </div>
    </div>
   
   
  )
}