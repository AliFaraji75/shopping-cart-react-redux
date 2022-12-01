const increase =(id)=>{
    return{
        type:"INCREASE",
        payload:id
    }
}
const decrease =(id)=>{
    return{
        type:"DECREASE",
        payload:id
    }
}
const remove =(id)=>{
    return{
        type:"REMOVE",
        payload:id
    }
}
const addCart =(product)=>{
    return{
        type:"ADDCART",
        payload:product
    }
}
const checkOut =()=>{
    return{
        type:"CHECKOUT",
    }
}
const clear =()=>{
    return{
        type:"CLEAR",
    }
}

export {increase,decrease,remove,checkOut,clear,addCart}