const  initialState ={
    selectedItem:[],
    itemsCounter:0,
    total:0,
    checkout:false
}


const sumItem =items=>{
    const itemsCounter = items.reduce((total,product)=>total + product.quantity,0)
    const total =items.reduce((total,product)=> total + product.quantity * product.price,0).toFixed(2)
    return {itemsCounter , total}
}

 const cartReducer =(state=initialState,action)=>{

switch (action.type){
    case "ADDCART":
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
    case "INCREASE":
        const indexI = state.selectedItem.findIndex(item =>item.id === action.payload.id)
        state.selectedItem[indexI].quantity++;
        const newSelectetdItemINC =state.selectedItem;
        return {
            ...state
            ,...sumItem(newSelectetdItemINC)
             }
   case "DECREASE":
    const indexD = state.selectedItem.findIndex(item =>item.id === action.payload.id)
    state.selectedItem[indexD].quantity--;
    const newSelectetdItemDEC =state.selectedItem;
    return {
        ...state
        ,...sumItem(newSelectetdItemDEC)
         }
    case "REMOVE":
        const newSelectetdItem= state.selectedItem.filter(item=>item.id !== action.payload.id)
        return {
            ...state,selectedItem:[...newSelectetdItem]
            ,...sumItem(newSelectetdItem)
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
export default cartReducer;