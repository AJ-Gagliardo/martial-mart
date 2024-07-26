import Card from "./Card";

function ProductsContainer() {
  return (
    <div className="my-8 w-2/2 grid sm:grid-cols-4 col-auto gap-6  justify-items-end">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default ProductsContainer;
