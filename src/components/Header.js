
const Header = () => {

  return (
    <>
      <div className="header">
        <div className="navbar">
          <ul>
            <li className="list-item"><a href="/">Home</a></li>
            <li className="list-item"><a href="about">About</a></li>
            <li className="list-item"><a href="products">Products</a></li>
            <li className="list-item"><a href="contact">Contact</a></li>
          </ul>
        </div>
        <div className="shopping-cart" style={{ color: "pink"}}>shopping cart</div>
      </div>
      <div className="header-img"></div>
    </>
  )
}
export default Header;