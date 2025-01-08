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

  const filteredProducts = fakedb.filter(checkQuery);
  function checkQuery(product) {
    return product.name.toLowerCase().includes(query?.toLowerCase() || "");
  }
  console.log(filteredProducts);
  // const [filteredProducts, setFilteredProducts] = useState({ fakedb });

  // useEffect(function () {
  //   setFilteredProducts(fakedb);
  // }, []);

  // ## Adds products to the cart ##
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
      console.log(product);
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  // useEffect(() => {
  //   setCartItems([...cartItems, "new product"]);
  // }, []);

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="my-8 mx-auto max-w-screen-2xl grid sm:grid-cols-4 col-auto gap-8  text-slate-800  ">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            productName={product.name}
            imgsrc={product.imageUrl}
            price={product.price}
            onAddToCart={addToCart}
            product={product}
          />
        ))}
      </div>
    </>
  );
}

export default ProductsContainer;

// this one is working, putting it on the side to test other things
{
  /* <div className="my-8 mx-auto max-w-screen-2xl grid sm:grid-cols-4 col-auto gap-8  text-slate-800  ">
        {fakedb.map((product) => (
          <Card
            key={product.id}
            productName={product.name}
            imgsrc={product.imageUrl}
            price={product.price}
            onAddToCart={addToCart}
            product={product}
          />
        ))}
      </div> */
}
