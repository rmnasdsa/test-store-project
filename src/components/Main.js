import {products} from './Data';
const Main = () => {
  
  return (
    <>
      <div className="container">
        <div className="products">
          {/* <div className="product">
            <img src='https://nypost.com/wp-content/uploads/sites/2/2023/10/Untitled-2000-x-1333-px-2023-11-29T122527.482.jpg' style={{width:'200px'}}></img>
            <h1>{products[0].name}</h1>
            <h3>{ products[0].cost}</h3>
          </div> */}

          {products.map(({product}) => {
            return (
                <div className='product' key={Math.random()}>
                  <img></img>
                  <h1>{product[0]}</h1>
                </div>
            )
          })}
        </div>
      </div>
    
    </>
)
}
export default Main;