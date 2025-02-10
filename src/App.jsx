import { useEffect, useState } from 'react';
import './App.css';
import Category from './components/Category';
import ProdectItem from './components/ProdectItem';
import axios from 'axios';

function App() {
  let [finalProductRes, setfinalProductRes] = useState([])

  let getProducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((productRes) => productRes.data)
      .then((finalRes) => {
        setfinalProductRes(finalRes.products)
      })
  }

  useEffect(() => {
    getProducts();
  }, [])

  let pitem = finalProductRes.map((product, i) => {
    return (
      <ProdectItem key={i} pData={product} />
    )
  })

  return (
    <>
      <div>
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='mb-6 text-4xl font-bold text-center'>Our Product</h1>
          <div className='grid grid-cols-[30%_auto] gap-5'>
            <div>
              <Category setfinalProductRes={setfinalProductRes} />
            </div>
            <div className='grid grid-cols-4 gap-4 h-[250px]'>
              {
                finalProductRes.length >= 1 ?
                  pitem
                  :
                  "No Data Found"
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
