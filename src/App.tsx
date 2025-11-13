import { Header } from "./components/Header";
import { TopBenefits } from "./components/TopBenefits";
import Founder from "./components/Founder";
import ProductWorks from "./components/ProductWorks";
import UserGenerated from "./components/UserGenerated";
import Faq from "./components/Faq";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <TopBenefits  />
        <Founder />
        <ProductWorks />
        <UserGenerated />
        <Faq />
      </div>
    </>
  );
};

export default App;

