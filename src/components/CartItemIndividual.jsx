import { createContext, useContext, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Modal from "react-modal";

function CartItemIndividual({
  productId,
  productName,
  productImg,
  productPrice,
  productQuantity,
}) {
  // const { cartItems } = useContext(createContext);
  Modal.setAppElement("#nav");

  const { cartItems, setCartItems } = useOutletContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function addQuantity(productId) {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    console.log("+1");
  }

  function decreaseQuantity(productId) {
    if (productQuantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
      console.log("-1");
    }
  }

  function deleteProduct(productId) {
    setCartItems([cartItems.filter((a) => a.id !== productId)]);
    closeModal();
  }
  // );
  // }

  return (
    <div className="grid grid-cols-6 col-auto gap-2  sm:gap-8  text-sm sm:text-lg mt-4 place-items-center">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            height: "150px",
            textAlign: "center",
            borderRadius: "10px",
            padding: "20px",
          },
        }}
      >
        <div>
          <p>
            Are you sure you want to{" "}
            <span className="text-red-700">DELETE </span> this item?
          </p>
          <div className="flex gap-4 justify-center my-1">
            <button
              className="bg-slate-100 text-red-600"
              onClick={() => deleteProduct()}
            >
              Yes
            </button>
            <button
              className="bg-slate-600 text-slate-100"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      <img src={productImg} className="w-12" />
      <p>{productName}</p>
      <p>{productPrice}</p>
      <div className="flex place-items-center sm:gap-4">
        <button
          className="w-2 h-4 sm:h-6 flex justify-center items-center text-slate-500 bg-slate-150"
          onClick={() => decreaseQuantity(productId)}
        >
          -
        </button>
        <p>{productQuantity}</p>
        <button
          className="w-2 h-4 sm:h-6 flex justify-center items-center text-slate-500 bg-slate-150"
          onClick={() => addQuantity(productId)}
        >
          +
        </button>
      </div>
      <p>{(productPrice * productQuantity).toFixed(2)}</p>
      <button
        className="text-red-600 w-2 h-6 sm:h-8 flex justify-center items-center "
        onClick={openModal}
      >
        X
      </button>
    </div>
  );
}

export default CartItemIndividual;
