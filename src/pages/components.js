import RootLayout from "@/components/Layouts/RootLayout";
import ProductCart from "@/components/ProductCart";


const Components = ({data}) => {
    return (
        <div className="py-20">
            <div className="container mx-auto">
                <div>

                </div>
                <div className="px-3 md:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {
                        data?.data?.map(product => <ProductCart key={product._id} product={product}></ProductCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Components;

Components.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };

export const getServerSideProps = async () =>{

    const res = await fetch(`http://localhost:5000/products`);
    const data = await res.json();
    
    return {
        props: {
            data,
        }
    }
};