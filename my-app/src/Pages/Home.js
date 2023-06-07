import "./HomeStyle.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createProductContext } from "../Context/ProductProvider";

export function Home() {
  const navigate = useNavigate();
  const {dispatch} = useContext(createProductContext)
  const handlecategory=(category)=>{
    dispatch({type:"category",payload:category})
    navigate("/productlisting");
  }
  return (
    <>
      <div className="imgcontainer">
        <div className="text-overlay">
          <h3 class="welcome">Welcome to Booktopia,</h3>
          <h1 class="read">Embrace the Joy <span className="line-break">of Reading</span></h1>
          <Link to="/productlisting" className="shop-today">Shop Today</Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="loadingimage"
          className="headerimg"
        />
      </div>
      <section className="sectioncategory">
        <div className="headingcontentcategory">
          <h2>Choose your preferred category now</h2>
          <p>Explore a wide variety of book categories at Booktopia</p>
        </div>
        <div className="categories">
          <button onClick={()=>handlecategory("fiction")} className="categorybtn">
            <div className="fiction">  
              <h3>Fiction</h3>
              <p>Immerse yourself in captivating stories, vibrant worlds, and imaginative narratives with our exceptional collection.</p>
            </div>
          </button>
          <button  onClick={()=>handlecategory("non-fiction")} className="categorybtn">
            <div className="non-fiction">  
            <h3>Fantasy</h3>
            <p>Embark on extraordinary journeys, explore mythical realms, and immerse yourself in enchanting tales with our captivating collection of fantasy books.</p>
            </div>
          </button>
          <button  onClick={()=>handlecategory("biography")} className="categorybtn">
            <div className="biography">  
              <h3>Biography</h3>
              <p>Embark on extraordinary journeys, be inspired by remarkable lives, and delve into the depths of human experiences with our compelling selection.</p>
            </div>
          </button>
        </div>

        
      </section>
    <div className="footer">
      <ul>
              <li>
                <Link to="https://github.com/SamyukthaSathyanarayanan" target="_blank" className="icon-link">
                <i class="fa-brands fa-github"></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/in/samyuktha-sathyanarayanan/" target="_blank"  className="icon-link">
                <i class="fa-brands fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/samyuktha.sathyanarayanan" target="_blank"  className="icon-link">
                <i class="fa-brands fa-facebook"></i>
                </Link>
              </li>
      </ul>
      <p> <i class="fa-sharp fa-regular fa-copyright"></i> No Copyright, Feel free to replicate.</p>
      
    </div>
    </>
  );
}
