import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const query = useQuery({ queryKey: ["products"], queryFn: getProducts });

  return (
    <div className="product-row">
      {query.data?.map((product) => (
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
