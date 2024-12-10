import Card from "./Card";
import fakedb from "../fakedb.json";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function ProductsContainer() {
  // console.log(fakedb[0].name);
  const { cartItems, setCartItems } = useOutletContext();

  const [query, setQuery] = useState();
  const [discipline, setDiscipline] = useState();
  const [gender, setGender] = useState();
  // const [filteredProducts, setFilteredProducts] = useState({ fakedb });

  // useEffect(function () {
  //   setFilteredProducts(fakedb);
  // }, []);

  function addToCart(product) {
    // alert("product added");
    // setCartItems([...cartItems, { ...quantity }]);
    const exists = cartItems.find((item) => product.id === item.id);

    //it it exists it adds 1 to the quantity
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // if it doesnt exists this will add the item tot he cart
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    // setCartItems([...cartItems, "new product"]);
  }

  // useEffect(() => {
  //   setCartItems([...cartItems, "new product"]);
  // }, []);

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
            onAddToCart={() => addToCart(product)}
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
