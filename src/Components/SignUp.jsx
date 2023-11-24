import React, { useEffect, useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../Firebase";
import LogoPrimary from "./commons/Logo";
import IconBackground from "./assets/authImg/intro.svg";
import EmailIcon from "./assets/icon/message.svg";
import IconError from "./assets/icon/form-error.svg";
import LockIcon from "./assets/icon/lock.svg";
import PhoneIcon from "./assets/icon/phone.svg";
import UserIcon from "./assets/icon/user.svg";

export default function SignIn() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    checkPassword: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };
  const checkPassword = (e) => {
    if (user.password !== user.checkPassword) {
      e.preventDefault();
      setError("Mật khẩu không khớp");
    }
  };
  const signUp = async (e) => {
    try {
      e.preventDefault();
      checkPassword();
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
      setError("");
      alert("Đăng ký tài khoản " + user.name + " thành công !");
      window.location.href = "/signIn";
      setUser({
        name: "",
        email: "",
        phone: "",
        password: "",
        checkPassword: "",
      });
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
    document.title = "Xe lướt miền Trung | Đăng ký";
  }, []);

  return (
    <>
      <main className="auth">
        <div className="auth__intro d-md-none">
          <img src={IconBackground} alt="" className="auth__intro-img" />
          <p className="auth__intro-text">
            Uy tín - Chất lượng là những điều quan trọng mà tập thể Xe lướt miền
            Trung hướng đến.
          </p>
        </div>
        <div className="auth__content">
          <div className="auth__content-inner">
            <LogoPrimary />
            <h1 className="auth__heading">Đăng ký</h1>
            <p className="auth__desc">
              Tạo tài khoảng để nhận được hỗ trợ tốt nhất từ Xe lướt miền Trung
              nhé.
            </p>
            <form
              action=""
              className="form auth__form"
              method="POST"
              onSubmit={signUp}
            >
              <div className="form__group">
                <div className="form__text-input">
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form__input"
                    required
                  />
                  <img src={UserIcon} alt="" className="form__input-icon" />
                  <img
                    src={IconError}
                    alt=""
                    className="form__input-icon-error"
                  />
                </div>
                <p className="form__error">Tên chưa đúng ...</p>
              </div>
              <div className="form__group">
                <div className="form__text-input">
                  <input
                    onChange={handleInputChange}
                    type="number"
                    name="phone"
                    placeholder="Phone number"
                    className="form__input"
                    required
                  />
                  <img src={PhoneIcon} alt="" className="form__input-icon" />
                  <img
                    src={IconError}
                    alt=""
                    className="form__input-icon-error"
                  />
                </div>
                <p className="form__error">Nhập số điện thoại .... </p>
              </div>
              <div className="form__group">
                <div className="form__text-input">
                  <input
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form__input"
                    required
                  />
                  <img src={EmailIcon} alt="" className="form__input-icon" />
                  <img
                    src={IconError}
                    alt=""
                    className="form__input-icon-error"
                  />
                </div>
                <p className="form__error">Email chưa đúng ...</p>
              </div>
              <div className="form__group">
                <div className="form__text-input">
                  <input
                    onChange={handleInputChange}
                    type="password"
                    name="password"
                    placeholder="password"
                    className="form__input"
                    minLength="6"
                    required
                  />
                  <img src={LockIcon} alt="" className="form__input-icon" />
                  <img
                    src={IconError}
                    alt=""
                    className="form__input-icon-error"
                  />
                </div>
                <p className="form__error">
                  Mật khẩu phải có ít nhất 6 kí tự ...
                </p>
              </div>
              <div className="form__group">
                <div className="form__text-input">
                  <input
                    onChange={handleInputChange}
                    type="password"
                    name="checkPassword"
                    placeholder="password again ...."
                    className="form__input"
                    minLength="6"
                    required
                  />
                  <img src={LockIcon} alt="" className="form__input-icon" />
                  <img
                    src={IconError}
                    alt=""
                    className="form__input-icon-error"
                  />
                </div>
                <p className="form__error">
                  Mật khẩu phải có ít nhất 6 kí tự ...
                </p>
              </div>
              {error && <p className="form__alert">{error}</p>}
              <div className="form__group form__group--inline">
                <label className="form__checkbox">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="form__checkbox-input d-none"
                  />
                  <span className="form__checkbox-label">
                    Ghi nhớ đăng nhập
                  </span>
                </label>
              </div>
              <div className="form__group auth__btn-group">
                <button
                  type="submit"
                  className="btn btn--primary auth__btn form__submit-btn"
                >
                  Đăng ký
                </button>
                <button className="btn btn--outline auth__btn btn--no-margin">
                  <img
                    src="./assets/icons/google.svg"
                    alt=""
                    className="btn__icon icon"
                  />
                  Đăng nhập với google
                </button>
              </div>
            </form>
            <p className="auth__text">
              Bạn đã có tài khoảng chưa ?
              <a href="/signIn" className="auth__link auth__text-link">
                Đăng nhập
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
