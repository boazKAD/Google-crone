import bgImage from "./assets/P81tvoV.pnj.jpeg"
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
      < NavBar />
      < Home />
    </div>
  );
}

export default App;