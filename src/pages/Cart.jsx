import { MdClose } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
import image from "../assets/plant.webp";

function Cart() {
  return (
    <section
      className="flex max-w-[1200px] m-auto flex-wrap gap-0 h-full items-start 
    justify-between p-8"
    >
      <h2 className="w-full h-max text-4xl font-bold pb-8">Shopping Cart</h2>
      <article className="max-w-[650px] w-full h-full flex flex-col border-t-[1px] border-gray-200">
        <div className="h-[250px] flex py-8 border-b-[1px] border-gray-200 ps-2">
          <img src={image} alt="plant" className="object-fit aspect-square" />
          <div className="flex flex-col w-full h-full justify-between pe-2 ps-8">
            <div className="flex h-max w-full justify-between items-start">
              <div className="flex flex-col">
                <h3 className="">Snake Plant</h3>
                <p className="font-bold">$39.99</p>
              </div>
              <select className="pt-2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <button className="text-xl text-gray-500 pt-2">
                <MdClose />
              </button>
            </div>
            <p className="flex items-center gap-x-3">
              <FcCheckmark className="text-lg" /> In stock
            </p>
          </div>
        </div>
      </article>
      <article className="flex flex-col gap-y-4 p-8 w-full max-w-[450px] h-100% bg-gray-50 rounded-md">
        <h3 className="text-xl pb-4 font-medium">Order Summary</h3>
        <div className="w-full flex justify-between border-b-[1px] border-gray-200 pb-4">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-medium">$99.99</p>
        </div>
        <div className="w-full flex justify-between border-b-[1px] border-gray-200 pb-4">
          <p className="text-gray-600">Shipping Estimate</p>
          <p className="font-medium">$5.00</p>
        </div>
        <div className="w-full flex justify-between border-b-[1px] border-gray-200 pb-4">
          <p className="text-gray-600">Tax Estimate</p>
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
