import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Homepage";
import ContactPage from "./Components/ContactPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ResetPassWord from "./Components/ResetPassword";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/signIn" Component={SignIn} />
        <Route path="/signUp" Component={SignUp} />
        <Route path="/resetPass" Component={ResetPassWord} />
      </Routes>
    </Router>
  );
}

export default App;
