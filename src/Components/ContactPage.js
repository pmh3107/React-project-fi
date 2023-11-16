import React, { useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import FromContact from "./pages/FromContact";
function HomePage() {
  useEffect(() => {
    document.title = "Xe lướt miền Trung | Liên hệ";
  }, []);
  return (
    <>
      <Header />
      <FromContact />
      <Footer />
    </>
  );
}

export default HomePage;
