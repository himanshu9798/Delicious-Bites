import React, { useState, useEffect } from 'react';
import './FuncFetch.css'; // Import the CSS file

function FuncFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setData(res);
      })
      .catch((err) => alert(err));
  }, []); // Runs once on mount

  return (
    <div className="container">
      {data.map((value) => (
        <div key={value.id} className="card">
          <p>{value.title}</p>
          <h1>{value.id}</h1>
          <h2>{value.category}</h2>
          <img src={value.image} alt={value.title} />
          <p>{value.description}</p>
          <h2 className="price">Price: ${value.price}</h2>
          <p className="rating">Rating: {value.rating?.rate} / 5</p>
          <p className="rating">Number of Ratings: {value.rating?.count}</p>
        </div>
      ))}
    </div>
  );
}

export default FuncFetch;
