import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Career from "./pages/Career";
import RootLayout from "./layout/RootLayout";
import Policy from "./pages/Policy";
import Compliance from "./pages/AmlAndComliance";
import TermsAndConditions from "./pages/TermsAndConditions";
import DisputeResolution from "./pages/DisputeResolution";
import Privacy from "./pages/Privacy";
import RefundPolicy from "./pages/RefundPolicy";
import ComplaintPolicy from "./pages/ComplaintPolicy";
import Layout from "./layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<App />} />
      <Route path="career" element={<Career />} />
      <Route path="docs" element={<Layout />}>
        <Route path="policy" element={<Policy />} />
        <Route path="aml-and-compliance" element={<Compliance />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="dispute-resolution" element={<DisputeResolution />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="complaint-policy" element={<ComplaintPolicy />} />
      </Route>
    </Route>
  )
);
export default router;
