import { addProduct } from "@/redux/features/productSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const ProductCart = ({ product }) => {

  const { image, productName, category, status, price, _id } = product;

  const dispatch = useDispatch();

  const handleAddToBuilder = () => {
      dispatch(addProduct(product));
  }

  return (
    <div className="card w-auto h-auto  md:h-auto bg-base-100 shadow-xl hover:shadow-2xl relative">
      <Link href={`/product/${_id}`}>
      <figure className="p-2 cursor-pointer">
        <Image width={500} height={500} src={image} alt="Components" />
      </figure>
      </Link>
      <div className=" px-5 pt-0 pb-5">
        <h2 className="card-title text-sm md:text-lg">
          {productName}
        </h2>
        <p className="text-md md:text-lg ">{price}</p>
        <div className=" card-actions justify-end mb-7 md:mb-4">
            <Link onClick={handleAddToBuilder} className=" text-sm md:text-lg p-2 font-semibold rounded-lg absolute right-2 md:right-5 bottom-2 md:bottom-5 bg-gradient-to-r from-cyan-500 to-blue-500 border-none text-white" href={'/builder'}>Add To Builder</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
