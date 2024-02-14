import { useState, useContext} from 'react';
import { getInfo } from '../App';
import { products } from './Data';
// import { name_1, setName_1 } from './Main';
// import { name_1, name_2, name_3, name_4, name_5, img_1, img_2, img_3, img_4, img_5, cost_1, cost_2, cost_3, cost_4, cost_5 } from './Main';


const ShoppingCart = () => {

  //{ name_1, name_2, name_3, name_4, name_5, setName_1, setName_2, setName_3, setName_4, setName_5, img_1, img_2, img_3, img_4, img_5, cost_1, cost_2, cost_3, cost_4, cost_5}
  
  
  //  let {name_1,name_2,name_3,name_4,name_5,img_1,img_2,img_3,img_4,img_5,cost_1,cost_2,cost_3,cost_4,cost_5,setName_1,setName_2,setName_3,setName_4,setName_5} = useContext(getInfo)
  let [name_1, setName_1] = useState(products[0].name);
  let [name_2, setName_2] = useState(products[1].name);
  let [name_3, setName_3] = useState(products[2].name);
  let [name_4, setName_4] = useState(products[3].name);
  let [name_5, setName_5] = useState(products[4].name);


  let [img_1, setImg_1] = useState(products[0].img);
  let [img_2, setImg_2] = useState(products[1].img);
  let [img_3, setImg_3] = useState(products[2].img);
  let [img_4, setImg_4] = useState(products[3].img);
  let [img_5, setImg_5] = useState(products[4].img);


  let [cost_1, setCost_1] = useState(products[0].cost);
  let [cost_2, setCost_2] = useState(products[1].cost);
  let [cost_3, setCost_3] = useState(products[2].cost);
  let [cost_4, setCost_4] = useState(products[3].cost);
  let [cost_5, setCost_5] = useState(products[4].cost);



  let [show, setShow] = useState("ab")
  let { test, count } = useContext(getInfo);
  test = 'test';
  let [count_product_1, setCount_product_1] = useState(1);
  let [count_product_2, setCount_product_2] = useState(1);
  let [count_product_3, setCount_product_3] = useState(1);
  let [count_product_4, setCount_product_4] = useState(1);
  let [count_product_5, setCount_product_5] = useState(1);
 
  let [total, setTotal] = useState(0);
  
  const sum = () => {
    //  
    let payment_1 = 0;
    let payment_2 = 0;
    let payment_3 = 0;
    let payment_4 = 0;
    let payment_5 = 0;
    if (name_1) {
      payment_1 = count_product_1 * cost_1;
    }
    if (name_2) {
      payment_2 = count_product_2 * cost_2;
    }
    if (name_3) {
      payment_3 = count_product_3 * cost_3;
    }
    if (name_4) {
      payment_4 = count_product_4 * cost_4;
    }
    if (name_5) {
      payment_5 = count_product_5 * cost_5;
    }
   
    let payments = payment_1 + payment_2 + payment_3 + payment_4 + payment_5;
    setTotal(payments);
  }
  // const increase = () => {
  //   setCount(count++);
  //   //****************it has a bug ***********
  // };
  // const decrease = () => {
    
  //   if (count <= 0)
  //   {
  //     setCount(0)
  //   } else {
  //     setCount(count--);
  //   };
  //   //****************it has a bug ************
  // };

  // const hideStyle = {
  //   display: 'block'
  // }
  // const [showState, setShowState] = useState(true);

  // const d = <p>{name}</p>;


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
  // }
  //products.map(({ name, img, cost, id }) => { handleClick(name,img,id,cost); })

  return (
    <>
      {/* <h1>{test} { show}</h1> */}
      {/* <h2>{ count}</h2>  */}
      {/* <button onClick={handleClick}>click me</button> */}
      <h1 style={{ fontFamily: 'calibri' }}>Shopping List</h1>  
      {/* {showState ? (<p>{name}</p>) : null} */}
      {/* {name ? <p style={{display:"none"}}>{ name}</p>: null} */}
      {/* {(hideStyle.display == 'block') ? (hideStyle.display == 'none', <p style={hideStyle}>{ name}</p>):null} */}      
      <div className='shopping-cart-product'>
        {/* {console.log(name_1)} */}
         {name_1 ? <img src={img_1} style={{width: '200px',height:'200px'}}></img> : null}
        {name_1 ? <p>{name_1}</p> : null}
        <div>
          {name_1 ? <span>{ count_product_1}#</span> : null}
          {name_1 ? <button className='btns' onClick={() => setCount_product_1(count_product_1++)}>+</button> : null}
          {name_1 ? <button className='btns' onClick={() => {
            if (count_product_1 <= 0)
              {
                setCount_product_1(0)
              } else {
                setCount_product_1(count_product_1--);
              };
          }}>-</button> : null}
          {name_1 ? <button className='btns' onClick={() => setName_1("")}>X</button> : null}
        </div>



        {name_2 ? <img src={img_2} style={{width: '200px',height:'200px'}}></img> : null}
        {name_2 ? <p>{name_2}</p> : null}
        <div>
          {name_2 ? <span>{ count_product_2}#</span> : null}
          {name_2 ? <button className='btns' onClick={() => setCount_product_2(count_product_2++)}>+</button> : null}
          {name_2 ? <button className='btns' onClick={() => {
            if (count_product_2 <= 0)
            {
              setCount_product_2(0)
            } else {
              setCount_product_2(count_product_2--);
            };
          }}>-</button> : null}
          {name_2 ? <button className='btns' onClick={() => setName_2("")}>X</button> : null}
        </div>


        
        {name_3 ? <img src={img_3} style={{width: '200px',height:'200px'}}></img> : null}
        {name_3 ? <p>{name_3}</p> : null}
        <div>
          {name_3 ? <span>{ count_product_3}#</span> : null}
          {name_3 ? <button className='btns' onClick={() => setCount_product_3(count_product_3++)}>+</button> : null}
          {name_3 ? <button className='btns' onClick={() => {
            if (count_product_3 <= 0)
            {
              setCount_product_3(0)
            } else {
              setCount_product_3(count_product_3--);
            };
          }}>-</button> : null}
          {name_3 ? <button className='btns' onClick={() => setName_3("")}>X</button> : null}
        </div>


        
        {name_4 ? <img src={img_4} style={{width: '200px',height:'200px'}}></img> : null}
        {name_4 ? <p>{name_4}</p> : null}
        <div>
          {name_4 ? <span>{ count_product_4}#</span> : null}
          {name_4 ? <button className='btns' onClick={() => setCount_product_4(count_product_4++)}>+</button> : null}
          {name_4 ? <button className='btns' onClick={() => {
            if (count_product_4 <= 0)
            {
              setCount_product_4(0)
            } else {
              setCount_product_4(count_product_4--);
            };
          }}>-</button> : null}
          {name_4 ? <button className='btns' onClick={() => setName_4("")}>X</button> : null}
        </div>



        {name_5 ? <img src={img_5} style={{width: '200px',height:'200px'}}></img> : null}
        {name_5 ? <p>{name_5}</p> : null}
        <div>
          {name_5 ? <span>{ count_product_5}#</span> : null}
          {name_5 ? <button className='btns' onClick={() => setCount_product_5(count_product_5++)}>+</button> : null}
          {name_5 ? <button className='btns' onClick={() => {
            if (count_product_5 <= 0)
            {
              setCount_product_5(0)
            } else {
              setCount_product_5(count_product_5--);
            };
          }}>-</button> : null}
            {name_5 ? <button className='btns' onClick={() => setName_5("")}>X</button> : null}
        </div>

        <div>{(name_1 || name_2 || name_3 || name_4 || name_5) ? <button className='btns' onClick={sum}>sum</button> : null}</div>
        {total ? <h2>payment = { total} $</h2> : null}
      </div>
      
    </>
  )
}
export default ShoppingCart;

