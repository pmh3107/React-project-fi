import React from "react";
import BannerWeb from "./BannerWeb";
import Categories from "./Categories";
import TotalProduct from "./TotalProduct";
function Main() {
  return (
    <main className="container home">
      <BannerWeb />
      <Categories />
      <TotalProduct />
    </main>
  );
}
export default Main;
