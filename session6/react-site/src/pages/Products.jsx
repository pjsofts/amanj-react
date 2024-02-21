import { useEffect, useState } from "react";
import { getProducts } from "../api/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await getProducts();
      setProducts(data);
    }
    getData();
  }, []);

  
  return (
    <div className="product-row">
      {products.map((product) => (
        <div key={product.id} className="product-box">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <div>{product.title}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Products;
