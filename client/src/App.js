import { BrowserRouter, Route, Routes, } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
