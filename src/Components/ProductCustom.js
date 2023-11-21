import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import TotalProduct from "./pages/TotalProduct";

function MotifiProduct() {
  return (
    <>
      <Header />
      <main className="container home">
        <TotalProduct />
      </main>
      <Footer />
    </>
  );
}
export default MotifiProduct;
