import "./App.css";
import HomePage from "./pages/HomePage";
import Hero from "./components/Hero";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route index element={<HomePage />} path="/code" exact />
            <Route element={<AboutPage />} path="/about" />
          </Route>
          <Route element={<Hero />} path="/" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<SignupPage />} path="/signup" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
