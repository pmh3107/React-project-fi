import React from "react";
import HeaderAlreadySignIn from "./layout/HeaderAlreadySignIn";
import Footer from "./layout/Footer";
import Main from "./pages/Main";
function HomePage() {
  return (
    <>
      <HeaderAlreadySignIn />
      <Main />
      <Footer />
    </>
  );
}

export default HomePage;
