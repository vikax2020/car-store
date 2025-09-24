const backendRouting = "http://localhost:4567";

const API = {
    LOGIN: {
        url: `${backendRouting}/userLogin`,
        method: "post" 
    },
    SIGNUP: {
        url: `${backendRouting}/userSignup`, 
        method: "post"
    },
    FINDALL :{
        url:`${backendRouting}/findall`,
        method:"get"
    },
    DELETE:{
         url:`${backendRouting}/deleteuser`,
          method:"delete"
    },

     
    VIEW: {
  url: `${backendRouting}/findUserByParms`,
  method: "get"
},
   CREATE_PRODUCT: {
        url: `${backendRouting}/createProduct`,
        method: "post"
    },
    GET_PRODUCTS: {
        url: `${backendRouting}/getProducts`,
        method: "get"
    },


     ADD_TO_CART: {
        url: `${backendRouting}/addToCart`,
        method: "post"
    },
    GET_CART: {
        url: `${backendRouting}/getCart`,
        method: "get"
    },
    UPDATE_CART_QUANTITY: {
        url: `${backendRouting}/updateCartQuantity`,
        method: "put"
    },

    DELETE_SINGLE_ITEM: {
        url: `${backendRouting}/deleteSingleCartItem`,
        method: "delete"
    },
    DELETE_ALL_ITEM: {
        url: `${backendRouting}/deleteAllItems`,
        method: "delete"
    },
   
};




export default API;
