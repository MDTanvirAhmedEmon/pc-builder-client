import RootLayout from "@/components/Layouts/RootLayout";
import ProductCart from "@/components/ProductCart";



const productsCate = ({data, params}) => {

    return (
        <div className="py-20">
            <div className="container mx-auto">
                <div>
                    <h1 className="text-4xl md:text-5xl">Category: {params}</h1>
                </div>
                <div className="py-20 mx-3 md:mx-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {
                        data?.data?.map(product => <ProductCart key={product._id} product={product}></ProductCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default productsCate;

productsCate.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
export const getServerSideProps = async (context) =>{
    const {params} = context;

    const res = await fetch(`http://localhost:5000/category/${params.productsCate}`);
    const data = await res.json();
    
    return {
        props: {
            data,
            params: params.productsCate,
        }
    }
};