import { FILTER_BY_COLOR, GET_PRODUCTS, GET_PRODUCT_BY_ID, 
     GET_PRODUCT_BY_NAME, FILTER_BY_MATERIAL, ORDER_BY_PRICE} from "./actions";

const initialState = {
    allProducts: [],
    productsFilter: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, 
                allProducts: action.payload,
                productsFilter: action.payload
            };

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
                    case "alphabetA":
                        return x.name.localeCompare(y.name);
                    case "alphabetZ":
                        return y.name.localeCompare(x.name);
                    case "lowerPopulation":
                        return x.population - y.population;
                    case "higherPopulation":
                        return y.population - x.population;
                }
            })
            return {
                  ...state,
                  allProducts: orderProducts,
                };

        case FILTER_BY_COLOR:
            const byColor = state.allProducts.filter((product) => action.payload.includes(product.color))
            return {
                 ...state,
                 allProducts: byColor,
            };

        case FILTER_BY_MATERIAL:
            const materialFilter = 
            action.payload !== 'all' 
            ? state.materials.filter(material => material.material === action.payload) 
            : state.materials 

      let productos= materialFilter[0].allProducts;

      let productsMat =
            materialFilter=== state.activities
            ? state.allProducts
            : state.allProducts.filter(productA => productos.includes(productA.id)) 
                
        return { ...state, products: productsMat };

        // case POST_PRODUCT:{
        //     return {
        //         ...state,
        //         activities: [...state.activities, action.payload]
        //         }
        //     }

        // case GET_ACTIVITIES:{
        //     return {
        //             ...state,
        //             activities: action.payload
        //         }
        //       }


        default:
            return state;
    }
};

export default rootReducer;