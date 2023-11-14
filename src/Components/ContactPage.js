import React, { useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
function HomePage() {
  useEffect(() => {
    document.title = "Xe lướt miền Trung | Liên hệ";
  }, []);
  return (
    <>
      <Header />

      <Footer />
    </>
  );
}

export default HomePage;
