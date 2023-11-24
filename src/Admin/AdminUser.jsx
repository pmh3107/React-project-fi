import React, { useEffect, useState } from "react";
import HeaderAdmin from "./components/HeaderAdmin";
import { db, auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

function TableDataUser() {
  const [userInfo, setUserInfo] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const [showAddAdmin, setShowAddAdmin] = useState(false);
  const [showCusUser, setShowCusUser] = useState(false);
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [userCus, setUserCus] = useState({
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const handleAddUser = () => {
    setShowAddAdmin(true);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };
  const handleInputChangeCus = (e) => {
    const { name, value } = e.target;
    setUserCus((user) => ({ ...user, [name]: value }));
  };
  const handleCusUser = (name, id) => {
    setShowCusUser(true);
    setName(name);
    setUserId(id);
  };
  const customUser = async (name) => {
    try {
      if (!name || !userId || !userCus || !userCus.email || !userCus.phone) {
        console.error("Invalid parameters.");
        return;
      }

      const userDataColection = collection(db, "users");
      const userData = doc(userDataColection, userId);
      console.log(userData);
      await updateDoc(userData, {
        name: name,
        email: userCus.email,
        phone: userCus.phone,
      });

      alert("Sửa thông tin " + name + " thành công !");
      setName("");
      setUserId("");
      setUserCus("");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const addUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      const userDataColection = collection(db, "users");
      const userData = doc(userDataColection, userCredential.user.uid);

      await setDoc(userData, {
        name: user.name,
        email: user.email,
        phone: user.phone,
      });
      alert("Đăng ký tài khoản " + user.name + " thành công !");
      setUser({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
      setShowAddAdmin(false);
    } catch (error) {
      // Xử lý sau khi đăng ký thành công, có thể chuyển hướng trang hoặc hiển thị thông báo
      console.log("Error code:", error.code);
      console.log("Error message:", error.message);
      // Check if the error is due to the email already being in use
      if (error.code === "auth/email-already-in-use") {
        alert("Email đã được đăng ký! Vui lòng sử dụng email khác...");
      } else if (error.code === "auth/invalid-email") {
        alert("Email không hợp lệ ....");
      } else {
        console.error("An error occurred:", error);
        setError("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
      }
    }
  };
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

  const handleDelete = async (uid) => {
    const storedIsLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";

    if (storedIsLoggedIn) {
      const userRef = doc(db, "user", uid);

      try {
        await deleteDoc(userRef);
        console.log("Delete Firestore successful!");

        // Cập nhật state hoặc thực hiện các bước khác nếu cần
        setUserInfo((prevInfo) => prevInfo.filter((info) => info.id !== uid));
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
        <button className="btn btn--primary" onClick={handleAddUser}>
          Thêm tài khoản
        </button>
      </div>

      <div className="cart-info__separate" />
      {showAddAdmin && (
        <>
          <table className="admin__table">
            <tbody>
              <tr>
                <th>Họ và tên</th>
                <th>Email</th>
                <th>Số điện thoại</th>
              </tr>
              <tr>
                <td>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="name"
                    placeholder="Họ và tên"
                  />
                </td>
                <td>
                  <input
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </td>
                <td>
                  <input
                    onChange={handleInputChange}
                    type="tel"
                    name="phone"
                    placeholder="Số điện thoại"
                  />
                </td>
                <td>
                  <input
                    onChange={handleInputChange}
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                  />
                </td>
                <td>
                  <button
                    className="btn btn--primary"
                    onClick={() => addUser()}
                  >
                    Thêm
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cart-info__separate" />
        </>
      )}
      {error && <p className="form__alert">{error}</p>}
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
                <td className="admin__action">
                  <div className="admin__action--container">
                    <button
                      onClick={() => handleCusUser(info.name, info.id)}
                      className="btn btn--primary"
                    >
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
      <div className="cart-info__separate" />
      {showCusUser && (
        <table className="admin__table">
          <tbody>
            <tr>
              <th>Họ và tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
            </tr>
            <tr>
              <td>{name}</td>
              <td>
                <input
                  onChange={handleInputChangeCus}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </td>
              <td>
                <input
                  onChange={handleInputChangeCus}
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại"
                />
              </td>
              <td>
                <button
                  className="btn btn--primary"
                  onClick={() => customUser(name, userId)}
                >
                  Sửa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
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
