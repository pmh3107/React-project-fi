import React, { useEffect, useState } from "react";
// import Filter from "./Filter";
import Product from "./Product";
import IconSearch from "../assets/icon/search.svg";
import { db } from "../../Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";

function TotalProduct() {
  const location = useLocation();
  const data = location.state && location.state.productData;
  // console.log(data);
  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate(`/product/${data.id}`, { state: { productData: data } });
  };
  const [carData, setCarData] = useState(null);
  const [noDataFound, setNoDataFound] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const carsCollectionRef = collection(db, "cars");
        let querySnapshot;

        if (
          data &&
          data.minPrice !== undefined &&
          data.maxPrice !== undefined
        ) {
          // Lọc theo khoảng giá
          const priceQuery = query(
            carsCollectionRef,
            where("price", ">=", data.minPrice),
            where("price", "<=", data.maxPrice)
          );
          querySnapshot = await getDocs(priceQuery);
        } else if (typeof data === "string") {
          // Lọc theo thương hiệu
          const brandQuery = query(
            carsCollectionRef,
            where("brand", "==", data)
          );
          querySnapshot = await getDocs(brandQuery);
        } else {
          // Không có điều kiện lọc, lấy tất cả
          querySnapshot = await getDocs(carsCollectionRef);
        }

        const carDataArray = [];

        querySnapshot.forEach((doc) => {
          const carData = { ...doc.data(), id: doc.id };
          carDataArray.push(carData);
        });

        if (carDataArray.length > 0) {
          setCarData(carDataArray);
          setNoDataFound(false);
          console.log("Upload data from cars successfully");
        } else {
          setCarData(null);
          setNoDataFound(true);
          console.log("No documents found in the 'cars' collection!");
        }
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };

    fetchData();
  }, [data]);
  const handleSearch = async () => {
    // Kiểm tra xem searchInput có giá trị hay không
    if (searchInput.trim() !== "") {
      const brandName = searchInput.toUpperCase();
      try {
        const carsCollectionRef = collection(db, "cars");
        const brandQuery = query(
          carsCollectionRef,
          where("brand", "==", brandName)
        );
        const querySnapshot = await getDocs(brandQuery);

        const carDataArray = [];

        querySnapshot.forEach((doc) => {
          const carData = { ...doc.data(), id: doc.id };
          carDataArray.push(carData);
        });

        if (carDataArray.length > 0) {
          setCarData(carDataArray);
          setNoDataFound(false);
          console.log("Upload data from cars successfully");
        } else {
          setCarData(null);
          setNoDataFound(true);
          console.log("No documents found in the 'cars' collection!");
        }
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    }
  };
  return (
    <>
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Xe lướt miền Trung</h2>
          {/* <Filter /> */}

          <div className="search-bar d-md-flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="Nhập thương hiệu xe ..."
              className="search-bar__input"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="search-bar__submit" onClick={handleSearch}>
              <img src={IconSearch} alt="" className="search-bar__icon icon" />
            </button>
          </div>
        </div>

        {noDataFound ? (
          <p>Không tìm thấy thông tin sản xe yêu cầu ....</p>
        ) : (
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
        )}
      </section>
    </>
  );
}

export default TotalProduct;
