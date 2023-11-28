import React, { useEffect, useState } from "react";
import HeaderAdmin from "./components/HeaderAdmin";
import { db } from "../Firebase";
import FilterIcon from "../Components/assets/icon/filter.svg";
import ArrowUp from "../Components/assets/icon/arrow-up.png";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  query,
  where,
} from "firebase/firestore";
function Filter({ setCarData, setNoDataFound }) {
  const [filterOptions, setFilterOptions] = useState({
    minPrice: "",
    maxPrice: "",
    brand: "",
    kmTraveled: "",
    year: "",
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
      } else if (filterOptions.kmTraveled !== "") {
        // filter by price
        const priceQuery = query(
          carsCollectionRef,
          where("kmTraveled", "<=", filterOptions.kmTraveled)
        );
        querySnapshot = await getDocs(priceQuery);
      } else if (filterOptions.year !== "") {
        // filter by price
        const priceQuery = query(
          carsCollectionRef,
          where("year", "==", filterOptions.year)
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
  return (
    <>
      <div className="filter-wrap ">
        <button
          className="filter-btn js-toggle admin__filter btn btn-primary"
          onClick={toggleFilter}
        >
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
              <div className="filter__separate" />
              <div className="filter__col">
                <label htmlFor="" className="form__label">
                  Số km tối đa đã đi
                </label>
                <div className="filter__form-group">
                  <div className="form__select-wrap admin__input">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="filter__form-input "
                      value={
                        filterOptions.kmTraveled === ""
                          ? ""
                          : filterOptions.kmTraveled
                      }
                      onChange={(e) =>
                        setFilterOptions({
                          ...filterOptions,
                          kmTraveled:
                            e.target.value === ""
                              ? ""
                              : parseFloat(e.target.value),
                        })
                      }
                    />
                    <p>km</p>
                  </div>
                </div>
              </div>
              <div className="filter__separate" />
              <div className="filter__col">
                <label htmlFor="" className="form__label">
                  Năm sản xuất
                </label>
                <div className="filter__form-group">
                  <div className="form__select-wrap admin__input">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="filter__form-input "
                      value={
                        filterOptions.year === "" ? "" : filterOptions.year
                      }
                      onChange={(e) =>
                        setFilterOptions({
                          ...filterOptions,
                          year:
                            e.target.value === ""
                              ? ""
                              : parseFloat(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="filter__row filter__footer">
            <button
              className="btn btn--text filter__cancel"
              onClick={() => toggleFilter()}
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
function TableCars() {
  const [noDataFound, setNoDataFound] = useState(false);
  const [carsInfo, setCarsInfo] = useState([]);
  const [showAddCar, setShowAddCar] = useState(false);
  const [showCusCar, setShowCusCar] = useState(false);

  const [car, setCar] = useState({
    brand: "",
    name: "",
    kmTraveled: "",
    register: "",
    price: 0,
    year: 0,
    img: "",
  });
  const [carCus, setCarCus] = useState({
    brand: "",
    name: "",
    kmTraveled: "",
    register: "",
    price: 0,
    year: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const carsCollection = collection(db, "cars");
        let querySnapshot = await getDocs(carsCollection);
        const carsDataArray = [];
        querySnapshot.forEach((doc) => {
          const carsData = { ...doc.data(), id: doc.id };
          carsDataArray.push(carsData);
        });
        if (carsDataArray.length > 0) {
          setCarsInfo(carsDataArray);
          setNoDataFound(false);
          console.log("Upload data from cars successfully");
        } else {
          setCarsInfo(null);
          setNoDataFound(true);
          console.log("No documents found in the 'users' collection!");
        }
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };
    fetchData();
  }, [car]);
  const handleDelete = async (id) => {
    const storedIsLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";

    if (storedIsLoggedIn) {
      const userRef = doc(db, "cars", id);

      try {
        await deleteDoc(userRef);
        setCarsInfo((prevInfo) => prevInfo.filter((info) => info.id !== id));
      } catch (error) {
        console.error("Error deleting:", error);
      }
    } else {
      alert("Không có quyền user để xóa");
    }
  };
  const handleAddCar = () => {
    setShowAddCar(true);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCar((car) => ({ ...car, [name]: value }));
  };
  const addCar = async () => {
    try {
      const carDocRef = doc(db, "cars", car.name);
      await setDoc(carDocRef, {
        brand: car.brand,
        name: car.name,
        kmTraveled: car.kmTraveled,
        register: car.register,
        price: car.price,
        year: car.year,
        img: car.img,
      });
      console.log("Delete Firestore successful!");
      alert("Thêm xe " + car.name + " thành công");
      setCar({
        brand: "",
        name: "",
        kmTraveled: "",
        register: "",
        price: 0,
        year: 0,
        img: "",
      });

      setShowAddCar(false);
      console.log("Document created successfully!");
    } catch (error) {
      console.error("Error adding  data:", error);
    }
  };
  const handleCustomCar = (cars) => {
    setCarCus({
      brand: cars.brand,
      name: cars.name,
    });
    console.log(carCus);
    setShowCusCar(true);
  };
  const handleInputChangeCus = (e) => {
    const { name, value } = e.target;
    setCarCus((car) => ({ ...car, [name]: value }));
  };
  const customCar = async () => {
    try {
      console.log(carCus);
      const userDataColection = collection(db, "cars");
      const userData = doc(userDataColection, carCus.name);
      await updateDoc(userData, {
        brand: carCus.brand,
        name: carCus.name,
        kmTraveled: carCus.kmTraveled,
        register: carCus.register,
        price: carCus.price,
        year: carCus.year,
      });
      alert("Sửa thông tin xe " + carCus.name + " thành công !");
      setShowCusCar(false);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div className="cart-info">
      <div className="cart-info__top">
        <h2 className="cart-info__heading cart-info__heading--lv2">
          Thông tin Xe đang bán
        </h2>
        <button onClick={handleAddCar} className="btn btn--primary">
          Thêm xe
        </button>
      </div>
      <div className="cart-info__separate" />
      <Filter setCarData={setCarsInfo} setNoDataFound={setNoDataFound} />
      {showAddCar && (
        <>
          <table className="admin__table">
            <tbody>
              <tr>
                <th>Thương hiệu</th>
                <th>Tên xe</th>
                <th>Km đã đi</th>
                <th>Ngày đăng kí</th>
                <th>Giá tiền</th>
                <th>Năm sx</th>
                <th>Hình ảnh</th>
              </tr>
              <tr>
                <td>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="brand"
                    placeholder="Hãng xe"
                  />
                </td>
                <td>
                  <input
                    onChange={handleInputChange}
                    type="tex"
                    name="name"
                    placeholder="Tên xe"
                  />
                </td>
                <td>
                  <input
                    onChange={handleInputChange}
                    type="number"
                    name="kmTraveled"
                    placeholder="Km đã đi"
                  />
                </td>
                <td>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="register"
                    placeholder="Đăng kiểm"
                  />
                </td>
                <td>
                  <input
                    onChange={handleInputChange}
                    type="number"
                    name="price"
                    placeholder="Giá tiền"
                  />
                </td>
                <td>
                  <input
                    onChange={handleInputChange}
                    type="number"
                    name="year"
                    placeholder="Năm sx"
                  />
                </td>
                <td>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="img"
                    placeholder="Link ảnh"
                  />
                </td>
                <td>
                  <button onClick={() => addCar()} className="btn btn--primary">
                    Thêm
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cart-info__separate" />
        </>
      )}
      {showCusCar && (
        <>
          <table className="admin__table">
            <tbody>
              <tr>
                <th>Thương hiệu</th>
                <th>Tên xe</th>
                <th>Km đã đi</th>
                <th>Ngày đăng kí</th>
                <th>Giá tiền</th>
                <th>Năm sx</th>
                {/* <th>Hình ảnh</th> */}
              </tr>
              <tr>
                <td>{carCus.brand}</td>
                <td>{carCus.name}</td>
                <td>
                  <input
                    onChange={handleInputChangeCus}
                    type="number"
                    name="kmTraveled"
                    placeholder="Km đã đi"
                  />
                </td>
                <td>
                  <input
                    onChange={handleInputChangeCus}
                    type="text"
                    name="register"
                    placeholder="Đăng kiểm"
                  />
                </td>
                <td>
                  <input
                    onChange={handleInputChangeCus}
                    type="number"
                    name="price"
                    placeholder="Giá tiền"
                  />
                </td>
                <td>
                  <input
                    onChange={handleInputChangeCus}
                    type="number"
                    name="year"
                    placeholder="Năm sx"
                  />
                </td>
                {/* <td>
                  <input
                    onChange={handleInputChangeCus}
                    type="text"
                    name="img"
                    placeholder="Link ảnh"
                  />
                </td> */}
                <td>
                  <button
                    onClick={() => customCar()}
                    className="btn btn--primary"
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cart-info__separate" />
        </>
      )}
      <table className="admin__table">
        <tbody>
          <tr>
            <th>Thương hiệu</th>
            <th>Tên xe</th>
            <th>Hình ảnh</th>
            <th>Giá tiền</th>
            <th>Năm sx</th>
            <th>Km đã đi</th>
            <th>Ngày đăng kí</th>
          </tr>
          {noDataFound ? (
            <p className="admin__noData">Không tìm thấy dữ liệu !</p>
          ) : (
            carsInfo?.map((cars) => (
              <tr key={cars.id}>
                <td>{cars.brand}</td>
                <td>{cars.name}</td>
                <td>
                  <img src={cars.img} alt="" className="admin__table--img" />
                </td>
                <td>{cars.price}</td>
                <td>{cars.year}</td>
                <td>{cars.kmTraveled}</td>
                <td>{cars.register}</td>
                <td className="admin__action">
                  <div className="admin__action--container">
                    <button
                      onClick={() => handleCustomCar(cars)}
                      className="btn btn--primary"
                    >
                      Chỉnh sửa
                    </button>
                    <button
                      onClick={() => handleDelete(cars.id)}
                      className="btn btn--primary delete"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
function AdminCars() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = "Xe lướt miền trung | admin";
    //Check login
    const checkLoggedIn = () => {
      const storedIsLoggedIn =
        localStorage.getItem("isAdminLoggedIn") === "false";
      if (storedIsLoggedIn) {
        setLoading(true);
      }
    };
    checkLoggedIn();
  }, []);
  if (loading) {
    return <p className="admin__error">Loading ...... </p>;
  }
  return (
    <>
      <HeaderAdmin />
      <main className="container admin">
        <TableCars />
      </main>
    </>
  );
}
export default AdminCars;
