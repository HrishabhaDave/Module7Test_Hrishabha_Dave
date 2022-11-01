import './productlist.css';
import React from 'react';
import { useEffect } from 'react';
import Star from '../Assets/Star 1.png'

function ProductList() {
const [count, setCardCount] = React.useState(0)
const [userID, setUserID] = React.useState()
const userid=[]

useEffect(()=>{
  fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
  .then(response => response.json())
  .then(data =>{
    for(const d in data)
    {
      userid.push(data[d])
    }
    setUserID(userid);
  })
},[])

  return (
    <div>
      <h3 className='heading'>Products</h3>
      <div className='product-list'>
      {
        userID && userID.map(id=>{
          return <div className='individual-product'>
              <div className='product-image'>
                <img src={id.productImage}/>
              </div>
              <div className='product-name'>
                {id.productName}
              </div>
              <div className='product-stars'>
                <div className='stars'>
                  <img src={Star}/>
                  <img src={Star}/>
                  <img src={Star}/>
                  <img src={Star}/>
                  <img src={Star}/>
                </div>
                <div className='price-footer'>
                  <div className='old-price'>
                    {id.oldPrice}/- 
                  </div>
                  <div className='new-price'>
                  {id.newPrice}/-
                  </div>
                </div>
              </div>
              
              <div className='item-footer-btn'>
                <button onClick={()=>setCardCount(count+1)} className='item-card-button'>
                    Add to Cart
                </button>
              </div>
            </div>                 
        })
      }
      </div> 
    </div>
  );
}

export default ProductList;
