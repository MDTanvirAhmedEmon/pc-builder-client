import Link from "next/link";

const FeaturedProductCart = ({product}) => {
  const {image, productName, category, status, price, _id} = product;

    return (
          <div className="card w-auto h-auto bg-base-100 shadow-xl hover:shadow-2xl">
            <figure className="p-2 ">
            <Link href={`/product/${_id}`}>
              <img
                src={image}
                alt="Components"
              />
                        </Link>
            </figure>
            <div className="card-body pb-4 pt-0">
              <h2 className="card-title text-sm">
                {productName}
                
              </h2>
              <div className="badge badge-secondary">Featured</div>
              <p className="text-lg">{price}</p>
            </div>
          </div>


    );
};

export default FeaturedProductCart;