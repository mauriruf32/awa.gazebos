import { gazebos } from "../utils/dummyData";

import { GET_PRODUCTS, 
    GET_PRODUCT_BY_ID,
    GET_PRODUCT_BY_NAME, 
    FILTER_BY_MATERIAL, 
    ORDER_BY_PRICE, 
    POST_PRODUCT, 
    LOGIN_USER, 
    FILTER_BY_COLOR, 
    POST_IMAGES, 
    GET_IMAGES, 
    GET_USERS,
    GET_USER_BY_ID } from "./actions";

const initialState = {
    allProducts: [],
    materialFilter: [],
    userData: null,
    images: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, 
                allProducts: action.payload,
                productsFilter: action.payload
            };

        case GET_IMAGES:
            return {
            ...state,
            images: action.payload
        }

        case LOGIN_USER:
            return { ...state, userData: action.payload };

        case GET_PRODUCT_BY_ID:
            return { ...state, 
                allProducts: action.payload, 
            };

        case GET_PRODUCT_BY_NAME:
            return { ...state, 
                allProducts: action.payload, 
                };
                
        case ORDER_BY_PRICE:
            const orderProducts = state.allProducts.sort((x,y) => {
                switch (action.payload){

                    case "desc":
                        return x.price - y.price;
                    case "asc":
                        return y.price - x.price;
                }
            })
            return {
                  ...state,
                  allProducts: orderProducts,
                };

        case FILTER_BY_MATERIAL:
            const byMaterial =
            state.allProducts.filter((product) => action.payload.includes(product.material))
            return {
                 ...state,
                 allProducts: byMaterial,
            };
            case FILTER_BY_COLOR:
                const byColor =
                state.allProducts.filter((product) => action.payload.includes(product.color))
                return {
                     ...state,
                     allProducts: byColor,
                };

    //     case FILTER_BY_MATERIAL:
    //         const materiales = 
    //         action.payload !== 'all' 
    //         ? state.materialFilter.filter(material => material.material === action.payload) 
    //         : state.materialFilter 

    //   let productos = materiales[0].allProducts;

    //   let productsMat =
    //   materiales=== state.materialFilter
    //         ? state.materiales
    //         : state.materiales.filter(productA => productos.includes(productA.id)) 
                
    //     return { ...state, materiales: productsMat };

        case POST_PRODUCT:{
            return {
                ...state,
                allProducts: [...state.allProducts, action.payload]
                }
            }
        
        case POST_IMAGES:{
                return {
                    ...state,
                    images: [...state.images, action.payload]
                }
            }

        case GET_USERS:{
            return {
                    ...state,
                    userData: action.payload
                }
              }

        case GET_USER_BY_ID:{
            return {
                    ...state,
                    userData: action.payload
                }
            }


        default:
            return state;
    }
};

export default rootReducer;