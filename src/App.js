import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingCart from "./components/ShoppingCart";
import { createContext, useState } from 'react';
import Shop from './components/Shop';
// import { test,setTest } from './components/Main';



export let [count, setCount] = "-2";


export const getInfo = createContext()
function App() {
  let [test, setTest] = useState("lorem ipsum dolor");
      // [count, setCount] = useState("-1");


  
  //,name_1,setName_1,name_2,setName_2,name_3,setName_3,name_4,setName_4,name_5,setName_5,img_1,setImg_1,img_2,setImg_2,img_3,setImg_3,img_4,setImg_4,img_5,setImg_5,cost_1,setCost_1,cost_2,setCost_2,cost_3,setCost_3,cost_4,setCost_4,cost_5,setCost_5
  return (
    <div className="App">
     <getInfo.Provider value={{ test, setTest, count,setCount }}>
          <Router>
            <Routes>
              <Route path='/' element={<>
                <Header />
                <Main  />
                
              </>} />
              
              {/* <Route path='/shoppingCart' element={ <Main />} /> */}
            <Route path='/shoppingCart' element={<>
              <ShoppingCart />
            </>} />
            <Route path='/contact/*' element={<>
              <Shop id={ 1} />
              <Shop id={ 2} />
              <Shop id={ 3} />
              <Shop id={ 4} />
            </>} />
            </Routes>
        </Router> 
      </getInfo.Provider>
    </div>
     
      
    
  );
}

export default App;
