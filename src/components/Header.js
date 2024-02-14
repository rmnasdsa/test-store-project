import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <>
      <div className="header">
        <div className="navbar">
          <ul>
            <li className="list-item"><Link to='/'>Home</Link></li>
            <li className="list-item"><Link to='/about'>About</Link></li>
            <li className="list-item"><Link to='/products'>Products</Link></li>
            <li className="list-item"><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className="shopping-cart" style={{ color: "pink" }}>
          <Link to='/shoppingCart' target="_blank">shopping cart <FaCartPlus /></Link>
         
        </div>
      </div>
      <div className="header-img"></div>
    </>
  )
}
export default Header;