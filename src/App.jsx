import "./app.scss";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/hero/hero";
import Parrelex from "./components/parallex/Parrelex";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parrelex type = "Services" />
      </section>
      <section>Services</section>
      <section id="Portfolio">
        <Parrelex  type = "Portfolio" />
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
