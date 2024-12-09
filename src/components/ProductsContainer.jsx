import Card from "./Card";
import fakedb from "../fakedb.json";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

function ProductsContainer({ cartItems, setCartItems }) {
  // console.log(fakedb[0].name);

  const [query, setQuery] = useState();
  const [discipline, setDiscipline] = useState();
  const [gender, setGender] = useState();
  // const [filteredProducts, setFilteredProducts] = useState({ fakedb });

  // useEffect(function () {
  //   setFilteredProducts(fakedb);
  // }, []);

  function addToCart(product) {
    console.alert("product added");
    setCartItems(...cartItems, 1);
  }

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="my-8 mx-auto w-2/2 grid sm:grid-cols-4 col-auto gap-8    ">
        {fakedb.map((product) => (
          <Card
            key={product.id}
            productName={product.name}
            imgsrc={product.imageUrl}
            price={product.price}
            onAddtoCart={addToCart}
          />
        ))}
      </div>
    </>
  );
}

export default ProductsContainer;

// this one is working, putting it on the side to test other things
{
  /* <div className="my-8 mx-auto w-2/2 grid sm:grid-cols-4 col-auto gap-8    ">
        {fakedb.map((product) => (
          <Card
            key={product.id}
            productName={product.name}
            imgsrc={product.imageUrl}
            price={product.price}
          />
        ))}
      </div> */
}
