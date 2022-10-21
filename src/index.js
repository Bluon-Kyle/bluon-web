//globals
import React from "react";
import ReactDOM from "react-dom/client";
import "./utilities/global.scss";
//import HeaderIndex from "./components/header/HeaderIndex";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import ScrollToTop from "./components/common/scroll/ScrollToTop";
//routes:
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeIndex from "./pages/Home/HomeIndex";
import App from "./pages/App/App";
import DistributorsIndex from "./pages/distrubutors/DistrubutorsIndex";
import Manufacturers from "./pages/Manufacuters/Manufacters";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About.js";
import Terms from "./pages/TermsPrivacy/Terms/Terms";
import Privacy from "./pages/TermsPrivacy/Privacy/Privacy";
import Demo from "./pages/demo/Demo";
import News from "./pages/News/News";
import ThankYou from "./pages/ThankYou/ThankYou";
import TestPage from "./pages/test/TestPage";
//vitals
import reportWebVitals from "./reportWebVitals";

// import App from './App';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* <HeaderIndex /> */}
    <Header />
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/App" element={<App />} />
        <Route path="/Distributors" element={<DistributorsIndex />} />
        <Route path="/Manufacturers" element={<Manufacturers />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
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
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
