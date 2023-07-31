import RootLayout from "@/components/Layouts/RootLayout";
import { addProduct } from "@/redux/features/productSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";


const ProductId = ({data}) => {
    const { image, productName, category, status, price, description } = data?.data;
    
    const dispatch = useDispatch();

    const handleAddToBuilder = () => {
        dispatch(addProduct(data?.data));
    }
    

    return (
        <div className="py-20">
            <div className="container mx-auto flex items-center gap-5">
                <div className="w-1/2">
                <Image width={500} height={500}  src={image} alt="Components" />
                </div>
                <div className="">
                    <h1 className="text-3xl font-bold">{productName}</h1>
                    <p className="text-lg mt-2">Category: {category}</p>
                    <p className="text-lg mt-2">{status}</p>
                    <p className="text-2xl mt-2">Price: {price}</p>
                    <Link onClick={handleAddToBuilder} className="btn btn-active btn-neutral bg-gradient-to-r from-cyan-500 to-blue-500 border-none text-white mt-4" href={'/builder'}>Add To Builder</Link>
                    <h2 className="text-lg font-semibold mt-8">Description:</h2>
                    <p className="text-lg mt-2">{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductId;

ProductId.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };

export const getServerSideProps = async (context) =>{

    const {params} = context;
    console.log(params);

    const res = await fetch(`http://localhost:5000/product/${params.productId}`);
    const data = await res.json();
    
    return {
        props: {
            data,
        }
    }
};
