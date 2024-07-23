import Footer from "./footer";
import Header from "./header";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import jktyre from "../assets/images/slider-tyre-img.webp";
import mrfTyre from "../assets/images/slider-mrf-img.jpg";
import { useState } from "react";
const images = [jktyre, mrfTyre];

function Home() {
  const [currentImage, setCurrentImages] = useState(1);
  function nextImage() {
    setCurrentImages(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }
  function prevImage() {
    setCurrentImages(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }

  return (
    <>
      <Header />
      <div className="home-section">
        <div className="main-section">
          <div className="leftarrow" onClick={prevImage}>
            <span>
              <FaArrowLeft />
            </span>
          </div>
          <div className="main-image images">
            {images.map(
              (image, index) =>
                currentImage === index && (
                  <div key={image} className="slider">
                    <img src={image} alt="images" />
                  </div>
                )
            )}
          </div>

          <div className="rightarrow" onClick={nextImage}>
            <span>
              {" "}
              <FaArrowRight />
            </span>
          </div>
        </div>
        <div className="homepart">
          <div className="bodypart">
            <h1 className="body-h1">Welcome to abi trade link pvt ltd</h1>
            <p className="body-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              mollitia vero aliquam assumenda labore. Voluptatibus pariatur
              eveniet ducimus delectus rerum.
            </p>
            <button className="h-btm">
              <Link to={"/shop"}> visit shop</Link>
            </button>
          </div>
          <div className="h-img">
            <img src="../homeimg.jpg" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
