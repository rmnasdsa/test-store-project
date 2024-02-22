import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { getInfo } from "../App";
const Shop = ({id}) => {
  // console.log(id);
  const location = useLocation();
  // console.log(location)
  // let { test } = useContext(getInfo);
  // console.log(test);
  const btns = document.querySelector('.btns');
  console.log(btns);
  // btns.onClick = () => {
  //   console.log('hello')
  // }
  return (
    <>
      {id == 1 ? <h1>shop</h1> : null}
      {/* <img src={image}></img> */}
      {location.state ? <img src={location.state.productImg} style={{width: '200px',height:'200px'}}></img> : null}
      { location.state ? <h2>{location.state.productName}</h2> : null}
      {location.state ? <h3>{location.state.productCost}</h3> : null}
      {/* {(id == 2 && location.state.productId == 2) ? <img src={location.state.productImg} style={{ width: '200px', height: '200px' }}></img> : null}
       */}
    </>
  )
}
export default Shop;