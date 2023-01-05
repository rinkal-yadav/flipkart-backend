import React from 'react'
import { Link } from 'react-router-dom'
const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
  return (
    <div className='emptyContainer'>
        <div className='emptyitems'>
            <img src={imgurl} alt='emptycart'style={{ width:'15%' }} />
            <h4>Your cart is empty!</h4>
            <p>Add items to it now </p>
            <button><Link to='/'>Shop now</Link></button>
        </div>
    </div>
  )
}

export default EmptyCart