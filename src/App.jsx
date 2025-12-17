import { LoadingProvider } from "./context/LoadingContext";

//Import del router e delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import delle pagine: ogni pagina una rotta
import DefaultLayout from "./DefaultLayout/DefaultLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import DetailsMovie from "./pages/DetailsMovie";

//Import pagine admin
import AdminDefaultLayout from "./DefaultLayout/AdminDefaultLayout";
import AdminHome from "./admin_pages/AdminHome";
import AdminForm from "./admin_pages/AdminForm";

function App() {
  return (
    <>
      <LoadingProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/movie/:id" element={<DetailsMovie />} />
            </Route>

            {/*rotte admin*/}
            <Route element={<AdminDefaultLayout />}>
              <Route path="/admin" element={<AdminHome />} />
              <Route path="/admin-form" element={<AdminForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LoadingProvider>
    </>
  );
}

export default App;
