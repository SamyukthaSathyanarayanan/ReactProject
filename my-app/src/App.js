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
function App() {   
  return (
    <div className="App">
      <NavBar/>
      <Link to="/"> </Link>
      <Link to="/productlisting"></Link>
      <Link to="/signin"></Link>  
      <Link to="/signup"></Link>
      <Link to="/profile"></Link>

      <Routes>
        <Route path="/mockman" element={<MockAPI/>}/>
        <Route path="/" element={<Home/>} />
        <Route path="/productlisting" element={<ProductListing/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<WishList/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/individualpage/:productId" element={<IndividualPage />} />
      </Routes>
      
    </div>
  );
}

export default App;


// import "./App.css";
// import { Routes, Route, Link } from "react-router-dom";
// import { Home } from "./Pages/Home";
// import { Signin } from "./Pages/Signin";
// import { Signup } from "./Pages/Signup";
// import { ProductListing } from "./Pages/ProductListing";
// import { NavBar } from "./Pages/NavBar";
// import { Cart } from "./Pages/Cart";
// import { WishList } from "./Pages/WishList";
// import { Profile } from "./Pages/Profile";
// import MockAPI from "./MockAPI";
// import { IndividualPage } from "./Pages/IndividualPage";
// import { AuthProvider } from "./Context/AuthProvider";
// import { ProductProvider } from "./Context/ProductProvider";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Link to="/"> </Link>
//       <Link to="/productlisting"></Link>
//       <Link to="/signin"></Link>
//       <Link to="/signup"></Link>
//       <Link to="/profile"></Link>

//       <Routes>
//         <Route path="/mockman" element={<MockAPI />} />
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/productlisting"
//           element={
//             <ProductProvider>
//               <ProductListing />
//             </ProductProvider>
//           }
//         />
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/wishlist" element={<WishList />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/individualpage/:productId" element={<IndividualPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
