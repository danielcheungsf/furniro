import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home/home";
import { Footer } from "./components/footer";
import { Quality } from "./components/quality";
import { ContactUs } from "./pages/contact/contact";
import { useEffect, useState } from "react";
import { Header2 } from "./components/header2";
import ProductPage from "./productPage";
import { Shop } from "./pages/shop/shop";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  // const [currentPath, setCurrentPath] = useState("");
  // useEffect(() => {
  //   setCurrentPath(window.location.pathname);
  // }, []);
  const QualityWrapper = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    return !isHomePage && <Quality />;
  };

  const header2Show = [
    "/shop",
    "/comparison",
    "/cart",
    "/checkout",
    "/contact",
    "/blog",
    "/about",
  ];
  const Header2Wrapper = () => {
    const location = useLocation();
    const shouldShowHeader2 = header2Show.includes(location.pathname);
    return shouldShowHeader2 && <Header2 />;
  };

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Header2Wrapper />
          <Routes>
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
          <QualityWrapper />
          {/* {currentPath !== "/" && <Quality />} */}
          {/* {pathname != "/" ||
          pathname == "/shop" ||
          (pathname == "/about" && )} */}
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}
export default App;
