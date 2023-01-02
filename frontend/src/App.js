import "./App.css";
import HomePage from "./pages/HomePage";
import Hero from "./components/Hero";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import AboutPage from "./pages/AboutPage";
import { UserProvider } from "./models/user-context";
import CompetitionPage from "./pages/CompetitionPage";
import CompetePage from "./pages/CompetePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <UserProvider>
      <>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route index element={<HomePage />} path="/competitions" exact />
              <Route element={<AboutPage />} path="/about" />
              <Route element={<CompetitionPage />} path="/competitions/:id" />
              <Route element={<CompetePage />} path="/competition/:id/:id" />
              <Route element={<ProfilePage />} path="/user/:id" />
            </Route>
            <Route element={<Hero />} path="/" />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<SignupPage />} path="/signup" />
          </Routes>
        </Router>
      </>
    </UserProvider>
  );
}

export default App;
