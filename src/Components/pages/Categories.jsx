import React from "react";
import ClassA from "../assets/category-item/A.jpg";
import ClassB from "../assets/category-item/B.png";
import ClassC from "../assets/category-item/C.jpg";
import ClassD from "../assets/category-item/D.jpg";

export default function Categories() {
  const categoryData = [
    {
      srcImg: ClassA,
      link: "#!",
      title: "190 triệu - 305 triệu",
      desc: "Các loại xe phổ thông hạng A: xe mini, xe thành thị cỡ nhỏ.",
    },
    {
      srcImg: ClassB,
      link: "#!",
      title: "335 triệu - 650 triệu",
      desc: "Các loại xe hạng B: xe bình dân cỡ nhỏ.",
    },
    {
      srcImg: ClassC,
      link: "#!",
      title: "550 triệu - 1 tỷ 950 triệu",
      desc: "Các loại xe hạng C: Xe bình dân cỡ vừa.",
    },
    {
      srcImg: ClassD,
      link: "#!",
      title: "Trên 1 tỷ 300 triệu",
      desc: "Các loại xe sang hạng D.",
    },
  ];
  return (
    <>
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Phân khúc giá</h2>
        </div>
        <div className="home__cate row row-cols-2 row-cols-md-1">
          {categoryData.map((content, index) => (
            <div key={index} className="col">
              <a href="#!">
                <article className="cate-item">
                  <img
                    src={content.srcImg}
                    alt=""
                    className="cate-item__thumb"
                  />
                  <div className="cate-item__info">
                    <h3 className="cate-item__title">{content.title}</h3>
                    <p className="cate-item__desc">{content.desc}</p>
                  </div>
                </article>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
