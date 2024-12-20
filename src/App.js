import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Personnel from "./pages/Personnel";
import NotFound from "./pages/NotFound";  
import Contact from "./pages/Contact";
import Paths from "./pages/Paths";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import PersonnelDetail from "./pages/PersonnelDtail";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="personnel" element={<Personnel/>}/>
        <Route path="personnel/:id" element={<PersonnelDetail/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="contact" element={<PrivateRouter/>} >
            <Route path="" element={<Contact/>}/>
        </Route>
        
        <Route path="paths" element={<Paths/>}>
          {/* <Route index element={<Frontend/>}/> */}
          <Route path="frontend" element={<Frontend/>}/>
          <Route path="backend" element={<Backend/>}/>
        </Route>
        {/* <Route path="*" element={<Navigate to="/" />}/>    */}
        <Route path="*" element={<NotFound/>}/> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
