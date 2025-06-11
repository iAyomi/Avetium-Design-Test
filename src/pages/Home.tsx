import Header from "../modules/Header";
import Integrations from "../modules/Integrations";
import Benefit from "../modules/Benefit";
import Pricing from "../modules/Pricing";
import Testimonials from "../modules/Testimonials";
import FAQs from "../modules/FAQs";
import Footer from "../modules/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Integrations />
      <Benefit />
      <Pricing />
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Home;
