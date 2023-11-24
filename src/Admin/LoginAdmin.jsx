import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";
import LogoPrimary from "../Components/commons/Logo";
import EmailIcon from "../Components/assets/icon/message.svg";
import IconError from "../Components/assets/icon/form-error.svg";
import LockIcon from "../Components/assets/icon/lock.svg";

export default function SignInAdmin() {
  const { loginAdmin } = useAuth();
  useEffect(() => {
    document.title = "Xe lướt miền Trung | Admin";
  }, []);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      if (loginData.email === "admin@gmail.com") {
        loginAdmin(userCredential);
        navigate(`/Admin`);
      } else {
        setError("Thông tin đăng nhập admin không chính xác !");
      }
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
        <div className="auth__content">
          <div className="auth__content-inner">
            <LogoPrimary />
            <h1 className="auth__heading">Xin chào Admin!</h1>
            <p className="auth__desc">
              Chào mừng bạn đã quay lại với trang quản lý !
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
              <div className="form__group auth__btn-group">
                <button
                  type="submit"
                  className="btn btn--primary auth__btn form__submit-btn"
                >
                  Đăng Nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
