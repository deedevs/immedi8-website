import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
