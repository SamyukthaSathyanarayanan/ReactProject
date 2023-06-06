import { Link, useNavigate } from "react-router-dom";
import "./NavBarStyle.css"
import { useContext } from "react";
import { createProductContext } from "../Context/ProductProvider";

export function NavBar(){
  const navigate = useNavigate();
  const {productState,dispatch} = useContext(createProductContext)
  const searchHandler = (event)=>{
    dispatch({type:"searchByText",payload:event.target.value});
    navigate("/productlisting");
  }
  return(
    <>
      <div className="navbar">
        <div className="Leftnav">
          <Link to="/" className="icon-link">Booktopia</Link> 
        </div>
        <div className="Centernav">
        <input type="text" placeholder="search book name" 
                onChange={(event)=>searchHandler(event)}/>
        </div>
        <div className="Rightnav">
          <ul>
            <li>
              <Link to="/wishlist" className="icon-link" title="Wishlist">
                <i className="fa-regular fa-heart"></i>
                <span className="badge">{productState.wishList.length}</span>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="icon-link" title="Cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="badge">{productState.cartList.length}</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="icon-link" title="Profile">
                <i className="fa-regular fa-user"></i>
              </Link>
            </li>
          </ul>
       </div>
      </div>

    </>
  )
}

