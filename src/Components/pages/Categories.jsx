import React from "react";
import { useNavigate } from "react-router-dom";
import ClassA from "../assets/category-item/A.jpg";
import ClassB from "../assets/category-item/B.png";
import ClassC from "../assets/category-item/C.jpg";
import ClassD from "../assets/category-item/D.jpg";

export default function Categories() {
  const categoryData = [
    {
      srcImg: ClassA,
      title: "190 triệu - 400 triệu",
      desc: "Các loại xe phổ thông hạng A: xe mini, xe thành thị cỡ nhỏ.",
      min: 200,
      max: 400,
    },
    {
      srcImg: ClassB,
      title: "400 triệu - 700 triệu",
      desc: "Các loại xe hạng B: xe bình dân cỡ nhỏ.",
      min: 401,
      max: 700,
    },
    {
      srcImg: ClassC,
      title: "550 triệu - 1 tỷ 950 triệu",
      desc: "Các loại xe hạng C: Xe bình dân cỡ vừa.",
      min: 550,
      max: 1950,
    },
    {
      srcImg: ClassD,
      title: "Trên 1 tỷ 300 triệu",
      desc: "Các loại xe sang hạng D.",
      min: 2000,
      max: 20000,
    },
  ];
  const navigate = useNavigate();

  const handleClick = (minPrice, maxPrice) => {
    navigate(`/motifiProduct/${minPrice}-${maxPrice}`, {
      state: { productData: { minPrice, maxPrice } },
    });
  };

  return (
    <>
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Phân khúc giá</h2>
        </div>
        <div className="home__cate row row-cols-2 row-cols-md-1">
          {categoryData.map((content, index) => (
            <div key={index} className="col">
              <button
                onClick={() => handleClick(content.min, content.max)}
                className="cate-item"
              >
                <img src={content.srcImg} alt="" className="cate-item__thumb" />
                <div className="cate-item__info">
                  <h3 className="cate-item__title">{content.title}</h3>
                  <p className="cate-item__desc">{content.desc}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
