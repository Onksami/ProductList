import React from 'react'


function Header () {
  return (
    <div className='header'>

      <div className='market'>Market</div>

      <div className='total'>
        <img alt='' src='../Images/padlock.png'></img>
        <span id='totalPrice'> ₺ .... </span>
      </div>
    </div>

    
    
  )
}

export default Header