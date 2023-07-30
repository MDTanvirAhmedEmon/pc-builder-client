import Image from "next/image";
import Link from "next/link";

const ProductCart = ({ product }) => {
  console.log(product);
  const { image, productName, category, status, price, _id } = product;

  return (
    <div className="card w-auto h-auto bg-base-100 shadow-xl hover:shadow-2xl relative">
      <Link href={`/product/${_id}`}>
      <figure className="p-2 cursor-pointer">
        <Image width={500} height={500} src={image} alt="Components" />
      </figure>
      </Link>
      <div className=" px-5 pt-0 pb-5">
        <h2 className="card-title">
          {productName}
        </h2>
        <p className="text-lg ">{price}</p>
        <div className="card-actions justify-end mb-4">
            <button className="btn btn-active btn-neutral absolute right-5 bottom-5 bg-gradient-to-r from-cyan-500 to-blue-500 border-none text-white"><Link href={'/builder'}>Add To Builder</Link></button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
