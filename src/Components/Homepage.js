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
    //     const hondaCivicRsDocRef = doc(db, "cars", "MERCEDES BENZ GLC 200");
    //     await setDoc(hondaCivicRsDocRef, {
    //       // Thông tin về mô hình xe HONDA CIVIC RS
    //       brand: "MERCEDES",
    //       name: "MERCEDES BENZ GLC 200",
    //       kmTraveled: 12000,
    //       register: "23/2/2024",
    //       price: 1669,
    //       year: 2022,
    //       img: "https://firebasestorage.googleapis.com/v0/b/project-uth-fi.appspot.com/o/ImagesFORD%2FMERCEDES%20BENZ%20GLC%20200.jpg?alt=media&token=562b1c97-1a01-4b55-a19c-d1135b009dcd",
    //       img1: "https://firebasestorage.googleapis.com/v0/b/project-uth-fi.appspot.com/o/ImagesFORD%2FMERCEDES%20BENZ%20GLC%202002.jpg?alt=media&token=1116bc04-3cc5-469a-8a43-f447b32d6b92",
    //       img2: "https://firebasestorage.googleapis.com/v0/b/project-uth-fi.appspot.com/o/ImagesFORD%2Fmercedes-glc-2MERCEDES%20BENZ%20GLC%20200.vn-3.jpg?alt=media&token=4e17f742-9354-45ac-8f39-314a42769d16",
    //       // img3: "https://firebasestorage.googleapis.com/v0/b/project-uth-fi.appspot.com/o/imagesTOYOTA%2FTOYOTA%20RAIZE1.jpg?alt=media&token=48d79360-9cd9-4752-8068-34ee7c8fc0da",
    //     });

    //     console.log("Document created successfully!");
    //   } catch (error) {
    //     console.error("Error adding  data:", error);
    //   }
    // };

    // Gọi hàm để thêm dữ liệu
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
