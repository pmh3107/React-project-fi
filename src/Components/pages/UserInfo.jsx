import React, { useEffect, useState } from "react";
import { auth, db } from "../../Firebase";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
// Catch data and show
function InfoUser(props) {
  return (
    <div className="col-4 col-xl-12">
      <div className="cart-info">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/project-uth-fi.appspot.com/o/web%2Fuser.png?alt=media&token=abcbe925-f321-44f4-805d-27931d8a7de7"
          alt=""
          className="top-act__avatar user__avatar"
        />
        <h2 className="cart-info__heading cart-info__heading--lv2 user__heading">
          Thông tin người dùng
        </h2>
        <div className="cart-info__separate" />
        <article className="payment-item payment-item__customs">
          <h3 className="payment-item__title">Họ và tên : {props.userName}</h3>
          <h3 className="payment-item__title">Email : {props.userEmail}</h3>
          <h3 className="payment-item__title">
            Số điện thoại : {props.userPhone}
          </h3>
        </article>
      </div>
    </div>
  );
}
// show notification
// Catch data and show
function Notify(props) {
  return (
    <div className="cart-info">
      <h2 className="cart-info__heading cart-info__heading--lv2 user__heading">
        Thông báo!
      </h2>
      <div className="cart-info__separate" />
      <article className="payment-item payment-item__customs">
        <h3 className="payment-item__title">
          Đơn đặt cọc xe{" "}
          <span className="payment-item__title--hl">{props.carName}</span> của
          quý khách đã được xác nhận, kính mong quý khách đến làm thủ tục nhận
          xe vào <span className="payment-item__title--hl">{props.day}</span>.
        </h3>
        <h3 className="payment-item__title">
          Cám ơn quý khách đã tin tưởng và mua xe !
        </h3>
      </article>
      <button
        onClick={props.hideTag}
        className="payment-item__btn btn btn-primary"
      >
        Ẩn
      </button>
    </div>
  );
}
// show car saved of user
function InfoCarSaved(props) {
  return (
    <div className="cart-info">
      <div className="cart-info__top">
        <h2 className="cart-info__heading cart-info__heading--lv2">
          Thông tin xe đã lưu
        </h2>
      </div>
      <div className="cart-info__separate" />
      <article className="payment-item payment-item__customs">
        <img
          src={props.carImg}
          className="payment-item__img user__carInfo--img"
          alt=""
        />
        <h3 className="payment-item__title">Tên xe : {props.carName}</h3>
        <h3 className="payment-item__title">Năm sản xuất : {props.carYear}</h3>
        <h3 className="payment-item__title">
          Số km đã đi : {props.carKmTraveled} km
        </h3>
        <h3 className="payment-item__title">
          Hạn đăng kiểm : {props.carRegistry}
        </h3>
        <h3 className="payment-item__title">Bảo hành : 1 năm</h3>
      </article>
      <div className="prod-info__card">
        <div className="prod-info__row">
          <button
            onClick={props.onClick}
            className="btn btn--primary prod-info__add-to-cart"
          >
            Xem thông tin xe
          </button>
          <button
            onClick={props.onClickbuy}
            className="btn btn--primary prod-info__add-to-cart"
          >
            Đặt cọc xe
          </button>
          <button
            onClick={props.onClickDelete}
            className="btn btn--primary prod-info__add-to-cart user__delete"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}

function User() {
  const [userInfo, setUserInfo] = useState(null);
  const [savedCars, setSavedCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userAlert, setUserAlert] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Xe lướt miền Trung | User ";
    // fetch data
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        const userRef = doc(db, "users", uid);
        const savedCarsCollection = collection(userRef, "saveCars");
        try {
          // fetch data user
          const userDataCollection = collection(db, "users");
          const userInfo = await getDoc(doc(userDataCollection, uid));
          setUserAlert(userInfo.data() || {});
          const userSnap = await getDoc(userRef);
          const querySnapshot = await getDocs(savedCarsCollection);
          // ternary operation
          // check user data if true -> fetch data if false -> null
          const userData = userSnap.exists() ? userSnap.data() : null;
          // fetch all cars saved
          const carsData = querySnapshot.docs.map((doc) => doc.data());
          setUserInfo(userData);
          setSavedCars(carsData);
        } catch (error) {
          console.error("Error Code:", error.code);
        } finally {
          setLoading(false);
        }
      }
    };
    const checkAlert = () => {
      const alertValue = userAlert.confirm;
      if (alertValue === true) {
        setShowAlert(true);
      } else {
        setShowAlert(false);
      }
    };
    checkAlert();
    fetchUserData();
  }, [savedCars, userAlert.confirm]);
  // Link to page
  const handleClick = (car) => {
    navigate(`/product/${car.id}`, { state: { productData: car } });
  };
  const ClickBuy = (car) => {
    navigate(`/deposit/`, { state: { productData: car } });
  };
  // Delete car saved
  const handleDeleteCar = async (carId) => {
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
      const carRef = doc(db, "users", uid, "saveCars", carId);

      try {
        await deleteDoc(carRef);
        // Update the local state after successful deletion
        // Use previous id data check with new id if match -> delete id
        setSavedCars((prevCars) => prevCars.filter((car) => car.id !== carId));
      } catch (error) {
        console.error("Error deleting car:", error);
      }
    }
  };
  const hide = (e) => {
    setShowAlert(false);
  };
  if (loading) {
    return <p className="user__error">Loading...</p>;
  }
  return (
    <main className="container user">
      <div className="row gy-xl-3">
        {userInfo ? (
          <InfoUser
            userName={userInfo.name}
            userEmail={userInfo.email}
            userPhone={userInfo.phone}
          />
        ) : (
          <p>User data not available</p>
        )}
        <div className="col-8 col-xl-12">
          {showAlert ? (
            <Notify
              carName={userAlert.car}
              day={userAlert.dayPickUp}
              hideTag={() => hide()}
            />
          ) : null}
          {savedCars?.map((car, index) => (
            <InfoCarSaved
              key={index}
              carImg={car.img}
              carName={car.name}
              carYear={car.year}
              carKmTraveled={car.kmTraveled}
              carRegistry={car.register}
              onClick={() => handleClick(car)}
              onClickbuy={() => ClickBuy(car)}
              onClickDelete={() => handleDeleteCar(car.name)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default User;
