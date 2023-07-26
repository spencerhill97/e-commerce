import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { fakeData } from "../data/fakeData";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      // try {
      //   const res = await fetch("https://fakestoreapi.com/products");
      //   const data = await res.json();
      //   setProducts(data);
      // } catch (error) {
      //   console.log(error);
      // }
      const res = await fakeData.plants;
      setProducts(res);
    };

    fetchProducts();
  }, []);

  return (
    <section className="flex flex-col gap-y-8 min-h-screen justify-center">
      <h2 className="text-center font-bold text-4xl">Products</h2>
      <article className="max-w-[1200px] grid grid-cols-3 mx-auto gap-14">
        {products &&
          products.map((product, index) => {
            const { id, title, price, category, description, image, review } =
              product;
            return (
              <div key={uuidv4()} className="flex flex-col w-[300px]">
                <figure
                  onClick={() =>
                    navigate(`/products/${title}`, {
                      state: {
                        id,
                        title,
                        price,
                        category,
                        description,
                        image,
                        review,
                      },
                    })
                  }
                  className="relative rounded-md cursor-pointer aspect-square"
                >
                  <img
                    className="object-cover rounded-md"
                    src={image}
                    alt={title}
                    loading="lazy"
                  />
                  <div
                    className="absolute rounded-md w-full h-full bg-green-100 top-0 left-0 opacity-0 hover:opacity-25
                                  duration-200 ease-linear"
                  ></div>
                </figure>
                <h3 className="mt-2">{title}</h3>
                <p className="font-bold text-lg">${price}</p>
              </div>
            );
          })}
      </article>
    </section>
  );
}

export default Products;
