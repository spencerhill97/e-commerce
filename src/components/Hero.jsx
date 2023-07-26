import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  const navigate = useNavigate();

  function navigateToProducts(event) {
    navigate("products");
  }

  return (
    <article className="flex flex-col gap-y-8">
      <h1 className="text-5xl capitalize">company name</h1>
      <p className="max-w-[50ch] leading-7">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
        quidem ipsa autem dicta quos dolor esse facilis! Repellendus explicabo
        autem dolorem dolorum culpa iste corrupti fugit molestias.
      </p>
      <div className="flex items-center gap-x-4">
        <Button
          props={{
            name: "shop now",
            handleClick: navigateToProducts,
            bg: "bg-gray-200",
            width: "w-[125px]",
          }}
        />
        <Link
          to="about"
          className="inline-flex w-[125px] items-center justify-center gap-x-2 py-2 text-center capitalize"
        >
          more info <FaArrowRight className="relative top-px" />
        </Link>
      </div>
    </article>
  );
}

export default Hero;
