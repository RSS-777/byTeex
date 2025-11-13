import { Header } from "./components/Header";
import { TopBenefits } from "./components/TopBenefits";
import Founder from "./components/Founder";
import ProductWorks from "./components/ProductWorks";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <TopBenefits  />
        <Founder />
        <ProductWorks />
      </div>
    </>
  );
};

export default App;

