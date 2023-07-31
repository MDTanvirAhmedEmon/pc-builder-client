import RootLayout from "@/components/Layouts/RootLayout";


const thankYou = () => {
    return (
        <div className="py-20 h-[80vh] bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="container mx-auto h-full flex items-center justify-center">
                <h1 className="text-7xl text-center text-white">Thank You For Your Order...</h1>
            </div>
        </div>
    );
};

export default thankYou;


thankYou.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  