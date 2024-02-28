import { useGetProductListQuery } from "../store/services/shop";

const Products = () => {
  const { data, error, isLoading } = useGetProductListQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data.map((product) => {
        return <div key={product.id}>{product.title}</div>;
      })}
    </div>
  );
};

export default Products;
