import { MdClose } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
import image from "../assets/plant.webp";

function Cart() {
  return (
    <section
      className="md:max-w-[1200px] max-w-[650px] flex flex-col m-auto md:grid md:grid-cols-[3fr_2fr] md:grid-rows-[max_1fr] 
      gap-x-5 h-full md:items-start justify-between p-5"
    >
      <h2 className="w-full h-max text-4xl md:col-span-2 md:row-span-1 font-bold pb-8">
        Shopping Cart
      </h2>
      <article
        className="max-w-[650px] w-full h-full md:col-span-1 md:row-span-1 flex flex-col border-t-[1px]
                 border-gray-200"
      >
        <div className="flex h-[180px] sm:h-[250px] py-8 border-b-[1px] border-gray-200 sm:ps-2">
          <img src={image} alt="plant" className="aspect-square" />
          <div className="flex flex-col w-full h-full justify-between sm:pe-2 ps-4">
            <div className="flex flex-col h-full w-full justify-between items-start p-2">
              <div className="flex max-[900px]:flex-col justify-between w-full">
                <h3 className="font-medium">Snake Plant</h3>
                <p className="font-medium">$39.99</p>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-gray-500">Qty 1</p>
                <p className="flex items-center gap-x-3 text-red-500 font-bold">
                  Remove
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article
        className="flex flex-col place-self-end gap-y-4 mt-8 float-right md:mt-auto p-8 w-full md:col-span-1 md:row-span-1 
        max-w-[450px] h-100% bg-gray-50 rounded-md"
      >
        <h3 className="text-xl pb-4 font-medium">Order Summary</h3>
        <div className="w-full flex justify-between border-b-[1px] border-gray-200 pb-4">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-medium">$99.99</p>
        </div>
        <div className="w-full flex justify-between border-b-[1px] border-gray-200 pb-4">
          <p className="text-gray-600">Shipping</p>
          <p className="font-medium">$5.00</p>
        </div>
        <div className="w-full flex justify-between border-b-[1px] border-gray-200 pb-4">
          <p className="text-gray-600">Tax</p>
          <p className="font-medium">$8.33</p>
        </div>
        <div className="w-full flex justify-between pb-4">
          <p className="font-medium text-md">Order Total</p>
          <p className="text-md font-bold">$113.00</p>
        </div>
        <button className="w-full py-2 bg-blue-200 rounded-md">Checkout</button>
      </article>
    </section>
  );
}

export default Cart;
