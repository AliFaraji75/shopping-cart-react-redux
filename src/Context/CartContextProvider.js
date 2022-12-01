
import { useReducer,createContext } from "react";
const initialstate ={
    selectedItem:[],
    itemsCounter:0,
    total:0,
    checkout:false
}
const sumItem =items=>{
    console.log("items",items)
    const itemsCounter = items.reduce((total,product)=>total + product.quantity,0)
    const total =items.reduce((total,product)=> total + product.quantity * product.price,0).toFixed(2)
 // console.log("num",itemsCounter ,"fgfg",total)
    return {itemsCounter , total}
}

const cartReducer =(state,action)=>{
    //console.log(state)
    //console.log("length",state.selectedItem.length)
  switch(action.type){
    case "ADD-ITEM":
        if(!state.selectedItem.find(item =>item.id == action.payload.id))
        {
            state.selectedItem.push({...action.payload,quantity:1})
        }
        return {
            ...state,
            selectedItem:[...state.selectedItem]
            ,...sumItem(state.selectedItem),
            checkout:false
        }
        case "REMOVE-ITEM":
            const newSelectetdItem= state.selectedItem.filter(item=>item.id !== action.payload.id)
            return {
                ...state,selectedItem:[...newSelectetdItem]
                ,...sumItem(newSelectetdItem)
              }

            case "INCRIMENT":
                const indexI = state.selectedItem.findIndex(item =>item.id === action.payload.id)
                state.selectedItem[indexI].quantity++;
                const newSelectetdItemINC =state.selectedItem;
          //      console.log("dec",newSelectetdItemDEC)
                return {
                    ...state
                    ,...sumItem(newSelectetdItemINC)
                     }
                     case "DECRIMENT":
                const indexD = state.selectedItem.findIndex(item =>item.id === action.payload.id)
                state.selectedItem[indexD].quantity--;
                const newSelectetdItemDEC =state.selectedItem;
          //      console.log("dec",newSelectetdItemDEC)
                return {
                    ...state
                    ,...sumItem(newSelectetdItemDEC)
                     }
                     case "CHECKOUT":
                        return {
                            selectedItem:[],
                            itemCounter:0,
                            total:0,
                            checkout:true
                        }
                        case "CLEAR":
                            return {
                                selectedItem:[],
                                itemCounter:0,
                                total:0,
                                checkout:false
                            }
                            default:
                                return state
        }

}
export const  CartContext =createContext()

const CartContextProvider = ({children}) => {
   
 const [state,dispatch]=useReducer(cartReducer,initialstate)
    return ( 
     <CartContext.Provider value={{state,dispatch}}>
        {children}
     </CartContext.Provider>
     );
}
 
export default CartContextProvider;