import { Header } from "./components/Header/Header";
import { TopBenefits } from "./components/TopBenefits/TopBenefits";
import Founder from "./components/Founder/Founder";
import ProductWorks from "./components/ProductWorks/ProductWorks";
import UserGenerated from "./components/UserGenerated";
import Faq from "./components/Faq";
import Banner from "./components/Banner";
import Final from "./components/Final";

const App = () => {
  return (
    <div className="max-w-[1464px] mx-auto">
      <Header />
      <main>
        <TopBenefits />
        <Founder />
        <ProductWorks />
        <UserGenerated />
        <Faq />
        <Banner />
        <Final />
      </main>
    </div>
  );
};

export default App;
