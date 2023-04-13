import { BrowserRouter, Route, Routes, } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import MenuPage from "./pages/Menu/MenuPage";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/Menu" element={<MenuPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
