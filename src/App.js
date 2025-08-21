import { Routes, Route, useNavigate } from "react-router-dom";
import Header from './pages/Header';
import Hero from './pages/Hero';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import CTA from './pages/CTA';
import Footer from './pages/Footer';
import SignIn from './pages/SignIn';
import GetStarted from './pages/GetStarted';

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Pricing />
                <Testimonials />
                <CTA />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <SignIn
                onBack={() => navigate("/")}
                onGetStarted={() => navigate("/getstarted")}
              />
            }
          />
          <Route
            path="/getstarted"
            element={
              <GetStarted
                onBack={() => navigate("/")}
                onSignIn={() => navigate("/signin")}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
