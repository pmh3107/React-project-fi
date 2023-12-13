import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../Firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import LogoPrimary from "./commons/Logo";
import IconBackground from "./assets/authImg/intro.svg";
import EmailIcon from "./assets/icon/message.svg";
import IconError from "./assets/icon/form-error.svg";
import LockIcon from "./assets/icon/lock.svg";

function BannerLeft() {
  return (
    <div className="auth__intro d-md-none">
      <img src={IconBackground} alt="" className="auth__intro-img" />
      <p className="auth__intro-text">
        Uy tín - Chất lượng là những điều quan trọng mà tập thể Xe lướt miền
        Trung hướng đến.
      </p>
    </div>
  );
}
export default function SignIn() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    document.title = "Xe lướt miền Trung | Đăng nhập";
  }, []);
  // catch data when input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((data) => ({ ...data, [name]: value }));
  };

  const signIn = async (e) => {
    try {
      e.preventDefault();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      // Fetch user data after successful login
      const userId = userCredential.user.uid;
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        login(userData);
        console.log("User Data:", userData);
      }
      setError("");
      navigate(`/${userId}`);
    } catch (error) {
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      if (error.code === "auth/invalid-login-credentials") {
        setError("Tên đăng nhập hoặc mật khẩu không đúng ...");
      } else {
        setError("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
      }
    }
  };
  return (
    <>
      <main className="auth">
        <BannerLeft />
        <div className="auth__content">
          <div className="auth__content-inner">
            <LogoPrimary />
            <h1 className="auth__heading">Xin chào!</h1>
            <p className="auth__desc">
              Chào mừng bạn đã quay lại với Xe lướt miền Trung. Hãy đăng nhập và
              khám phá những dòng xe mới nhé ☺️
            </p>
            <form
              action="/HomePage"
              className="form auth__form"
              onSubmit={signIn}
            >
              <div className="form__group">
                <div className="form__text-input">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email input"
                    className="form__input"
                    onChange={handleInputChange}
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
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form__input"
                    minLength="6"
                    onChange={handleInputChange}
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
                  Mật khẩu phải gồm 6 kí tự trở lên ...
                </p>
              </div>
              {error && <p className="form__alert">{error}</p>}
              <div className="form__group form__group--inline">
                <label className="form__checkbox">
                  <input
                    type="checkbox"
                    name=""
                    className="form__checkbox-input d-none"
                  />
                  <span className="form__checkbox-label">
                    Ghi nhớ đăng nhập
                  </span>
                </label>
                <a href="/resetPass" className="auth__link form__pull-right">
                  Quên mật khẩu ?
                </a>
              </div>

              <div className="form__group auth__btn-group">
                <button
                  type="submit"
                  className="btn btn--primary auth__btn form__submit-btn"
                >
                  Đăng Nhập
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
              <Link to="/signUp" className="auth__link auth__text-link">
                Đăng kí
              </Link>
            </p>
            <Link to="/loginAdmin" className="auth__link auth__text-link">
              bạn là Admin ?
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
