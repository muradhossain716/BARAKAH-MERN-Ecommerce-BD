import { NavLink } from "react-router-dom";
import Carousel from '../Components/Carousel';
import ShopingCartimg from '../img/shoping-cart.svg';
import userimg from '../img/user.png';
import wishlistimg from '../img/wishlist.png';
import './User.css';
export default function user() {
  return (
    <>
    <div className='top-of-page'>

    </div>
    
    <nav>
        <div className="container">
            <div  className="logo"><span className="logoText">BARAKAH</span>-SHOP-BD</div>
            <ul className='nav-ul'>
                <li><NavLink to='#'>Mens</NavLink></li>
                <li><NavLink to='#'>Foods</NavLink></li>
                <li><NavLink to='#'>Books</NavLink></li>
                <li><NavLink to='#'>Electronics</NavLink></li>
                <li><NavLink to='#'>Planes</NavLink></li>
                <li><NavLink to='#'>Books</NavLink></li>
                <li><NavLink to='#'>Clothes</NavLink></li>
                <div className='shopping-nav'>
                <NavLink to='#'><img src={ShopingCartimg} alt="shopincart" className='cartimg'/><sup className='navcartsup'>0+</sup></NavLink>
                <NavLink to='#'><img src={wishlistimg} alt="wishlist" className='wishlistimg'/><sup className='wishlistsup'>0+</sup></NavLink>
                </div>
                <li><NavLink to='/userlogin'><img src={userimg} alt="wishlist" className='userloginimg'/></NavLink></li>
            </ul>
        </div>
    </nav>
    <div className="upper-body">
        <div className="container-upper-body">
            
            <div className="top-left">
                <div className="search-section">
                    <button type='button' className='price-filter'>Price Filter</button>
                    <input type='search' className='search'/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-11">
                <Carousel />
                </div>
            </div>
                
            
            
        </div>
        
        
    </div>
    
    
    </>
  )
}
