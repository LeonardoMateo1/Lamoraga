import { BrowserRouter, Route, Routes, } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import MenuPage from "./pages/Menu/MenuPage";
import EventsPage from "./pages/Events/EventsPage";
import BlogPage from "./pages/Blog/BlogPage";
import ViewBlog from "./pages/Blog/ViewBlog";
import ContactPage from "./pages/Contact/ContactPage";
import History from "./pages/About/History";
import GiftCards from "./pages/GiftCards";
import Edit from "./pages/Edit/Edit";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/Menu" element={<MenuPage/>}/>
          <Route path="/Events" element={<EventsPage/>}/>
          <Route path="/Blog" element={<BlogPage/>}/>
          <Route path='/Blog_Post/:id' element={<ViewBlog/>}/>
          <Route path="/Contact_Us" element={<ContactPage/>}/>
          <Route path='/History' element={<History/>}/>
          <Route path='/Gift_Cards' element={<GiftCards/>}/>
          <Route path='/Blog/Edit/305131' element={<Edit/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
