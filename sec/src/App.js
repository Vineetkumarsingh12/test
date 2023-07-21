
import './App.css';
import React from 'react';
import Products from './components/Products';
function App() {
  const ProductsDetails=[
    {
      year:2023,
      month:8,
      date:1,

    },
    {
      year:2022,
      month:3,
      date:2,

    },
    {
      year:2021,
      month:2,
      date:3,

    },
  ];
  return (
    <div>
<Products ProductsDetails
={ProductsDetails}></Products>
    </div>
  );
}

export default App;
