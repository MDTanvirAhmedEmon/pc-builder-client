import Footer from "../Footer";
import Header from "../Header";

const RootLayout = ({ children }) => {
  return <div>
    <Header></Header>
    <div>
        {children}
    </div>
    <Footer></Footer>
  </div>;
};

export default RootLayout;
