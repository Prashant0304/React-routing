import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Personnel from "./pages/Personnel";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Personnel/>
      <Contact/>
      <NotFound/>
      <Footer/>
    </div>
  );
};

export default App;
