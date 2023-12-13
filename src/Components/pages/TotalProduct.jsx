import React, { useEffect, useState } from "react";
import Product from "./Product";
import IconSearch from "../assets/icon/search.svg";
import { db } from "../../Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";
import FilterIcon from "../assets/icon/filter.svg";
import ArrowUp from "../assets/icon/arrow-up.png";

function Filter({ setCarData, setNoDataFound }) {
  const [filterOptions, setFilterOptions] = useState({
    minPrice: "",
    maxPrice: "",
    brand: "",
  });
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const filterCar = async () => {
    try {
      const carsCollectionRef = collection(db, "cars");
      let querySnapshot;
      if (
        filterOptions.minPrice !== "" &&
        filterOptions.maxPrice !== "" &&
        filterOptions.brand !== ""
      ) {
        // filter by brand
        const brandName = filterOptions.brand.toUpperCase();
        const brandQuery = query(
          carsCollectionRef,
          where("price", ">=", filterOptions.minPrice),
          where("price", "<=", filterOptions.maxPrice),
          where("brand", "==", brandName)
        );
        querySnapshot = await getDocs(brandQuery);
      } else if (filterOptions.brand !== "") {
        // filter by brand
        const brandName = filterOptions.brand.toUpperCase();
        const brandQuery = query(
          carsCollectionRef,
          where("brand", "==", brandName)
        );
        querySnapshot = await getDocs(brandQuery);
      } else if (
        filterOptions.minPrice !== "" &&
        filterOptions.maxPrice !== ""
      ) {
        // filter by price
        const priceQuery = query(
          carsCollectionRef,
          where("price", ">=", filterOptions.minPrice),
          where("price", "<=", filterOptions.maxPrice)
        );
        querySnapshot = await getDocs(priceQuery);
      } else {
        // No filters applied
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
        setIsFilterVisible(false);
      } else {
        setCarData(null);
        setNoDataFound(true);
        console.log("No documents found in the 'cars' collection!");
      }
    } catch (error) {
      console.error("Error getting documents:", error);
    }
  };
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  const cancel = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  return (
    <>
      <div className="filter-wrap">
        <button className="filter-btn js-toggle" onClick={toggleFilter}>
          Bộ lọc
          <img src={FilterIcon} alt="" className="filter-btn__icon icon" />
        </button>
        <div
          id="home-filter"
          className={`filter ${isFilterVisible ? "" : "hide"}`}
        >
          <img src={ArrowUp} alt="" className="filter__arrow" />
          <h3 className="filter__heading">BỘ LỌC</h3>
          <form action="" className="filter__form form">
            <div className="filter__row filter__content">
              <div className="filter__col">
                <label htmlFor="" className="form__label">
                  Khoảng giá
                </label>
                <div className="filter__form-group filter__form-group--inline">
                  <div>
                    <label
                      htmlFor=""
                      className="form__label form__label--small"
                    >
                      Thấp nhất
                    </label>
                    <div className="filter__form-text-input filter__form-text-input--small">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="filter__form-input"
                        defaultValue="250tr"
                        value={
                          filterOptions.minPrice === ""
                            ? ""
                            : filterOptions.minPrice
                        }
                        onChange={(e) =>
                          setFilterOptions({
                            ...filterOptions,
                            minPrice:
                              e.target.value === ""
                                ? ""
                                : parseFloat(e.target.value),
                          })
                        }
                      />
                      <p>Triệu</p>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="form__label form__label--small"
                    >
                      Cao nhất
                    </label>
                    <div className="filter__form-text-input filter__form-text-input--small">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="filter__form-input"
                        defaultValue="10ty"
                        value={
                          filterOptions.maxPrice === ""
                            ? ""
                            : filterOptions.maxPrice
                        }
                        onChange={(e) =>
                          setFilterOptions({
                            ...filterOptions,
                            maxPrice:
                              e.target.value === ""
                                ? ""
                                : parseFloat(e.target.value),
                          })
                        }
                      />
                      <p>Triệu</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter__separate" />
              <div className="filter__col">
                <label htmlFor="" className="form__label">
                  Hãng xe
                </label>
                <div className="filter__form-group">
                  <div className="form__select-wrap">
                    <select
                      className="form__select"
                      value={filterOptions.brand}
                      onChange={(e) =>
                        setFilterOptions({
                          ...filterOptions,
                          brand: e.target.value,
                        })
                      }
                    >
                      <option value="">Hãng xe</option>
                      <option value="HONDA">Honda</option>
                      <option value="TOYOTA">Toyota</option>
                      <option value="VINFAST">Vinfast</option>
                      <option value="FORD">Ford</option>
                      <option value="KIA">KIA</option>
                      <option value="MERCEDES">Mercedes</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="filter__row filter__footer">
            <button
              className="btn btn--text filter__cancel"
              onClick={() => cancel()}
            >
              Hủy
            </button>
            <button
              onClick={() => filterCar()}
              className="btn btn--primary filter__submit"
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
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
          <Filter setCarData={setCarData} setNoDataFound={setNoDataFound} />
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
