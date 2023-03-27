import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Hero1 from "./images/Hero1.png";
import Hero2 from "./images/Hero2.jpg";
import Hero3 from "./images/Hero3.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div class="card--panel">
        <Card 
          img={Hero1}
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
        <Card 
          img={Hero2}
          rating="5.0"
          reviewCount={30}
          country="USA"
          title="Learn wedding photography"
          price={125}
        />
        <Card
          img={Hero3}
          rating="4.8"
          reviewCount={2}
          country="USA"
          title="Group Mountain Biking"
          price={50}
        />
      </div>
    </div>
  );
}

export default App;
