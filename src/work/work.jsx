import { useState } from "react";
import "./work.scss";

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (

    <div className="works" id="works">

        <h1>Work</h1>

      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="https://png2.cleanpng.com/sh/589c75f9885f5a0f69c63c15e694ea62/L0KzQYm3UsA1N5l8fZH0aYP2gLBuTfxqdpYyjORyYX7qfLa0kPF1fJZ3hp97aXfrhH7okwJwf151htk2dILkfsT3ggJmdqUyiNtsdIX1dX68gcc4apQ3Tqs5ZnO7QXA7V8Q0QWc5SaMAMUe6SYe6WcA2QWQARuJ3Zx==/kisspng-line-triangle-pattern-right-arrow-png-transparent-picture-5a77bc2690fc81.4743964115177963905939.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="https://png2.cleanpng.com/sh/589c75f9885f5a0f69c63c15e694ea62/L0KzQYm3UsA1N5l8fZH0aYP2gLBuTfxqdpYyjORyYX7qfLa0kPF1fJZ3hp97aXfrhH7okwJwf151htk2dILkfsT3ggJmdqUyiNtsdIX1dX68gcc4apQ3Tqs5ZnO7QXA7V8Q0QWc5SaMAMUe6SYe6WcA2QWQARuJ3Zx==/kisspng-line-triangle-pattern-right-arrow-png-transparent-picture-5a77bc2690fc81.4743964115177963905939.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
    
  );
}