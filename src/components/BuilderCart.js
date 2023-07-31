import { removeProduct } from "@/redux/features/productSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";


const BuilderCart = ({ product }) => {

    const dispatch = useDispatch();

    if(!product) {
        return <div></div>
    }

  return (
    <div className="w-full h-full">
      <div className="flex h-full items-center">
        <Image
          src={product?.image}
          width={100}
          height={100}
          alt="pc component"
        ></Image>

        <div className="ml-1 md:ml-2">
          <p className="font-semibold text-sm lg:text-lg">{product?.productName}</p>
          <h2 className="font-bold">{product?.price}</h2>
        </div>
        <div className="">
            <button onClick={() =>dispatch(removeProduct(product))} className="p-2 bg-red-600 text-white ml-5 rounded-lg ">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default BuilderCart;
