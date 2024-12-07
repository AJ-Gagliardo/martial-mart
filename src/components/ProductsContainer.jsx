import Card from "./Card";
import fakedb from "../fakedb.json";

function ProductsContainer() {
  // console.log(fakedb[0].name);

  return (
    <div className="my-8 mx-auto w-2/2 grid sm:grid-cols-4 col-auto gap-6    ">
      {fakedb.map((product) => (
        <Card
          key={product.id}
          productName={product.name}
          imgsrc={product.imageUrl}
          price={product.price}
        />
      ))}
      <Card />
    </div>
  );
}

export default ProductsContainer;
