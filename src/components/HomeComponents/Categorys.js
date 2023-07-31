import CategoryCart from "./CategoryCart";

import cpuImage from "../../assets/images/cpu.jpg"
import motherboardImage from "../../assets/images/motherboard.jpg"
import ramImage from "../../assets/images/ram.jpg"
import powerImage from "../../assets/images/power-supply.png"
import ssdImage from "../../assets/images/ssd.png"
import monitorImage from "../../assets/images/monitor.jpg"
import othersImage from "../../assets/images/mouse-key.png"


const Categorys = () => {

    
    const categories = [
        {
          id: 1,
          name: "Processor",
          image: cpuImage,
        },
        {
          id: 2,
          name: "Motherboard",
          image: motherboardImage,
        },
        {
          id: 3,
          name: "Ram",
          image: ramImage,
        },
        {
          id: 4,
          name: "Power Supply",
          image: powerImage,
        },
        {
          id: 5,
          name: "Storage Device",
          image: ssdImage,
        },
        {
          id: 6,
          name: "Monitor",
          image: monitorImage,
        },
        {
          id: 7,
          name: "Others",
          image: othersImage,
        },
      ];
      

  return (
    <div className="py-20">
      <div className="container mx-auto">

        <div>

          <div>
            <h1 className="text-4xl md:text-5xl text-center font-bold mb-14">Categories</h1>
          </div>
          
        </div>
        <div className="px-5 md:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-5">
            {
                categories.map(category => <CategoryCart key={category.id} category={category}></CategoryCart>)
            }
        </div>

      </div>
    </div>
  );
};

export default Categorys;
