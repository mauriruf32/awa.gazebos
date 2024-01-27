import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const FILTER_BY_MATERIAL = "FILTER_BY_MATERIAL";
// export const FILTER_BY_COLOR = "FILTER_BY_COLOR";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const GET_USERS_BY_ID = "GET_USERS_BY_ID";
export const POST_PRODUCT = "POST_PRODUCT";
export const LOGIN_USER = "LOGIN_USER";


export function getProducts(){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/products`);
         dispatch ({
            type: "GET_PRODUCTS",
            payload: response.data
        });
    };
}

export function getProductById(id){
    return async function (dispatch) {
        const response = await axios.get(
            `http://localhost:3001/products/${id}`
        );
         dispatch({
            type: "GET_PRODUCT_BY_ID", 
            payload: response.data
        });
    };
}

export function getProductByName(name){
    return async function (dispatch){
        const response = await axios.get(
            `http://localhost:3001/products/?name=${name}`
        );
         dispatch({
            type: "GET_PRODUCT_BY_NAME",
            payload: response.data
        });
    };
}

export function getUsersById(id){
    return async function (dispatch){
        const response = await axios.get(
            `http://localhost:3001/users/${id}`
        );
        return dispatch({
            type: "GET_USERS_BY_ID",
            payload: response.data
        });
    };
}

export function postProduct(data){
    return async function (dispatch){
            const response = await axios.post('http://localhost:3001/products', data)
            return dispatch({
                type: "POST_PRODUCT",
                payload: response.data
            })
        }
    }    

export function filterProductsByMaterial(material) {
    return{
        type: "FILTER_BY_MATERIAL",
        payload: material,
    };
};

export function orderProductsByPrice(order) {
    return {
      type: "ORDER_BY_PRICE",
      payload: order
    };
  };
  
  export function filterProductsByColor(color) {
      return {
        type: "FILTER_BY_COLOR",
        payload: color,
      };
    };

    export const LoginUser = (LoginUser) => {
        return {
          type: LOGIN_USER,
          payload: LoginUser,
        };
      };