import React, { useState, useEffect } from "react";
import SlideShow1 from "../assets/slideshow/item-1.png";
import SlideShowSmall1 from "../assets/slideshow/item-1-md.png";
import SlideShowSmall2 from "../assets/slideshow/Item-2.png";
import SlideShow2 from "../assets/slideshow/Item-2-md.png";
import SlideShow3 from "../assets/slideshow/Item-3.png";

export default function BannerWeb() {
  const SlideShowData = [
    {
      src: SlideShow1,
      srcSmall: SlideShowSmall1,
      link: "#!",
    },
    {
      src: SlideShow2,
      srcSmall: SlideShowSmall2,
      link: "#!",
    },
    {
      src: SlideShow3,
      srcSmall: SlideShow3,
      link: "#!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // increase index to 1 after 5s
      setCurrentIndex((prevIndex) =>
        prevIndex === SlideShowData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval); // cancel interval when component canceled
    };
  }, [SlideShowData.length]);

  return (
    <div className="home__container">
      <div className="slideshow">
        <div className="slideshow__inner">
          {SlideShowData.map((item, index) => (
            <div
              key={index}
              className="slideshow__item"
              style={{
                display: index === currentIndex ? "block" : "none",
              }}
            >
              <a href={item.link} className="slideshow__link">
                <picture>
                  <source
                    media="(max-width: 767.98px)"
                    srcSet={item.srcSmall}
                  />
                  <img src={item.src} alt="" className="slideshow__img" />
                </picture>
              </a>
            </div>
          ))}
        </div>
        <div className="slideshow__page">
          <span className="slideshow__num">0</span>
          <span className="slideshow__slider" />
          <span className="slideshow__num">{currentIndex + 1}</span>
        </div>
      </div>
    </div>
  );
}
