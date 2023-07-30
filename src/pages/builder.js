import RootLayout from "@/components/Layouts/RootLayout";


const Builder = () => {
    return (
        <div>
            <div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Builder;

Builder.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};