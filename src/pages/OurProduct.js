import React from 'react';
import ProductList from '../components/ProductList';
import MyButton from '../components/MyButton';
import { Link,useParams,useHistory} from 'react-router-dom';


export default function OurProduct() {
   const {productsType}=useParams();
   console.log(useParams())
  let location=useHistory();
    console.log(location)
    return (
        <div>

           <ProductList klasaime={'dress-container'} productsType={{productsType}} />
           
            <Link  className='btn-link' path to='/' ><MyButton gumbtekst={'Back'}variant={'primary'}></MyButton></Link>
           
        </div>
    )
}
