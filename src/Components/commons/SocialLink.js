import Facebook from "../assets/icon/facebook.svg";
import Youtube from "../assets/icon/youtube.svg";
import Twitter from "../assets/icon/twitter.svg";
import Tiktok from "../assets/icon/tiktok.svg";
import Linkedin from "../assets/icon/linkedin.svg";
import "../../css/style.css";
export default function Social() {
  const socialInfo = [
    {
      src: Facebook,
      theme: {
        background: "#4863a9",
      },
    },
    {
      src: Youtube,
      theme: {
        background: "#f00",
      },
    },
    {
      src: Tiktok,
      theme: {
        background: "#000",
      },
    },
    {
      src: Twitter,
      theme: {
        background: "#4999e6",
      },
    },
    {
      src: Linkedin,
      theme: {
        background: "#2f71ab",
      },
    },
  ];
  return (
    <>
      {socialInfo.map((item, index) => (
        <a href="#!" className="social-link" style={item.theme} key={index}>
          <img src={item.src} alt="" className="social-icon" />
        </a>
      ))}
    </>
  );
}
