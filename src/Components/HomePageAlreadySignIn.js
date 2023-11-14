import React, { useEffect } from "react";
import HeaderAlreadySignIn from "./layout/HeaderAlreadySignIn";
import Footer from "./layout/Footer";
import Main from "./pages/Main";
function HomePage() {
  useEffect(() => {
    document.title = "Xe lướt miền Trung | Trang chủ ";
  }, []);
  return (
    <>
      <HeaderAlreadySignIn />
      <Main />
      <Footer />
    </>
  );
}

export default HomePage;
