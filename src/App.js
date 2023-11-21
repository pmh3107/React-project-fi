import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage";
import HomePageAlreadySingIn from "./Components/HomePageAlreadySignIn";
import ContactPage from "./Components/ContactPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ResetPassWord from "./Components/ResetPassword";
import ProductCustom from "./Components/ProductCustom";
import ProductDetailTotal from "./Components/ProductDetailTotal";
import Admin from "./Admin/Admin";
import Deposit from "./Components/Deposit";
import Error404 from "./Components/Error";
// import "../css/style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/HomePage" element={<HomePageAlreadySingIn />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/resetPass" element={<ResetPassWord />} />
      <Route path="/motifiProduct/:Price" element={<ProductCustom />} />
      <Route path="/motifiProduct/:brandTitle" element={<ProductCustom />} />
      <Route path="/motifiProduct" element={<ProductCustom />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/product/:productID" element={<ProductDetailTotal />} />
      <Route path="/404" element={<Error404 />} />
    </Routes>
  );
}

export default App;
