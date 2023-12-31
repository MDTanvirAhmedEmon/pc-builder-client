import FeaturedProductCart from "./FeaturedProductCart";




const FeaturedProduct = ({products}) => {
  console.log(products);


  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div>
            <h1 className="text-4xl md:text-5xl text-center font-bold mb-10">Featured Product</h1>
        </div>
        <div className="px-5 md:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {
            products.map(product => <FeaturedProductCart key={product._id} product={product}></FeaturedProductCart>)
          }
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;

