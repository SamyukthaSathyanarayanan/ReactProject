  import { createContext, useEffect, useReducer } from "react";

  export const createProductContext = createContext();

  const ReducerFunction = (state, action) => {
    switch (action.type) {
      case "initialLoad":
        return { ...state, productList: action.payload, isLoading: false };
      case "sort":
        return { ...state, sort: action.payload };
      case "cart":
        return { ...state, cartList: action.payload };
      case "wishlist":
        return { ...state, wishList: action.payload };
      case "rating":
        return { ...state, selectedRating: action.payload };
      case "category":
        let newCat=[];
            if(state.selectedCategory?.find(element=>element===action.payload.currentCat)){
                if(action.payload.page==="landing")
                {
                   newCat = state.selectedCategory
                }
                else{
                    newCat = state.selectedCategory.filter(value=>value!==action.payload.currentCat)
                }
            }
            else{
                newCat = [...state.selectedCategory,action.payload.currentCat];
            }
            return {...state,selectedCategory:newCat};
      case "searchByText":
          return {...state,searchText:action.payload};
      case "priceFilter":
        return {...state,priceRange:Number(action.payload)}
      case "clearFilter":
        return {...state,selectedCategory:[],priceRange:5000,selectedRating:null, sort:"",searchText:""}
      
      default:
        return state;
    }
  };

  export function ProductProvider({ children }) {
    const [productState, dispatch] = useReducer(ReducerFunction, {
      productList: [],
      sort: "",
      cartList: [],
      wishList: [],
      searchText:"",
      selectedRating: 0,
      selectedCategory:[],
      isLoading: true,
      priceRange: 1000,
    });
    const handleData = async () => {
      const res = await fetch("/api/products");
      const responseJson = await res.json();
      const productsDisplay = responseJson.products;
      dispatch({ type: "initialLoad", payload: productsDisplay });
    };

    useEffect(() => {
      setTimeout(() => {
        handleData();
      }, 2000);
    }, []);

    return (
      <createProductContext.Provider value={{ productState, dispatch }}>
        {productState.isLoading ? (
          <div className="loading-container">
          <img src="https://media.tenor.com/n4w0VzWFbtgAAAAM/loading.gif" alt="Loading" className="loading-gif" width="100%" height="645px"/>
        </div>
        ) : (
          children
        )}
      </createProductContext.Provider>
    );
  }
