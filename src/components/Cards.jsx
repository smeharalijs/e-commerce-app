import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
function Cards() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);


   function buyItem(){
    Swal.fire({
        title: "Good job!",
        text: "Card Added Succesfully",
        icon: "success"
      });
   }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products && products.map(items => (
        <div key={items.id} className="flex justify-center m-5">
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={items.thumbnail} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{items.title}</h2>
    <p>{items.description}</p>
    <p>RS:{items.price}</p>
    <div className="card-actions">
      <button className="btn btn-primary" onClick={buyItem}>Buy Now</button>
    </div>
  </div>
</div>
          </div>
      ))}
    </div>
  );
}

export default Cards;
