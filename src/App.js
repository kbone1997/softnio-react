import React, { useEffect, useState } from "react";
import "./App.css"
import purple from './assets/purple.png';
import cyan from './assets/cyan.png';
import blue from './assets/blue.png';
import black from './assets/black.png';


const ProductDetail = () =>
{
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("purple");
  const [selectedPrice, setSelectedPrice] = useState(69.0);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() =>
  {
    window.addEventListener("click", (e) =>
    {
      e.preventDefault()
      if (e.target.id === "modal")
      {
        setShowModal(false);
      }
      console.log(e.target)
    })
  })

  const productImage = {
    "purple": purple,
    "cyan": cyan,
    "blue": blue,
    "slate": black,
  };

  const handleSizeSelect = (size, price) =>
  {
    setSelectedSize(size);
    setSelectedPrice(price);
  };

  const handleColorSelect = (color) =>
  {
    setSelectedColor(color);
  };

  const handleAddToCart = () =>
  {
    const newItem = {
      image: productImage[selectedColor],
      bandColor: selectedColor,
      size: selectedSize,
      quantity,
      price: selectedPrice * quantity,
    };

    setCartItems((prev) => [...prev, newItem]);
    setTotalQuantity((prev) => prev + quantity);
    setTotalCost((prev) => prev + newItem.price);
  };

  const renderTotalRow = () => (
    <tr className="text-[14px]">
      <td className="py-3 flex items-center">
        <span className="font-[700] text-[16px]">Total</span>
      </td>
      <td className="py-3 text-center"></td>
      <td className="py-3 text-center font-[700]"></td>
      <td className="py-3 text-center font-[700]">{totalQuantity}</td>
      <td className="py-3 font-[700] text-[18px] text-right">
        ${Number(totalCost).toFixed(1)}
      </td>
    </tr>
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row items-center">
        {/* Product Image */}
        <div className="flex sm:w-[400px] md:w-[48%]">
          <img
            src={productImage[selectedColor]}
            alt="Smart Watch"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-col md:w-[52%] sm:w-[400px] p-8">
          <h1 className="text-[40px] tracking-tighter font-bold text-primaryTitle mb-2">
            Classy Modern Smart watch
          </h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
            <p className="ml-2 text-gray-600">(2 Reviews)</p>
          </div>

          <p className="text-2xl font-semibold text-gray-800">
            <span className="line-through text-gray-400 font-[400] text-[20px]">
              $99.00
            </span>
            <span className="text-priceText">$79.00</span>
          </p>

          <p className="mt-4 text-gray-500 leading-relaxed">
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teaching.
          </p>

          <div className="flex gap-8 items-center mt-6">
            <div className="flex-col">
              <p className="text-baseText text-[14px]">Type</p>
              <p className="text-primaryTitle font-[700]">Watch</p>
            </div>
            <div className="flex-col">
              <p className="text-baseText text-[14px]">Model Number</p>
              <p className="text-primaryTitle font-[700]">Forerunner 290XT</p>
            </div>
          </div>

          {/* Band Color */}
          <div className="mt-6">
            <p className="text-primaryTitle font-[700] text-[18px]">Band Color</p>
            <div className="flex gap-3 mt-2">
              {["purple", "blue", "cyan", "slate"].map((color) => (
                <span
                  key={color}
                  className={`band w-[24px] h-[24px] rounded-full border-2 cursor-pointer flex items-center justify-center ${selectedColor === color ? "border-priceText" : ""
                    }`}
                  onClick={() => handleColorSelect(color)}
                >
                  <div
                    className={`w-[16px] h-[16px] rounded-full bg-${color}-500`}
                  ></div>
                </span>
              ))}
            </div>
          </div>

          {/* Wrist Size */}
          <div className="mt-6">
            <p className="text-primaryTitle font-[700] text-[18px]">Wrist Size</p>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size, index) => (
                <button
                  key={size}
                  className={`size-btn px-4 py-2 border rounded text-sm bg-gray-100 ${selectedSize === size ? "border-priceText" : ""
                    }`}
                  onClick={() => handleSizeSelect(size, [69, 79, 89, 99][index])}
                >
                  {size} ${[69, 79, 89, 99][index].toFixed(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector and Add to Cart */}
          <div className="flex gap-4 mt-6">
            <div className="flex items-center border-2">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="text-lg px-2"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-10 text-center bg-gray-100"
              />
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="text-lg px-2"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-priceText text-white px-6 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div id="modal" className="fixed flex inset-0 items-center justify-center bg-gray-800 bg-opacity-50 p-[44px]">
            {/* Modal Content */}
            <div className="bg-white rounded-lg shadow-lg w-[600px]">

              {/* Modal Body */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Your Cart</h3>
                </div>
                <table className="w-full text-left">
                  <thead className="text-[14px] text-baseText">
                    <tr className="border-b">
                      <th className="pb-2 font-[400] ">Item</th>
                      <th className="pb-2 font-[400] text-center">Color</th>
                      <th className="pb-2 font-[400] text-center">Size</th>
                      <th className="pb-2 font-[400] text-center">Qnt</th>
                      <th className="pb-2 font-[400] text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody id="cart-body" className="text-primaryTitle">
                    {
                      cartItems.map((item, index) => (
                        <tr key={index} className="border-b text-[14px]">
                          <td className="py-3 flex items-center">
                            <img
                              src={item.image}
                              alt="watch"
                              className="mr-3 rounded w-8 h-8 object-scale-down"
                            />
                            <span className="font-[400]">Classy Modern Smart Watch</span>
                          </td>
                          <td className="py-3 text-center">{item.bandColor}</td>
                          <td className="py-3 text-center font-[700]">{item.size}</td>
                          <td className="py-3 text-center font-[700]">{item.quantity}</td>
                          <td className="py-3 font-[700] text-right">
                            ${Number(item.price).toFixed(1)}
                          </td>
                        </tr>
                      ))
                    }
                    <tr className="text-[14px]">
                      <td className="py-3 flex items-center">
                        <span className="font-[700] text-[16px]">Total</span>
                      </td>
                      <td className="py-3 text-center"></td>
                      <td className="py-3 text-center font-[700]"></td>
                      <td className="py-3 text-center font-[700]">{totalQuantity}</td>
                      <td className="py-3 font-[700] text-[18px] text-right">
                        ${Number(totalCost).toFixed(1)} 
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end p-4 text-[13px]">
                <button id="closeFooter"
                  className="px-4 py-2 rounded font-[700] border-2 border-buttonBorder hover:bg-gray-400 mr-2">Continue
                  Shopping</button>
                <button className="px-4 py-2 bg-priceText font-[700] text-white rounded hover:bg-blue-700">Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* checkout */}
      {
        totalQuantity > 0 && (
          <div id="checkoutDiv" className="mt-8 flex justify-center items-center z-10 mb-8">
            <button id="openModal" className="flex items-center gap-2 bg-yellow-400 text-white px-4 py-2 rounded shadow-lg"
              onClick={() =>
              {
                setShowModal(true)
              }}>
              Checkout <span id="cartCount" className="bg-orange-500 text-xs px-2 py-1 rounded-full"
              >{totalQuantity}</span>
            </button>
          </div>
        )
      }
    </>
  );
};

export default ProductDetail;
