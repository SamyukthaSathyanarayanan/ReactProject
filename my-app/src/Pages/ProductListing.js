  import { useContext } from "react";
  import { createProductContext } from "../Context/ProductProvider";
  import './ProductListingStyle.css';
  import { addToCartHandler } from "../services/CartService";
  import { addToWishListHandler } from "../services/WishListService";
  import { Link } from "react-router-dom";
  import { toast } from "react-toastify";
  export function ProductListing(){
    const {productState, dispatch} = useContext(createProductContext)

    let sortedData =productState.productList


    if (productState.sort === "asc") {
      sortedData = [...productState.productList].sort((a, b) => a.price - b.price);
    }
    if (productState.sort === "dec") {
      sortedData = [...productState.productList].sort((a, b) => b.price - a.price);
    }
    sortedData = sortedData.filter(({price})=>price<=productState.priceRange);

    if (productState.selectedRating > 0) {
      sortedData = sortedData.filter((prod) => prod.rating >= productState.selectedRating);
    }


    const newData = productState.selectedCategory?.reduce((initVal,current)=>{
      const booksData = productState.productList?.filter(({categoryName})=>categoryName===current)
      return [...initVal,...booksData]
    },[])
    if(newData?.length>0)
    {

        sortedData=newData;
    }
    if(productState.searchText!=="")
    {
      sortedData = 
      sortedData.filter(({title})=>title.toLowerCase().includes(productState.searchText.toLowerCase()));
        
    }
      const handleRadioHTL = () => {
        dispatch({ type: "sort", payload: "dec" });
      };
    
      const handleRadioLTH = () => {
        dispatch({ type: "sort", payload: "asc" });
      };

      const handleRatingFilter = (rating) => {
        dispatch({ type: "rating", payload: rating });
      };
      const handleCategoryFilter = (category) => {
        dispatch({ type: "category", payload: category });
      };

      const clearFilters = () => {
        dispatch({ type: "clearFilter", payload: "" });
      };


    const token =  localStorage.getItem("token");

    
  const addToCart = (product) => {
    addToCartHandler(token, product, dispatch); 
    toast.success("Book Added to Cart!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const addToWishList = (product) => {
    addToWishListHandler(token, product, dispatch); 
    toast.success("Book Added to Wishlist!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };


    return(
      <div style={{display:"flex"}}>
        
        <div className="leftFilter">   
          <div className="filterclear">
            <h3> Filters</h3>
            <h3 className="clear" onClick={clearFilters} > Clear</h3>
          </div>
         
          <div class="pricefilter">
            <h3 className="priceName">Price</h3>
            <div className="priceValues">
              <p>500</p>
              <p>2000</p>
              <p>4000</p>
            </div>
            <input type="range" min="500" max="4000" onChange={(event)=>dispatch({type:"priceFilter",payload:event.target.value})} 
            value={productState.priceRange}/>
  
          </div>
          <h3> Category</h3>
          <label>
            <input checked={productState.selectedCategory?.includes("fiction")} type="checkbox" value="fiction" onChange={() => handleCategoryFilter("fiction")}/>
            Fiction
          </label>
          <label>
            <input checked={productState.selectedCategory?.includes("fantacy")} type="checkbox" value="fantacy" onChange={() => handleCategoryFilter("fantacy")} />
            Fantacy
          </label>
          <label>
            <input checked={productState.selectedCategory?.includes("biography")} type="checkbox" value="biography" onChange={() =>handleCategoryFilter("biography")}/>
            Biography
          </label>

          <h3>Rating</h3>
          <label>
            <input checked={productState.selectedRating===1} type="radio" name="rating" onClick={() => handleRatingFilter(1)}/>
            1 star & above
          </label>
          <label>
            <input checked={productState.selectedRating===2} type="radio" name="rating"  onClick={() => handleRatingFilter(2)}/>
            2 stars & above
          </label>
          <label>
            <input  checked={productState.selectedRating===3} type="radio" name="rating"  onClick={() => handleRatingFilter(3)}/>
            3 stars & above
          </label>
          <label>
            <input checked={productState.selectedRating===4} type="radio" name="rating" onClick={() => handleRatingFilter(4)}/>
            4 stars & above
          </label>

          <h3>Sort By</h3>
          <label>
            <input checked={productState.sort==="asc"} type="radio" name="sort"  onChange={handleRadioLTH}/>
            Price - Low to High
          </label>
          <label>
            <input checked={productState.sort==="dec"} type="radio" name="sort" onChange={handleRadioHTL} />
            Price - High to Low
          </label>
        </div>

        <div>
          <h3 className="headingShowProducts">Showing All Products ({sortedData.length} products)</h3>
          <ul className="ulList">
              {sortedData?.map((prods)=>
                <li key={prods._id}>
                  <div className="cardContainer">
                    <div className="imgContainer">
                    <Link to={`/individualpage/${prods._id}`}><img src={prods.image} alt="loadingimg" className="cardImg"/>  </Link>
                    </div>
                    <span className="wishlistheart"><i className="fa-regular fa-heart" onClick={()=>addToWishList(prods)}/> </span>

                    <div className="carddetails">
                    <div className="cardcontentrating">
                      <div className="cardContent">
                        <p className="cardTitle"> {prods.title} </p>
                        <p className="cardAuthor"> {prods.author} </p>
                        <p className="cardPrice"> <b>₹ {prods.price}</b> </p>
                      </div>
                      <div className="ratingright">
                        <span className="ratingstar">{prods.rating} <i class="fa-solid fa-star"></i> </span>
                      </div>
                    </div>
                    </div>
                      {/* <button className="cardButton" onClick={()=>addToCartHandler(token, prods, dispatch)}> Add to Cart</button> */}
                      {/* <button className="cardButton" onClick={()=>addToCart(prods)}> Add to Cart</button> */}
                      {productState.cartList.find((item) => item._id === prods._id) ? (
                      <button disabled className="cardButton disabled">Added to Cart</button>
                    ) : (
                      <button className="cardButton" onClick={() => addToCart(prods)}>Add to Cart</button>
                    )}

                     
                    
                  </div>
                  
                </li>
              )}
          
      
          </ul> 
        </div>
    
      </div>
    )
  }