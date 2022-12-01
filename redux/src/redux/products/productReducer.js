 const initialState ={
    isLoading:false,
    products:[],
    error:''
 }

const productsReducer =(state=initialState,action)=>{
    switch (action.type) {
        case "FETCH-PRODUCTAS-REQUEST":
            return{
                ...state,
                isLoading:true,
            }
        case "FETCH-PRODUCTAS-SUCCESS":
                return{
                     ...state,
                    isLoading:false,
                    products:action.payload
                }
        case "FETCH-PRODUCTAS-FAILURE":
                    return{
                         ...state,
                        isLoading:false,
                         error:action.payload
                    }
             default: return state   
            
    }

}
export  default productsReducer;