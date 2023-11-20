import React, { useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./pages/Main";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../Firebase";

const HomePage = () => {
  useEffect(() => {
    document.title = "Xe lướt miền trung | Trang chủ";
    // Hàm tạo
    // const addHondaCivicRsData = async () => {
    //   try {
    //     // Tạo document con "HONDA_CIVIC_RS"
    //     const hondaCivicRsDocRef = doc(db, "cars", "VINFAST LUX A 2.0 PLUS");
    //     await setDoc(hondaCivicRsDocRef, {
    //       // Thông tin về mô hình xe HONDA CIVIC RS
    //       brand: "VINFAST",
    //       name: "VINFAST LUX A 2.0 PLUS",
    //       kmTraveled: 37000,
    //       register: "20/12/2023",
    //       price: 569,
    //       year: 2021,
    //       img: "https://firebasestorage.googleapis.com/v0/b/project-uth-fi.appspot.com/o/ImagesVinFastLuxA%2Flux-a-mau-trang.jpg?alt=media&token=053a6c69-445b-4c5b-860d-4a803bbf78c1",
    //       img1: "https://firebasestorage.googleapis.com/v0/b/project-uth-fi.appspot.com/o/ImagesVinFastLuxA%2Flux-a-mau-trang-1.jpg?alt=media&token=eb08ecfc-6609-4bea-b7d5-944459f3fec4",
    //       img2: "https://firebasestorage.googleapis.com/v0/b/project-uth-fi.appspot.com/o/ImagesVinFastLuxA%2Flux-a-mau-trang-2.jpg?alt=media&token=51d0cbc6-7ef1-44cc-833f-a19a3d38eb26",
    //       img3: "https://firebasestorage.googleapis.com/v0/b/project-uth-fi.appspot.com/o/ImagesVinFastLuxA%2Flux-a-mau-trang-3.jpg?alt=media&token=a8b83dcf-af4d-4b3c-8d6b-f87f73b9db68",
    //     });

    //     console.log("Document created successfully!");
    //   } catch (error) {
    //     console.error("Error adding  data:", error);
    //   }
    // };

    // // Gọi hàm để thêm dữ liệu
    // addHondaCivicRsData();
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default HomePage;
