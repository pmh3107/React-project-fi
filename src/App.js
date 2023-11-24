import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage";
import ContactPage from "./Components/ContactPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ResetPassWord from "./Components/ResetPassword";
import ProductCustom from "./Components/ProductCustom";
import ProductDetailTotal from "./Components/ProductDetailTotal";
import Admin from "./Admin/Admin";
import Deposit from "./Components/Deposit";
import User from "./Components/User";
import Error404 from "./Components/Error";
import LoginAdmin from "./Admin/LoginAdmin";
import { useAuth } from "./Components/AuthContext";
function App() {
  const { setIsLoggedIn } = useAuth();

  useEffect(() => {
    const checkAndRestoreLogin = () => {
      const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      console.log(storedIsLoggedIn);
      if (storedIsLoggedIn) {
        setIsLoggedIn(storedIsLoggedIn);
      }
    };

    checkAndRestoreLogin();
  }, [setIsLoggedIn]);
  return (
    <Routes>
      <Route path="/:userId" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/resetPass" element={<ResetPassWord />} />
      <Route path="/motifiProduct/:Price" element={<ProductCustom />} />
      <Route path="/motifiProduct/:brandTitle" element={<ProductCustom />} />
      <Route path="/motifiProduct" element={<ProductCustom />} />
      <Route path="/user" element={<User />} />
      <Route path="/loginAdmin" element={<LoginAdmin />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/product/:productID" element={<ProductDetailTotal />} />
      <Route path="/404" element={<Error404 />} />
    </Routes>
  );
}

export default App;
