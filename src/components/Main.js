import {products} from './Data';
const Main = () => {
  
  return (
    <>
      <div className="container">
        <div className="products">
          {products.map(({ name, cost ,id, img}) => {     
            return (
                <div className='product' key={id}>
                  <img src={img} style={{width: '200px'}}></img>
                  <p>{ name}</p>
                  <h4>{ cost}</h4>
                </div>
            )
          })}
        </div>
      </div>
    
    </>
)
}
export default Main;