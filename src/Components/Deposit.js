import React, { useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import FromDeposit from "./pages/FromDeposit";

export default function Deposit() {
  useEffect(() => {
    document.title = "Xe lướt miền Trung | Đặt cọc";
  }, []);
  return (
    <>
      <Header />
      <FromDeposit />
      <Footer />
    </>
  );
}
