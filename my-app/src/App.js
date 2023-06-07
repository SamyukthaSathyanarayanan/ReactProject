import "./App.css";
import {Routes,Route,Link} from "react-router-dom";
import {Home} from "./Pages/Home"
import {Signin} from "./Pages/Signin"
import { Signup } from "./Pages/Signup";
import { ProductListing } from "./Pages/ProductListing";
import { NavBar } from "./Pages/NavBar";
import {Cart} from "./Pages/Cart";
import {WishList} from "./Pages/WishList";
import {Profile} from "./Pages/Profile";
import MockAPI from "./MockAPI";
import { IndividualPage } from "./Pages/IndividualPage";
import { Checkout } from "./Pages/Checkout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {RequiresAuth} from "./Context/RequiresAuth"

function App() {   
  return (
    <div className="App">
      <NavBar/>
      <ToastContainer autoClose={1000}/>

      <Routes>
        <Route path="/mockman" element={<MockAPI/>}/>
        <Route path="/" element={<Home/>} />
        <Route path="/productlisting" element={<ProductListing/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/cart"  element={
        <RequiresAuth>
          <Cart/>
        </RequiresAuth>} />

        <Route path="/wishlist" element= {
        <RequiresAuth>
          <WishList/>
        </RequiresAuth>} />
        
        <Route path="/profile" element={ 
        <RequiresAuth>
          <Profile />
        </RequiresAuth>} />
        <Route path="/individualpage/:productId" element={<IndividualPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      
    </div>
  );
}

export default App;

