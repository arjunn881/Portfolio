import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
const logo = require('../106763322-removebg-preview.png')


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["MERN-Stack"],
    });
  }, []);
  
  

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={logo} alt="img" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>ARJUNA NAYAK</h1>
          <h3>
            <span ref={textRef}>React  </span>  Developer
          </h3>
        </div>
        <a href="#portfolio">
          <img
            src="https://png2.cleanpng.com/sh/d758c60a2dbf0b00ace5d31c439f8820/L0KzQYm3UsA3N6FufZH0aYP2gLBuTflvbpDsitN5aHnmPbr1gB9vbZ0yiAJycnHvPbX2lB4uaaN3hAk2Znzyh37qiPFzfF46ealqM3K3doSBVfM5P189T6cCM0i2RYK8Ucc6PmE1Sac7M0C8PsH1h5==/kisspng-infographic-inconel-spiral-down-arrow-flow-chart-5a7a3b4f385c87.8757383515179600152309.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
