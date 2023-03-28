import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import RootLayout from "./layout/RootLayout";
import Policy from "./pages/Policy";
import Compliance from "./pages/AmlAndComliance";
import TermsAndConditions from "./pages/TermsAndConditions";
import DisputeResolution from "./pages/DisputeResolution";
import Privacy from "./pages/Privacy";
import RefundPolicy from "./pages/RefundPolicy";
import ComplaintPolicy from "./pages/ComplaintPolicy";
import Services from "./components/Services";
import Products from "./components/Products";
import Regulators from "./components/Regulators";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import About from "./components/About";

// Main page

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/aml-and-compliance",
//     element: <ComplaintPolicy />,
//   },
//   {
//     path: "/terms-and-conditions",
//     element: <TermsAndConditions />,
//   },
//   {
//     path: "/dispute-resolution",
//     element: <DisputeResolution />,
//   },

//   {
//     path: "/privacy",
//     element: <Privacy />,
//   },
//   {
//     path: "/refund-policy",
//     element: <RefundPolicy />,
//   },
//   {
//     path: "/complaint-policy",
//     element: <ComplaintPolicy />,
//   },
//   { path: "/policy", element: <Policy /> },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<App />} />
      {/* <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="services" element={<Services />} />
      <Route path="regulators" element={<Regulators />} />
      <Route path="contacts" element={<Contact />} />
      <Route path="contacts" element={<Testimonial />} />
      <Route path="faq" element={<FAQ />} /> */}

      <Route path="policy" element={<Policy />} />
      <Route path="complaint-policy" element={<Compliance />} />
      <Route path="terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="dispute-resolution" element={<DisputeResolution />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="refund-policy" element={<RefundPolicy />} />
      <Route path="complaint-policy" element={<ComplaintPolicy />} />
    </Route>
  )
);
export default router;
