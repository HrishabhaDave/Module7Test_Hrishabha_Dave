import React from 'react'
import './navigation.css'
import Icon from '../Assets/Icon.svg'
import Heart from '../Assets/Heart.svg'
import Cart from '../Assets/Cart.svg'
import Search from '../Assets/Search.svg'

function Navigation() {
  return (
    <div>
        <div className='navigation'>
            <div className='navigation-logo'>
                AccioJob
            </div>
            <div className='navigation-search'>
                <div className='navigation-names'>
                    Home
                </div>
                <div className='navigation-names'>
                    Shop
                </div>
                <div className='navigation-names'>
                    About
                </div>
                <div className='navigation-names'>
                    Blog
                </div>
                <div className='navigation-names'>
                    Contact
                </div>
                <div className='navigation-names'>
                    Pages
                </div>
            </div>
            <div className='navigation-cart'>
                <div className='navigation-names'>
                    <img src={Icon}/>
                </div>
                <div className='navigation-names'>
                    Login/Register
                </div>
                <div className='navigation-names'>
                    <img src={Search}/>
                </div>
                <div className='navigation-names'>
                       <img src={Cart}/>
                </div>
                <div className='navigation-names'>
                    <img src={Heart}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation