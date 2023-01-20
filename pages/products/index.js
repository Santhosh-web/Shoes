import React, {  useState } from 'react';

import { client } from '../../lib/client';
import { Product} from '../../components';



const Home = ({ products}) => {
const[product,setProduct] = useState(products);
const[data,setData] = useState(products)


const handleFilter = (item)=>{

if(item === 'Kids'){
 
  var kid = data.filter((it)=>it.price<3500)
 setProduct(kid)

}
else if(item === 'Men'){

  setProduct(data.filter((it)=> it.price >=3500 && it.price <=5000))
 
}
else if(item === 'Gym'){
  
  setProduct(data.filter((it)=>it.price>=5000 && it.price<=6000))
  
}
else if(item === 'Sports'){
  
    setProduct(data.filter((it)=>it.price>6000))
    
  }
else{
  setProduct(data)
}
}

return(
  <div>
   

    
    <div className="products-heading" id='product'>
      <h2>Best Seller Products</h2>
      <p>Shoes There are many variations passages</p>
      <div className="filter">
      {['All','Kids','Men','Gym','Sports'].map((item,index)=>(
        <button onClick={()=>handleFilter(item)} key={index} className={`${index === item && 'active'} `}>{item}</button>
      ))}
      
    </div>
  
    </div>

    <div className="products-container" >
   { product?.map((product) => <Product key={product._id} product={product} />)}
</div>
    
  </div>
)
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

 
  return {
    props: { products}
  }
}

export default Home;
