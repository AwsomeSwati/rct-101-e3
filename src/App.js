import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Home from "./pages/Home";
import Login from "./pages/Login";



function App() {
  return (
    <div className="App">
      <Products />
       {/* <Navbar/>

         <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/Login" element={<Login />}></Route>
 
       </Routes> */}

        // Code here
      
    </div>
  );
}

export default App;
