import { useState, useEffect, createContext,useContext } from 'react';
import { products } from './Data';
import ShoppingCart from './ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { getInfo } from '../App';
import Shop from './Shop';


// let { setCount } = useContext(getInfo);
// export let { setCount } = ""
// export let { setName_1, setName_2, setName_3, setName_4, setName_5, setImg_1, setImg_2, setImg_3, setImg_4, setImg_5, setCost_1, setCost_2, setCost_3, setCost_4, setCost_5 } = function() {}
// export let [test, setTest] = "";
// export let { name_1, name_2, name_3, name_4, name_5, img_1, img_2, img_3, img_4, img_5, cost_1, cost_2, cost_3, cost_4, cost_5 } = "";


const Main = () => {
  // let { setName_1, setName_2, setName_3, setName_4, setName_5, setImg_1, setImg_2, setImg_3, setImg_4, setImg_5, setCost_1, setCost_2, setCost_3, setCost_4, setCost_5 } = useContext(getInfo);
  let [show, setShow] = useState("ab");
  // let [productName, setProductName] = useState([]);
  // let [productImg, setProductImg] = useState([]);
  // let [productCost, setProductCost] = useState([]);
  const navigate = useNavigate('./contact', { state: { productName: "", productImg: "", productCost: "" } });
  // let [image, setImage] = useState("https://www.briggs-riley.com/cdn/shop/articles/02_5.jpg?v=1608575147");
  
  // setCount = useContext(getInfo);
  
  // [test,setTest] = useState("lorem ipsum dolor ............")
 
  // const [hide, setHide] = useState(false);
  // let name ;
  // let count = 0;
  // let bool = false;
  // let num = 0;
 
  // const toggle = () => {
    
    
  //   if (num % 2 == 0) {
  //     bool = true;
  //   } else {
  //     bool = false;
  //   }
  //   num++;

    
  // }
  //-----------------------------------------

        //try useEffect for toggle 

  //-----------------------------------------
  // const handleClick = (name,img,id,cost) => {
  //   if (id === 1) {
  //     setName_1(name);
  //     setImg_1(img)
  //     setCost_1(cost)    
  //       }
  //       if (id === 2) {
  //         setName_2(name);
  //         setImg_2(img)
  //         setCost_2(cost)  
  //       }
  //       if (id === 3) {
  //         setName_3(name);
  //         setImg_3(img)
  //         setCost_3(cost)  
  //       }
  //       if (id === 4) {
  //         setName_4(name);
  //         setImg_4(img)
  //         setCost_4(cost)  
  //       }
  //       if (id === 5) {
  //         setName_5(name);
  //         setImg_5(img)
  //         setCost_5(cost)  
  //       }
  //   }
    // toggle()
    // console.log(count)
    // console.log(name);
  // }

  
  // <ShoppingCart setName_1={setName_1} setImg_1={ setImg_1} setCost_1={setCost_1} name_1={name_1} img_1={img_1} cost_1={cost_1} handleClick={handleClick} />
  
  
  // let [image, setImage] = useState("");
  const handleClick = (img, name, cost, id) => {
    // setImage(img);
    navigate(`./contact/${id}`, { state: { productName: name, productImg: img, productCost: cost, productId:id } });
   
  }

  return (
    <>
      {/* <ShoppingCart name_1={name_1} name_2={name_2} name_3={name_3} name_4={name_4} name_5={name_5} img_1={img_1} img_2={img_2} img_3={img_3} img_4={img_4} img_5={img_5} setName_1={setName_1} setName_2={setName_2} setName_3={setName_3} setName_4={setName_4} setName_5={setName_5} cost_1={cost_1} cost_2={cost_2} cost_3={ cost_3} cost_4={cost_4} cost_5={cost_5} />  */}
      <div className="container">
        <h1>Products</h1>
        <div className="products">
        {products.map(({ name, cost ,id, img}) => {     
            return (
                <div className='product' key={id}>
                  <img src={img} style={{width: '200px',height:'200px'}}></img>
                  <p>{ name}</p>
                  <h4>{cost}$</h4>
                  <button className='btns' onClick={() => handleClick(img,name,cost,id)}>select</button>
                </div>
            )
          })}
        </div>
      
        {/* {(num % 2 !== 0) ? <p>success</p> : <p>not found</p>} */}
        {/* {bool && name (<p>{name}</p> )} */}

        {/* <getInfo.Provider value={{ test, setTest }}>
          
        </getInfo.Provider> */}
        {/* <p>{ show}</p> */}
        {/* <ShoppingCart name_1={name_1} name_2={name_2} name_3={name_3} name_4={name_4} name_5={name_5} img={img_1} img_2={img_2} img_3={img_3} img_4={img_4} img_5={img_5} setName={setName_1} setName_2={setName_2} setName_3={setName_3} setName_4={setName_4} setName_5={setName_5} cost_1={cost_1} cost_2={cost_2} cost_3={ cost_3} cost_4={cost_4} cost_5={cost_5} /> */}
        {/* <ShoppingCart name={name} />
        <ShoppingCart name={name}/>
        <ShoppingCart name={name}/> */}
      </div>
    
    </>
)
}
export default Main; 