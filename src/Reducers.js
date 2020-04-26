const addProduct= product=>{
    connsole.log('add item', item);
    const updateCart=[...cart];
    const updateItemIndex= updateCart.findIndex(
        item=>item.id===product.id
    )
}