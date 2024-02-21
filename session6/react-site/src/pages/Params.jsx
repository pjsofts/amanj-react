import { useLocation, useSearchParams } from "react-router-dom";

const Params = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name");
  const lastname = searchParams.get("lastname");
  return (
    <div>
      <h1>Params</h1>
      <div>name: {name}</div>
      <div>lastname: {lastname}</div>
      <button
        onClick={() => {
          setSearchParams({ name: "John", lastname: "Doe" });
        }}
      >
        set params
      </button>
    </div>
  );
};

export default Params;
