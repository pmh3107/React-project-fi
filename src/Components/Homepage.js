import React, { useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./pages/Main";

const HomePage = () => {
  useEffect(() => {
    document.title = "Xe lướt miền trung | Trang chủ";

    // const addCarData = async () => {
    //   const carDataCollection = collection(db, "VINFAST");
    //   const carDocRef = doc(carDataCollection, "VINFAST LUX A 2.0 PLUS");

    //   try {
    //     await setDoc(carDocRef, {
    //       img: "https://firebasestorage.googleapis.com/v0/b/project-uth-fi.appspot.com/o/ImagesVinFastLuxA%2FLUX%20A.jpg?alt=media&token=fdce2c61-2591-4c1a-bd16-1d2ce4db2f6a",
    //       name: "HONDA CIVIC RS",
    //       kmTraveled: 37000,
    //       year: "2021",
    //       register: "20/12/2023",
    //       price: 569,
    //     });

    //     console.log("Document successfully written!");
    //   } catch (error) {
    //     console.error("Error writing document: ", error);
    //   }
    // };

    // addCarData();
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
