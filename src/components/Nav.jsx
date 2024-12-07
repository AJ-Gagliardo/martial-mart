function Nav() {
  return (
    <div className="flex my-8">
      <div className="flex flex-1">
        <p className="mx-2 sm:mx-auto">Home</p>
        <p className="mx-2 sm:mx-auto">All Products</p>
        <p className="mx-2 sm:mx-auto">By Discipline</p>
      </div>
      <div className="flex flex-1">
        <p className="ml-auto mr-2 sm:mr-20">Cart</p>
      </div>
    </div>
  );
}

export default Nav;
