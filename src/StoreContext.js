import React ,{useState,useEffect} from 'react'
import {storeProducts} from './data'



export const StoreContext = React.createContext();



// ***GET DATA 
export const StoreProvider=(props)=> {
   const [state, setstate] = useState([]);
    useEffect(() => {
       transferdata()
    },[setstate])
    const transferdata=()=>{
       let data=[]
       storeProducts.forEach(item=>{
           const singleItem= {...item};
             data=[...data,singleItem];
       })  
      //  *PICK DATA IN STATE
        setstate(data)
    }

  const [cart, setcart] = useState([]);
 
  // ***ADD PRODUCT
  const addtoCart=(Item)=>{
   const updatedCart=[...cart];
   console.log('odvijam se')
   let lenght= updatedCart.length;
     let checkIn=updatedCart.find(artikl=>{
     return( artikl.id===Item.id & artikl.size===Item.size)
   })
   if (checkIn===undefined){
     
      updatedCart.push({...Item,cart:1})
      setcart(updatedCart)
      
    }
    else (checkIn.cart++)
   }
// ***END -ADD PRODUCT

   // ***DELETE PRODUCT
   const deletetoCart=(Item)=>{
      const updatedCart=[...cart];
     
      Item.cart--

      // LOOP FOR CHECHKING QUANTITI OF PRODUCTS
      if(Item.cart<1){
        const filteredCart= updatedCart.filter(artikl=>artikl.id !== Item.id || artikl.size!==Item.size);
        setcart(filteredCart);
      }
      else(console.log(Item.cart,'smanjeno'))
   }
   // ***END -DELETE PRODUCT
  
    return (
       <StoreContext.Provider value={{value:[state,setstate],cart:[cart,setcart],addtoCart:addtoCart,deletetoCart:deletetoCart }}>
           {props.children}
       </StoreContext.Provider>
    
    )

 
    }
