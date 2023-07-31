import Categorys from "@/components/HomeComponents/Categorys";
import FeaturedProduct from "@/components/HomeComponents/FeaturedProduct";
import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";

const HomePage = ({data}) => {


  return (
    <>
    <div className="h-[700px]">
      <div
        className="bg-cover bg-no-repeat h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500"
      >

        <div className="container mx-auto h-full ">

          <div className="h-full flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-8xl shadow-black font-bold text-white mb-7">Quick And Easy</h1>
            <p className="text-white shadow-black w-full px-3 md:px-0 md:w-1/2 text-center mb-8">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
            <Link className="btn btn-active btn-neutral bg-gradient-to-r from-white to-slate-300 text-black border-none" href={'/components'}>Components</Link>
          </div>
        </div>

      </div>
    </div>
    <FeaturedProduct products={data?.data}></FeaturedProduct>
    <Categorys></Categorys>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:5000/random-product');
  const data = await res.json();

  return{
    props: {
      data,
    }
  }
};
