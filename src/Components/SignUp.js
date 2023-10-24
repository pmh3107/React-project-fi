import React from "react";
import LogoPrimary from "./commons/Logo";
import IconBackground from "./assets/authImg/intro.svg";
import EmailIcon from "./assets/icon/message.svg";
import IconError from "./assets/icon/form-error.svg";
import LockIcon from "./assets/icon/lock.svg";

function InputSign(props) {
  return (
    <div className="form__group">
      <div className="form__text-input">
        <input
          type={props.type}
          name=""
          id=""
          placeholder={props.placeholder}
          className="form__input"
          minLength={props.minLength}
          required
        />
        <img src={props.icon} alt="" className="form__input-icon" />
        <img src={IconError} alt="" className="form__input-icon-error" />
      </div>
      <p className="form__error">{props.alertErr}</p>
    </div>
  );
}
function FormSignIn() {
  const inputOption = [
    {
      type: "email",
      placeholder: "Email",
      errorAlert: "Email chưa đúng ...",
      srcImg: EmailIcon,
    },
    {
      type: "password",
      placeholder: "Mật Khẩu",
      errorAlert: "Mật khẩu phải có ít nhất 6 kí tự ....",
      srcImg: LockIcon,
      minLength: "6",
    },
    {
      type: "password",
      placeholder: "Xác nhận mật khẩu",
      errorAlert: "Mật khẩu phải có ít nhất 6 kí tự ....",
      srcImg: LockIcon,
    },
  ];

  return (
    <form action="./" className="form auth__form">
      {inputOption.map((content, index) => (
        <InputSign
          key={index}
          type={content.type}
          placeholder={content.placeholder}
          icon={content.srcImg}
          alertErr={content.errorAlert}
          minLength={content.minLength}
        />
      ))}
      <div className="form__group form__group--inline">
        <label className="form__checkbox">
          <input
            type="checkbox"
            name=""
            id=""
            className="form__checkbox-input d-none"
          />
          <span className="form__checkbox-label">Ghi nhớ đăng nhập</span>
        </label>
      </div>
      <div className="form__group auth__btn-group">
        <button class="btn btn--primary auth__btn form__submit-btn">
          Đăng ký
        </button>
        <button class="btn btn--outline auth__btn btn--no-margin">
          <img src="./assets/icons/google.svg" alt="" class="btn__icon icon" />
          Đăng nhập với google
        </button>
      </div>
    </form>
  );
}
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
  return (
    <>
      <main className="auth">
        <BannerLeft />
        <div className="auth__content">
          <div className="auth__content-inner">
            <LogoPrimary />
            <h1 className="auth__heading">Đăng ký</h1>
            <p className="auth__desc">
              Tạo tài khoảng để nhận được hỗ trợ tốt nhất từ Xe lướt miền Trung
              nhé.
            </p>
            <FormSignIn />
            <p className="auth__text">
              Bạn đã có tài khoảng chưa ?
              <a href="./signIn" className="auth__link auth__text-link">
                Đăng nhập
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
