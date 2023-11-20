import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Product from "./Product";
import { db } from "../../Firebase";
import { getDocs, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function TotalProduct() {
  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate(`/product/${data.id}`, { state: { productData: data } });
  };
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // lấy tất cả documents trong collection "cars"
        const carsCollectionRef = collection(db, "cars");
        const querySnapshot = await getDocs(carsCollectionRef);

        const carDataArray = [];

        // Lặp qua từng document trong collection và lấy dữ liệu
        querySnapshot.forEach((doc) => {
          const carData = { ...doc.data(), id: doc.id };
          carDataArray.push(carData);
        });

        // Kiểm tra xem có dữ liệu hay không trước khi cập nhật state
        if (carDataArray.length > 0) {
          setCarData(carDataArray);
          console.log("Upload data form cars successfully");
        } else {
          console.log("No documents found in the 'cars' collection!");
        }
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };
    // Gọi hàm để lấy dữ liệu
    fetchData();
  }, []);
  return (
    <>
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Xe lướt miền Trung</h2>
          <Filter />
        </div>
        <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 g-3">
          {carData?.map((data) => (
            <Product
              key={data.id}
              srcImg={data.img}
              price={data.price}
              title={data.name}
              kmNumber={data.kmTraveled}
              year={data.year}
              onClick={() => handleClick(data)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default TotalProduct;
