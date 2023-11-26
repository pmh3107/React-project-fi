import React, { useEffect, useState } from "react";
import HeaderAdmin from "./components/HeaderAdmin";
import { db } from "../Firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";

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
  }, [contactInfo]);
  const handleDelete = async (nameId) => {
    const storedIsLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    if (storedIsLoggedIn) {
      const contactRef = doc(db, "CONTACT", nameId);
      try {
        await deleteDoc(contactRef);

        setContactInfo((prevInfo) =>
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
          Thông tin đơn liên hệ
        </h2>
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
            contactInfo?.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.address}</td>
                <td>{contact.title}</td>
                <td>{contact.content}</td>
                <td className="admin__action">
                  <div className="admin__action--container">
                    <button className="btn btn--primary">Phản hồi</button>
                    <button
                      onClick={() => handleDelete(contact.name)}
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

function AdminContact() {
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
        <TableContact />
      </main>
    </>
  );
}
export default AdminContact;
