import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDeatils from "./components/RecipeDeatils";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeID" element={<RecipeDeatils />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
