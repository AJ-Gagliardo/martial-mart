import Card from "./Card";
import fakedb from "../fakedb.json";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import FilterUI from "./FilterUI";

function ProductsContainer() {
  // console.log(fakedb[0].name);
  const { cartItems, setCartItems } = useOutletContext();

  //manage query params (in progress)
  const [searchParams, setSearchParams] = useSearchParams();

  // filters states
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [gender, setGender] = useState(searchParams.get("gender") || "");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });

  useEffect(() => {
    const params = {};
    if (query) params.query = query;
    if (category) params.category = category;
    if (priceRange) {
      params.priceMin = priceRange.min;
      params.priceMax = priceRange.max;
    }

    setSearchParams(params);
  }, [query, category, priceRange]);

  const filteredProducts = fakedb.filter(checkQuery);
  function checkQuery(product) {
    // by item name
    const matchesQuery = product.name
      .toLowerCase()
      .includes(query?.toLowerCase() || "");
    // by product category
    const matchesCategory =
      !category ||
      // product.category === category;
      // uniforms, gloves, accessories
      (category === "Uniforms" &&
        (product.category === "Uniforms" || product.category === "Clothing"))
        ? true
        : product.category === category;

    //
    // by gender
    // const matchesGender = !gender || product.gender === gender;
    const matchesGender =
      !gender || gender === "both"
        ? true
        : product.gender === "unisex"
        ? true
        : product.gender === gender;
    // by Price
    const matchesPrice =
      !priceRange ||
      // && matchesGender
      (product.price >= priceRange.min && product.price <= priceRange.max);

    // matching all filters
    return matchesQuery && matchesCategory && matchesPrice && matchesGender;
  }
  // console.log(filteredProducts);
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
      <FilterUI
        setCategory={setCategory}
        setGender={setGender}
        setPriceRange={setPriceRange}
      />
      <div className="my-8 mx-auto max-w-screen-2xl grid sm:grid-cols-4 col-auto gap-8  text-slate-800  p-0 min-w-full p-0">
        {/* <div className="my-8 mx-auto max-w-screen-2xl    text-slate-800 "> */}
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
