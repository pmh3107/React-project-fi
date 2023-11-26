import React, { useEffect, useState } from "react";
import HeaderAdmin from "./components/HeaderAdmin";
import { db } from "../Firebase";
import { getDocs, collection } from "firebase/firestore";

function InfoAdmin(props) {
  return (
    <div className="col-4 col-xl-12">
      <div className="cart-info">
        <h2 className="cart-info__heading cart-info__heading--lv2 user__heading">
          Chào mừng quản trị viên !
        </h2>
        <div className="cart-info__separate" />
        <article className="payment-item payment-item__customs">
          <h3 className="payment-item__title">
            Số lượng sản phẩm : {props.numProduct}
          </h3>
          <h3 className="payment-item__title">
            Sô lượng user : {props.userNum}
          </h3>
          <h3 className="payment-item__title">
            Xe đặt cọc : {props.numDeposit}
          </h3>
          <h3 className="payment-item__title">
            Đơn liên hệ : {props.numContact}
          </h3>
        </article>
      </div>
    </div>
  );
}

function TableDataUser() {
  const [userInfo, setUserInfo] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const userCollection = collection(db, "users");
        let querySnapshot = await getDocs(userCollection);
        const userDataArray = [];
        querySnapshot.forEach((doc) => {
          const userData = { ...doc.data(), id: doc.id };
          userDataArray.push(userData);
        });
        if (userDataArray.length > 0) {
          setUserInfo(userDataArray);
          setNoDataFound(false);
          console.log("Upload data from cars successfully");
        } else {
          setUserInfo(null);
          setNoDataFound(true);
          console.log("No documents found in the 'users' collection!");
        }
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };
    fetchDataUser();
  }, []);
  const ClickToDepositPage = () => {
    window.location.href = "/adminUser";
  };
  return (
    <div className="cart-info">
      <div className="cart-info__top">
        <h2 className="cart-info__heading cart-info__heading--lv2">
          Thông tin người dùng
        </h2>
        <button onClick={ClickToDepositPage} className="btn btn--primary">
          Chi tiết{" "}
        </button>
      </div>
      <div className="cart-info__separate" />
      <table className="admin__table">
        <tbody>
          <tr>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
          </tr>
          {noDataFound ? (
            <p className="admin__noData">Không tìm thấy dữ liệu !</p>
          ) : (
            userInfo?.map((info) => (
              <tr key={info.id}>
                <td>{info.name}</td>
                <td>{info.email}</td>
                <td>{info.phone}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
function TableDeposit() {
  const [noDataFound, setNoDataFound] = useState(false);
  const [depositInfo, setDepositInfo] = useState([]);
  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const depositCollection = collection(db, "DEPOSIT");
        let querySnapshot = await getDocs(depositCollection);
        const depositDataArray = [];
        querySnapshot.forEach((doc) => {
          const depositData = { ...doc.data(), id: doc.id };
          depositDataArray.push(depositData);
        });
        if (depositDataArray.length > 0) {
          setDepositInfo(depositDataArray);
          setNoDataFound(false);
          console.log("Upload data from cars successfully");
        } else {
          setDepositInfo(null);
          setNoDataFound(true);
          console.log("No documents found in the 'users' collection!");
        }
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };
    fetchDataUser();
  }, []);
  const ClickToDepositPage = () => {
    window.location.href = "/adminDeposit";
  };
  return (
    <div className="cart-info">
      <div className="cart-info__top">
        <h2 className="cart-info__heading cart-info__heading--lv2">
          Thông tin đơn đặt cọc
        </h2>
        <button onClick={ClickToDepositPage} className="btn btn--primary">
          Chi tiết
        </button>
      </div>
      <div className="cart-info__separate" />
      <table className="admin__table">
        <tbody>
          <tr>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Tên xe</th>
            <th>Ngày nhận xe</th>
            <th>Ghi chú</th>
          </tr>
          {noDataFound ? (
            <p className="admin__noData">Không tìm thấy dữ liệu !</p>
          ) : (
            depositInfo?.map((depo) => (
              <tr key={depo.id}>
                <td>{depo.name}</td>
                <td>{depo.email}</td>
                <td>{depo.phone}</td>
                <td>{depo.car}</td>
                <td>{depo.dayPickUp}</td>
                <td>{depo.note}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
function TableCars({ carsCount }) {
  const [noDataFound, setNoDataFound] = useState(false);
  const [carsInfo, setCarsInfo] = useState([]);
  useEffect(() => {
    const fetchDataUser = async () => {
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
    fetchDataUser();
  }, []);
  const ClickToCarsPage = () => {
    window.location.href = "/adminCars";
  };
  return (
    <div className="cart-info">
      <div className="cart-info__top">
        <h2 className="cart-info__heading cart-info__heading--lv2">
          Thông tin Xe đang bán
        </h2>
        <button onClick={ClickToCarsPage} className="btn btn--primary">
          Chi tiết{" "}
        </button>
      </div>
      <div className="cart-info__separate" />
      <table className="admin__table">
        <tbody>
          <tr>
            <th>Thương hiệu</th>
            <th>Tên xe</th>
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
                <td>{cars.price}</td>
                <td>{cars.year}</td>
                <td>{cars.kmTraveled}</td>
                <td>{cars.register}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
function TableContact() {
  const [noDataFound, setNoDataFound] = useState(false);
  const [contactInfo, setContactInfo] = useState([]);
  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const contactCollection = collection(db, "CONTACT");
        let querySnapshot = await getDocs(contactCollection);
        const contactDataArray = [];
        querySnapshot.forEach((doc) => {
          const contactData = { ...doc.data(), id: doc.id };
          contactDataArray.push(contactData);
        });
        if (contactDataArray.length > 0) {
          setContactInfo(contactDataArray);
          setNoDataFound(false);
          console.log("Upload data from cars successfully");
        } else {
          setContactInfo(null);
          setNoDataFound(true);
          console.log("No documents found in the 'users' collection!");
        }
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };
    fetchDataUser();
  }, []);
  const ClickToContactPage = () => {
    window.location.href = "/adminContact";
  };
  return (
    <div className="cart-info">
      <div className="cart-info__top">
        <h2 className="cart-info__heading cart-info__heading--lv2">
          Thông tin đơn liên hệ
        </h2>
        <button onClick={ClickToContactPage} className="btn btn--primary">
          Chi tiết
        </button>
      </div>
      <div className="cart-info__separate" />
      <table className="admin__table">
        <tbody>
          <tr>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Tiêu đề</th>
            <th>Nội dung</th>
          </tr>
          {noDataFound ? (
            <p className="admin__noData">Không tìm thấy dữ liệu !</p>
          ) : (
            contactInfo?.map((depo) => (
              <tr key={depo.id}>
                <td>{depo.name}</td>
                <td>{depo.email}</td>
                <td>{depo.phone}</td>
                <td>{depo.address}</td>
                <td>{depo.title}</td>
                <td>{depo.content}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
function Admin() {
  const [loading, setLoading] = useState(false);
  const [userCount, setUserCount] = useState(0);
  const [carsCount, setCarsCount] = useState(0);
  const [depositCount, setDepositCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);
  useEffect(() => {
    document.title = "Trang quản lý | Xe lướt miền Trung";
    //Check login
    const checkLoggedIn = () => {
      const storedIsLoggedIn =
        localStorage.getItem("isAdminLoggedIn") === "false";
      if (storedIsLoggedIn) {
        setLoading(true);
      }
    };
    // fetch data
    const getUsersCount = async () => {
      const usersCollection = collection(db, "users");
      try {
        const querySnapshot = await getDocs(usersCollection);
        setUserCount(querySnapshot.size);
      } catch (error) {
        console.error("Error getting users count:", error);
      }
    };
    const getCarsCount = async () => {
      const carsCollection = collection(db, "cars");
      try {
        const querySnapshot = await getDocs(carsCollection);
        setCarsCount(querySnapshot.size);
      } catch (error) {
        console.error("Error getting users count:", error);
      }
    };
    const getDepositCount = async () => {
      const depositCollection = collection(db, "DEPOSIT");
      try {
        const querySnapshot = await getDocs(depositCollection);
        setDepositCount(querySnapshot.size);
      } catch (error) {
        console.error("Error getting users count:", error);
      }
    };
    const getContactCount = async () => {
      const ContactCollection = collection(db, "CONTACT");
      try {
        const querySnapshot = await getDocs(ContactCollection);
        setContactCount(querySnapshot.size);
      } catch (error) {
        console.error("Error getting users count:", error);
      }
    };
    getContactCount();
    getDepositCount();
    getCarsCount();
    getUsersCount();
    checkLoggedIn();
  }, []);
  if (loading) {
    return <p className="admin__error">Loading ...... </p>;
  }
  return (
    <>
      <HeaderAdmin />
      <main className="container admin">
        <div className="row gy-xl-3">
          <InfoAdmin
            userNum={userCount}
            numProduct={carsCount}
            numDeposit={depositCount}
            numContact={contactCount}
          />
          <div className="col-8 col-xl-12">
            <TableDeposit />
            <TableContact />
            <TableDataUser />
            <TableCars />
          </div>
        </div>
      </main>
    </>
  );
}
export default Admin;
