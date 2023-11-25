import React, { useEffect, useState } from "react";
import Product from "./Product";
import IconSearch from "../assets/icon/search.svg";
import { db } from "../../Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";

function TotalProduct() {
  // Transfer data when lick form link before
  const location = useLocation();
  const data = location.state && location.state.productData;
  // link to product pages with data of product
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
          // filter by price
          const priceQuery = query(
            carsCollectionRef,
            where("price", ">=", data.minPrice),
            where("price", "<=", data.maxPrice)
          );
          querySnapshot = await getDocs(priceQuery);
        } else if (typeof data === "string") {
          // filter by brand
          const brandQuery = query(
            carsCollectionRef,
            where("brand", "==", data)
          );
          querySnapshot = await getDocs(brandQuery);
        } else {
          // Not filter data, fetch all
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
    // Check input have value
    if (searchInput.trim() !== "") {
      const brandName = searchInput.toUpperCase();
      try {
        // call data and compare
        const carsCollectionRef = collection(db, "cars");
        const brandQuery = query(
          carsCollectionRef,
          where("brand", "==", brandName)
        );
        // Take data when compare
        // check all field in data and set id for data
        // add data in to carArray
        const querySnapshot = await getDocs(brandQuery);
        const carDataArray = [];
        querySnapshot.forEach((doc) => {
          const carData = { ...doc.data(), id: doc.id };
          carDataArray.push(carData);
        });
        // if have data set it into Car data
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
