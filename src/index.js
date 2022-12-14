//globals
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import ScrollToTop from "./components/common/scroll/ScrollToTop";
//routes:
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomeIndex from "./pages/Home/HomeIndex.js";
import App from "./pages/App/App";
import Distributors from "./pages/Distrubutors/Distrubutors";
import Manufacturers from "./pages/Manufacuters/Manufacters";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About.js";
import Terms from "./pages/TermsPrivacy/Terms/Terms";
import Privacy from "./pages/TermsPrivacy/Privacy/Privacy";
import Demo from "./pages/Demo/Demo";
import News from "./pages/News/News";
import ThankYou from "./pages/ThankYou/ThankYou";
import BluonLiveStores from "./pages/Maps/BluonLiveStores/BluonLiveStores";
import SignUp from "./pages/SignUp/SignUp";
import NotFoundPage from "./pages/404/NotFoundPage";
import MobileTerms from "./pages/TermsPrivacy/MobileTerms/MobileTerms";
//import AdLanding from "./pages/AdLanding/AdLanding";
//import TestPage from "./pages/test/TestPage";
//import LottieTest from './pages/test/LottieTest'
import CountUpTest from "./components/common/Counter/CountUpTest";
//vitals
import reportWebVitals from "./reportWebVitals";

import "./_index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* <HeaderIndex /> */}
    <Header />
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/App" element={<App />} />
        <Route path='/HVAC-APP-LP3' element={<App/>}/>
        <Route path="/Distributors" element={<Distributors />} />
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
        <Route 
          path='/Request-a-Demo'
          element={
            <Demo 
              formId='85050616-88e4-4c49-82e3-62df96cf221a'
              title='Request a Demo'
              desc='Submit the form and we will get in contact!'
              />
          }
        />
        <Route 
          path='/BluonLive-SignUp'
          element={
            <Demo 
              formId='bff42b73-2371-4b50-b95a-324b1fea5746'
              title='Sign up for Bluon Live!'
              desc='Submit the form and a Bluon professional will contact you ASAP!'
            />
          }
        />

        <Route path="/ThankYou" element={<ThankYou />} />
        {/* <Route path="TestPage" element={<CountUpTest />} /> */}
        <Route path='/BluonLiveStores' element={<BluonLiveStores/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Mobile-Terms-Conditions' element={<MobileTerms/>}/>
        <Route path='*' element={<Navigate to='/404'/>}/>
        <Route path="/404" element={<NotFoundPage/>} />
      </Routes>
    </ScrollToTop>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
