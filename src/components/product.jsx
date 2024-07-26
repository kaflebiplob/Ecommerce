import Footer from "./footer"
import Header from "./header"
import fourWone from "../assets/product-img/IMG_1274.JPG"
import fourWtwo from "../assets/product-img/IMG_1276.JPG"
import fourWthree from "../assets/product-img/IMG_1277.JPG"
import fourWfour from "../assets/product-img/IMG_1278.JPG"
import fourWfive from "../assets/product-img/IMG_1279.JPG"
import fourWsix from "../assets/product-img/IMG_1280.JPG"
import fourWseven from "../assets/product-img/IMG_1282.JPG"

function Shop(){

    return(
        <>
        <Header/>
        <section className="product-section">
        <div className="product-container mainproductcontainer">
          <div className="container product-container">
            <h1>
              <span>Our</span> Product
            </h1>
            <p>
              Our products are quality products directly imported. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sequi quam autem,
              nulla odio facere perferendis!
            </p>
          </div>
        </div>
        <h2>On sale</h2>
        <div className="product-lists">
          <div className="lists">
            <a href="">
              <img src={fourWone} alt="" />

              <div className="details">
                <h4>Protine Powder</h4>
                <span>$30.00</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWtwo} alt="" />

              <div className="details">
                <h4>Protine Powder</h4>
                <span>$22.00</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWthree} alt="" />

              <div className="details">
                <h4>Skipping-Rope</h4>
                <span>$12.00</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWfour} alt="" />

              <div className="details">
                <h4>Rope Pulling</h4>
                <span>$250.00</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWfive} alt="" style={{ background: "none" }} />
              <div className="details">
                <h4>Dumbell-4kg</h4>
                <span>$27.00</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWsix} alt="" />

              <div className="details">
                <h4>Dumbell-200LBS</h4>
                <span>$40.00</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWseven} alt="" />

              <div className="details">
                <h4>Cycling-Machine</h4>
                <span>$200.00</span>
              </div>
            </a>
          </div>
        </div>
      </section>
        <Footer/>
        </>
    )
}
export default Shop