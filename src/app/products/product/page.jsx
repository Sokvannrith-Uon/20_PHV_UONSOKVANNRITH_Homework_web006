import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6 grid grid-cols-2 gap-6">
      <h1 className="col-span-2 text-2xl font-bold">
        Life of Products
      </h1>

      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="card bg-base-100 shadow-sm rounded-lg"
        >
          <figure className="p-4">
            <img
              className="rounded-lg"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="product"
            />
          </figure>

          <div className="px-4 pb-4">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there are title and actions parts
            </p>

            <div className="py-4">
              <Link
                href="/products/detailCard"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex justify-center"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}