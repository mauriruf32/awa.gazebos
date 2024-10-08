import axios from "axios";

import { URL } from "../config.js";
import { gazebos } from "../utils/dummyData.js";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_USERS = "GET_USERS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const FILTER_BY_MATERIAL = "FILTER_BY_MATERIAL";
export const FILTER_BY_COLOR = "FILTER_BY_COLOR";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const POST_PRODUCT = "POST_PRODUCT";
export const LOGIN_USER = "LOGIN_USER";
export const POST_IMAGES = "POST_IMAGES";
export const GET_IMAGES = "GET_IMAGES";

// const URL = process.env.URL || 'https://awa-gazebos.vercel.app';
// const URL = process.env.URL || 'http://localhost:3001';



// export function getProducts(){
//     return async function(dispatch){
//         const response = await axios.get(`${URL}/products`);
//          dispatch ({
//             type: "GET_PRODUCTS",
//             payload: response.data
//         });
//     };
// }

export function getProducts(){
    return async function(dispatch){
        // const response = await axios.get(`${URL}/products`);
         dispatch ({
            type: "GET_PRODUCTS",
            payload: gazebos
        });
    };
}

export function getProductById(id){
    return async function (dispatch) {
        // const response = await axios.get(
        //     `${URL}/products/${id}`
        // );
         dispatch({
            type: "GET_PRODUCT_BY_ID", 
            payload: gazebos
        });
    };
}

// export function getProductByName(name){
//     return async function (dispatch){
//         // const response = await axios.get(
//         //     `${URL}/products/?name=${name}`
//         // );
//          dispatch({
//             type: "GET_PRODUCT_BY_NAME",
//             payload: gazebos
//         });
//     };
// }


//FUNCION PARA BUSCAR EN DUMMYDATA
export function getProductByName(name) {
    return function (dispatch) {
      // Filtrar los pructos por nombre
      const foundProduct = gazebos.filter(product =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
      dispatch({
        type: "GET_PRODUCT_BY_NAME",
        payload: foundProduct
      });
    };
  }


//FUNCION PARA BUSCAR EN LA API

// export function getProductByName(name) {
//     return async function (dispatch) {
//         const response = await axios.get(`${URL}/products/?name=${name}`);
//         dispatch({
//             type: "GET_PRODUCT_BY_NAME",
//             payload: response.data
//         });
//         return response.data; 
//     };
// }


export function postImages(data){
    return async function (dispatch){
            const response = await axios.post(`${URL}/images`, data)
            return dispatch({
                type: "POST_IMAGES",
                payload: response.data
            })
        }
    }

export function getImages(){
return async function (dispatch){
    const response = await axios.get(`${URL}/images`);
    dispatch ({
        type: "GET_IMAGES",
        payload: response.data
    });
};
}

export function getUserById(id){
    return async function (dispatch){
        const response = await axios.get(
            `${URL}/users/${id}`
        );
        return dispatch({
            type: "GET_USER_BY_ID",
            payload: response.data
        });
    };
}

export function getUsers(){
    return async function(dispatch){
        const response = await axios.get(`${URL}/users`);
         dispatch ({
            type: "GET_USERS",
            payload: response.data
        });
    };
}

export function postProduct(data){
    return async function (dispatch){
            const response = await axios.post(`${URL}/products`, data)
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
          type: "LOGIN_USER",
          payload: LoginUser,
        };
      };