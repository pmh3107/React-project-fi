import React from "react";
import Icon404 from "../Components/assets/icon/error404.svg";
function Error404() {
  return (
    <main className="error">
      <div className="error__container">
        <figure>
          <img src={Icon404} alt="error" />
        </figure>
        <div className="error__content">
          <a
            href="/"
            className="error__content--btn btn btn--primary btn--rounded"
          >
            Trở về trang chủ
          </a>
        </div>
      </div>
    </main>
  );
}
export default Error404;
