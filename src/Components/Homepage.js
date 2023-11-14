import React, { useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./pages/Main";
function HomePage() {
  useEffect(() => {
    document.title = "Xe lướt miền trung | Trang chủ";
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default HomePage;
