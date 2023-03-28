import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const RootLayout = () => {
  return (
    <div>
      <NavBar />

      <main>{<Outlet />}</main>

      <Footer />
    </div>
  );
};

export default RootLayout;
