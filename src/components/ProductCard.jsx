import { useOutletContext, useParams, useSearchParams } from "react-router-dom";
import blank from "../assets/img/Black_White_Border_Frame_Transparent_PNG_Image.png";
import "./Card.css";
import fakedb from "../fakedb.json";

// this will be for the individual product

function ProductCard({
  productName = "product",
  imgsrc = "blank",
  price = "9.99",
  description = "sample Description",
  onAddToCart,
  category,
}) {
  const { id } = useParams();
  // console.log(id);
  const [searchParams] = useSearchParams();
  const { cartItems, setCartItems } = useOutletContext();

  const productId = Number(id);
  // Number(searchParams.get("id"));

  const activeProduct = fakedb.find((product) => product.id === productId);
  console.log(activeProduct);

  function addToCart(product) {
    const exists = cartItems.find((item) => product.id === item.id);

    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      console.log(product);
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  if (!activeProduct) {
    return (
      <div className="flex flex-col gap-2 h-82 w-70 shadow-xl rounded-md text-center justify-center place-items-center pb-20 my-10">
        <h2 className="text-red-600">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 h-82 w-70 shadow-xl rounded-md text-center justify-center place-items-center my-4">
      <h2 className="h-12  sm:w-1/2 md:w-1/2 lg:w-2/2 w-50 text-ellipsis overflow-hidden whitespace-nowrap  ">
        {activeProduct.name}
      </h2>
      <img src={"/" + activeProduct.imageUrl} className=" w-60 h-60"></img>
      <h3 className="">${activeProduct.price}</h3>
      <p>{activeProduct.description}</p>
      <button
        className="mb-2 bg-slate-700"
        onClick={() => addToCart(activeProduct)}
      >
        <p className="text-slate-50">Add to Cart</p>
      </button>
    </div>
  );
}

export default ProductCard;
