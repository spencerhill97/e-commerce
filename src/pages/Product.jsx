import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { HiShieldCheck } from "react-icons/hi";
import Button from "../ui/Button";

function Product() {
  const location = useLocation();

  const { title, price, description, image, category, review } = location.state;

  useEffect(() => {
    console.log(review);
  }, []);

  return (
    <section
      className="m-auto h-full w-full max-w-[1200px] flex md:flex-row flex-col gap-x-10 
                 items-center justify-evenly"
    >
      <div className="max-w-[500px] p-5 flex flex-wrap gap-y-4 order-2 md:order-1">
        <h2 className="w-full font-bold text-4xl">{title || "Product"}</h2>
        <p className="w-max pe-4 border-e-[1px] border-gray-200 text-xl">
          ${price}
        </p>
        <div className="flex gap-x-[1px] w-max items-center ps-4">
          <FaStar className="text-yellow-500 text-lg" />
          <FaStar className="text-yellow-500 text-lg" />
          <FaStar className="text-yellow-500 text-lg" />
          <FaStar className="text-yellow-500 text-lg" />
          <FaStar className="text-yellow-500 text-lg" />
        </div>
        <p className="text-gray-500">{description}</p>
        <p className="flex items-center gap-x-2 text-[14px] mb-4">
          <FcCheckmark className="text-lg" /> In stock and ready to ship
        </p>
        <Button
          props={{ bg: "bg-gray-200", width: "w-full", name: "Add to cart" }}
        />
        <p className="flex items-center justify-center gap-x-2 text-gray-500 mx-auto">
          <HiShieldCheck className="text-xl" /> Free returns for all damaged
          items
        </p>
      </div>
      <figure className="px-5 md:py-0 py-1 order-1 md:order-2">
        <img
          className="md:min-w-[350px] md:w-[400px] rounded-md object-cover"
          src={image}
          alt={title}
        />
      </figure>
    </section>
  );
}

export default Product;
