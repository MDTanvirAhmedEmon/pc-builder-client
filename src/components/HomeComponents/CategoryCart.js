import Image from "next/image";
import Link from "next/link";

const CategoryCart = ({category}) => {
    const {name, image} = category;

    return (
        <Link href={`/category/${name}`}>
        <div className="card w-auto h-auto bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl">
        <figure className="p-2">
            <Image
                src={image}
                alt="Components"
            />
        </figure>
        <div className="card-body pb-4 pt-0">
          <h2 className="text-lg text-center">
            {name}
          </h2>
        </div>
      </div>
      </Link>
    );
};

export default CategoryCart;