import "./App.css";
import Footer from "./layout/Footer";
import Headers from "./layout/Header";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  const MainLayout = () => {
    return (
      <>
        <Headers />
        <Outlet />
        <Footer />
      </>
    );
  };

  const AuthLayout = () => {
    return (
      <>
        <Headers />
        <Outlet />
      </>
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
