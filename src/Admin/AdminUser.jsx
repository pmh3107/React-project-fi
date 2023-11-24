import React, { useEffect, useState } from "react";
import HeaderAdmin from "./components/HeaderAdmin";
import { db } from "../Firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { deleteUser } from "firebase/auth";
import { auth } from "../Firebase";
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
  const handleDelete = async (nameId) => {
    const storedIsLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";

    if (storedIsLoggedIn) {
      const userRef = doc(db, "user", nameId);
      try {
        await deleteUser(auth, nameId);
        console.log("delete auth successFull !");
        await deleteDoc(userRef);
        console.log("delete firestore successFull !");

        setUserInfo((prevInfo) =>
          prevInfo.filter((info) => info.id !== nameId)
        );
      } catch (error) {
        console.error("Error deleting:", error);
      }
    } else {
      alert("Không có quyền user để xóa");
    }
  };
  return (
    <div className="cart-info">
      <div className="cart-info__top">
        <h2 className="cart-info__heading cart-info__heading--lv2">
          Thông tin người dùng
        </h2>
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
                <td>{info.id}</td>
                <td>{info.email}</td>
                <td>{info.phone}</td>
                <td className="admin__action">
                  <div className="admin__action--container">
                    <button className="btn btn--primary">
                      Chỉnh sửa thông tin
                    </button>
                    <button
                      onClick={() => handleDelete(info.id)}
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
function AdminUser() {
  return (
    <>
      <HeaderAdmin />
      <main className="container admin">
        <TableDataUser />
      </main>
    </>
  );
}
export default AdminUser;
