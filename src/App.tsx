import { Header } from "./components/Header";
import { TopBenefits } from "./components/TopBenefits";
import Founder from "./components/Founder";
import ProductWorks from "./components/ProductWorks";
import UserGenerated from "./components/UserGenerated";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <TopBenefits  />
        <Founder />
        <ProductWorks />
        <UserGenerated />
      </div>
    </>
  );
};

export default App;

