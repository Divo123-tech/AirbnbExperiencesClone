import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";
import "./App.css";

function App() {
  const experiences = data().map((exp) => {
    return (
      <Card
        key= {exp.id}
        item={exp}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="exp-container">
      {experiences}
      </div>
    </div>
  );
}

export default App;
