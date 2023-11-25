import React, { useEffect, useState } from "react";
import HeaderAdmin from "./components/HeaderAdmin";
import { db } from "../Firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
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
          setDepositInfo([]);
          setNoDataFound(true);
          console.log("No documents found in the 'DEPOSIT' collection!");
        }
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };
    fetchDataUser();
  }, [depositInfo]);
  const handleDelete = async (nameId) => {
    const storedIsLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    if (storedIsLoggedIn) {
      const depositRef = doc(db, "DEPOSIT", nameId);
      try {
        await deleteDoc(depositRef);

        setDepositInfo((prevInfo) =>
          prevInfo.filter((info) => info.id !== nameId)
        );
      } catch (error) {
        console.error("Error deleting :", error);
      }
    }
  };
  return (
    <div className="cart-info">
      <div className="cart-info__top">
        <h2 className="cart-info__heading cart-info__heading--lv2">
          Thông tin đơn đặt cọc
        </h2>
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
                <td className="admin__action">
                  <div className="admin__action--container">
                    <button className="btn btn--primary">Tạo hợp đồng</button>
                    <button
                      onClick={() => handleDelete(depo.name)}
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
function AdminDeposit() {
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
        <TableDeposit />
      </main>
    </>
  );
}
export default AdminDeposit;
