//globals
import React from "react";
import ReactDOM from "react-dom/client";
import "./utilities/global.scss";
//import HeaderIndex from "./components/header/HeaderIndex";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/common/scroll/ScrollToTop";
//routes:
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeIndex from "./pages/Home/HomeIndex";
import AppIndex from "./pages/App/AppIndex";
import DistributorsIndex from "./pages/distrubutors/DistrubutorsIndex";
import Manufacturers from "./pages/Manufacuters/Manufacters";
import ContactUs from "./pages/contactus/ContactUs";
import AboutUs from "./pages/About/AboutUs.js";
import Terms from "./pages/TermsPrivacy/Terms/Terms";
import Privacy from "./pages/TermsPrivacy/Privacy/Privacy";
import Demo from "./pages/demo/Demo";
import News from "./pages/news/News";
import ThankYou from "./pages/demo/ThankYou";
import TestPage from "./pages/test/TestPage";
//vitals
import reportWebVitals from "./reportWebVitals";

// import App from './App';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <HeaderIndex /> */}
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomeIndex />} />
          <Route path="/App" element={<AppIndex />} />
          <Route path="/Distributors" element={<DistributorsIndex />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Manufacturers" element={<Manufacturers />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/News" element={<News />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route
            path="/RequestDemo"
            element={
              <Demo
                formId="bff42b73-2371-4b50-b95a-324b1fea5746"
                title="Request a Demo"
                desc="Submit the form and we will get in contact!"
              />
            }
          />
          <Route
            path="/TechDemo"
            element={
              <Demo
                formId="7280f2fe-c4f5-4f7b-914f-a89d9216be20"
                title="Want Better Techs?"
                desc="Learn how Bluon makes YOUR techs more productive, at zero cost to you!"
              />
            }
          />
          <Route path="/ThankYou" element={<ThankYou />} />
          <Route path="TestPage" element={<TestPage />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
