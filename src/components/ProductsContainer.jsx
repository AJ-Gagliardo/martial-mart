import Card from "./Card";

function ProductsContainer() {
  return (
    <div className="w-2/2 grid grid-cols-3 col-auto gap-4`">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default ProductsContainer;
