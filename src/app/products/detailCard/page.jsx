"use client"
import { useState } from "react";

export default function ProductDetail() {
  const price = 1500;
  const oldPrice = 1800;

  const [quantity, setQuantity] = useState(1);
  const [wished, setWished] = useState(false);
  const [input, setInput] = useState("");

  const total = price * quantity;

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s). Total: $${total}`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to buy ${quantity} item(s). Total: $${total}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl grid grid-cols-2 max-w-2xl w-full overflow-hidden shadow-lg">
        <div className="bg-gray-100 relative p-5 flex flex-col">
          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            <span className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded">
              New Arrival
            </span>
            <span className="bg-teal-400 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded">
              Free Shipping
            </span>
          </div>

          <div className="absolute top-4 right-4 flex flex-col gap-2.5">
            <button
              onClick={() => setWished(!wished)}
              className={`p-1 transition-colors ${
                wished ? "text-red-500" : "text-gray-400 hover:text-slate-900"
              }`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill={wished ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>

            <button className="p-1 text-gray-400 hover:text-slate-900 transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center mt-12">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Product"
              className="w-4/5 object-contain rounded-lg"
            />
          </div>
        </div>

        <div className="p-7 flex flex-col gap-4">
          <span className="text-gray-400 text-xs uppercase tracking-widest font-semibold cursor-pointer hover:text-slate-900 transition-colors w-fit">
            ← Back to Product
          </span>

          <div>
            <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-1">
              Premium Experience
            </p>
            <h1 className="text-slate-900 text-4xl font-extrabold leading-none tracking-tight">
              Macbook Pro
              <br />
              M5 Pro
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-900 text-3xl font-extrabold">
              ${price}
            </span>
            <div className="flex flex-col">
              <span className="text-gray-400 text-xs line-through font-medium">
                ${oldPrice}
              </span>
              <span className="text-teal-400 text-xs font-bold uppercase tracking-wide">
                Save 20% Today
              </span>
            </div>
          </div>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-teal-400 transition-colors w-full"
            placeholder="Enter note or promo code"
          />

          <div>
            <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2">
              Select Quantity
            </p>
            <div className="flex items-center border border-gray-200 rounded-lg w-fit overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-9 h-9 text-lg font-semibold text-slate-900 hover:bg-gray-100 flex items-center justify-center"
              >
                −
              </button>
              <span className="w-9 h-9 text-sm font-bold text-slate-900 border-x border-gray-200 flex items-center justify-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-9 h-9 text-lg font-semibold text-slate-900 hover:bg-gray-100 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          <p className="text-sm font-semibold text-slate-900">
            Total: ${total}
          </p>

          <div className="flex gap-2.5 mt-1">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-slate-900 hover:bg-slate-700 text-white rounded-xl py-3 text-sm font-bold flex items-center justify-center gap-2"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="border border-gray-200 hover:border-slate-900 hover:bg-gray-50 text-slate-900 rounded-xl py-3 px-5 text-sm font-bold"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}