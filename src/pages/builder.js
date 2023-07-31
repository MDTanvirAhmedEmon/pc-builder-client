import BuilderCart from "@/components/BuilderCart";
import RootLayout from "@/components/Layouts/RootLayout";
import { emptyProduct } from "@/redux/features/productSlice";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";

const Builder = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state?.products?.products);

  const cpu = products.find((pd) => pd.category === "Processor");
  const motherboard = products.find((pd) => pd.category === "Motherboard");
  const ram = products.find((pd) => pd.category === "Ram");
  const power = products.find((pd) => pd.category === "Power Supply");
  const storage = products.find((pd) => pd.category === "Storage Device");
  const monitor = products.find((pd) => pd.category === "Monitor");
  const others = products.find((pd) => pd.category === "Others");


  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="w-auto lg:w-[1000px] mx-4 md:mx-auto shadow-lg h-auto p-8 rounded-lg ">
          <p className="text-3xl md:text-4xl font-bold text-center">Choose Components</p>
            {/* processor */}
          <div className="w-90% h-40 border-2 my-5 relative rounded-md">
            <p className="absolute left-2 top-2 badge badge-secondary text-white">
              Processor
            </p>
            <BuilderCart product={cpu}></BuilderCart>
            <div>
            <Link className="absolute right-2 top-2 p-2 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 border-none" href={`/category/Processor`}>Choose</Link>
            </div>
          </div>

            {/* motherboard */}
          <div className="w-90% h-40 border-2 my-5 relative rounded-md">
            <p className="absolute left-2 top-2 badge badge-secondary text-white">
            motherboard
            </p>
            <BuilderCart product={motherboard}></BuilderCart>
            <div>
            <Link className="absolute right-2 top-2 p-2 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 border-none" href={`/category/Motherboard`}>Choose</Link>
            </div>
          </div>

            {/* Ram */}
          <div className="w-90% h-40 border-2 my-5 relative rounded-md">
            <p className="absolute left-2 top-2 badge badge-secondary text-white">
            Ram
            </p>
            <BuilderCart product={ram}></BuilderCart>
            <div>
            <Link className="absolute right-2 top-2 p-2 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 border-none" href={`/category/Ram`}>Choose</Link>
            </div>
          </div>

            {/* Power Supply */}
          <div className="w-90% h-40 border-2 my-5 relative rounded-md">
            <p className="absolute left-2 top-2 badge badge-secondary text-white">
            Power Supply
            </p>
            <BuilderCart product={power}></BuilderCart>
            <div>
            <Link className="absolute right-2 top-2 p-2 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 border-none" href={`/category/Power Supply`}>Choose</Link>
            </div>
          </div>

            {/* Storage Device */}
          <div className="w-90% h-40 border-2 my-5 relative rounded-md">
            <p className="absolute left-2 top-2 badge badge-secondary text-white">
            Storage Device
            </p>
            <BuilderCart product={storage}></BuilderCart>
            <div>
            <Link className="absolute right-2 top-2 p-2 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 border-none" href={`/category/Storage Device`}>Choose</Link>
            </div>
          </div>

            {/* Monitor */}
          <div className="w-90% h-40 border-2 my-5 relative rounded-md">
            <p className="absolute left-2 top-2 badge badge-secondary text-white">
            Monitor
            </p>
            <BuilderCart product={monitor}></BuilderCart>
            <div>
              <Link className="absolute right-2 top-2 p-2 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 border-none" href={`/category/Monitor`}>Choose</Link>
            </div>
          </div>

            {/* Others */}
          <div className="w-90% h-40 border-2 my-5 relative rounded-md">
            <p className="absolute left-2 top-2 badge badge-secondary text-white">
            Others
            </p>
            <BuilderCart product={others}></BuilderCart>
            <div>
            <Link className="absolute right-2 top-2 p-2 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 border-none" href={`/category/Others`}>Choose</Link>
            </div>
          </div>


            <Link onClick={() => dispatch(emptyProduct())} className={`btn btn-active btn-neutral mb-8 mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-none text-white ${products?.length === 7 ? '': 'btn-disabled'}`} href={'/thankyou'}>Complete Build</Link>

        </div>
      </div>
    </div>
  );
};

export default Builder;

Builder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
