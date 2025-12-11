import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";

import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Home from "../components/Home";
import ShowMovie from "../components/ShowMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/movie/:id" element={<ShowMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
