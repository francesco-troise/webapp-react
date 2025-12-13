//Import del router e delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import delle pagine: ogni pagina una rotta
import DefaultLayout from "./pages/DefaultLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import DetailsMovie from "./pages/DetailsMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/movie/:id" element={<DetailsMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
