import React, { useEffect, useState } from "react";
import HeaderAdmin from "./components/HeaderAdmin";
import { db } from "../Firebase";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
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
