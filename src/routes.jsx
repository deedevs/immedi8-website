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
import RecruitmentLayout from "./layout/RecruitmentLayout";
import CareerPost from "./pages/CareerPost";
import BecomeAnAgent from "./pages/BecomeAnAgent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<App />} />
      <Route path="recruitment" element={<RecruitmentLayout />}>
        <Route path="become-an-agent" element={<BecomeAnAgent />} />
        <Route path="career" element={<Career />} />
        <Route path="career/:id" element={<CareerPost />} />
      </Route>
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
