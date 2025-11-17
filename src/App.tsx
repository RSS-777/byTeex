import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header/Header";
import TopBenefits from "./components/TopBenefits/TopBenefits";

const Founder = lazy(() => import("./components/Founder/Founder"));
const ProductWorks = lazy(
  () => import("./components/ProductWorks/ProductWorks")
);
const UserGenerated = lazy(
  () => import("./components/UserGenerated/UserGenerated")
);
const Faq = lazy(() => import("./components/Faq/Faq"));
const Banner = lazy(() => import("./components/Banner"));
const Final = lazy(() => import("./components/Final/Final"));

const App = () => {
  return (
    <div className="max-w-[1464px] mx-auto">
      <Helmet>
        <title>Product Page – Figma to Web Implementation</title>
        <meta
          name="description"
          content="A responsive product page replicated from Figma using a JS framework with dynamic content from Headless CMS."
        />
      </Helmet>
      <Header />
      <TopBenefits />
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <main>
          <Founder />
          <ProductWorks />
          <UserGenerated />
          <Faq />
          <Banner />
          <Final />
        </main>
      </Suspense>
    </div>
  );
};

export default App;
