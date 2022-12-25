import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Videos } from "./components/Videos";
import { Upload } from "./components/Upload";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

// npx create-react-app my-app --template @chakra-ui
// npm i react-router-dom react-responsive-carousel
//chakra UI because its responsive

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
