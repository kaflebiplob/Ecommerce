import Footer from "./footer";
import Header from "./header";
import fourWone from "../assets/product-img/IMG_1274.JPG";
import fourWtwo from "../assets/product-img/IMG_1276.JPG";
import fourWthree from "../assets/product-img/IMG_1277.JPG";
import fourWfour from "../assets/product-img/IMG_1278.JPG";
import fourWfive from "../assets/product-img/IMG_1279.JPG";
import fourWsix from "../assets/product-img/IMG_1280.JPG";
import fourWseven from "../assets/product-img/IMG_1282.JPG";
import fourWeight from "../assets/product-img/IMG_1283.JPG";
import batteryone from "../assets/product-img/IMG_1302.JPG";
import batterytwo from "../assets/product-img/IMG_1303.JPG";
import batterythree from "../assets/product-img/IMG_1304.JPG";
import batteryfour from "../assets/product-img/IMG_1307.JPG";
import lubricantsone from "../assets/product-img/IMG_1290.JPG";
import lubricantstwo from "../assets/product-img/IMG_1291.JPG";
import lubricantsthree from "../assets/product-img/IMG_1292.JPG";
import lubricantsfour from "../assets/product-img/IMG_1293.JPG";
import lubricantsfive from "../assets/product-img/IMG_1294.JPG";
import lubricantssix from "../assets/product-img/IMG_1295.JPG";
import lubricantsseven from "../assets/product-img/IMG_1296.JPG";
import BASone from "../assets/product-img/IMG_1297.JPG";
import BAStwo from "../assets/product-img/IMG_1298.JPG";
import twoWone from "../assets/product-img/IMG_1269.JPG";
import twoWtwo from "../assets/product-img/IMG_1270.JPG";
import twoWthree from "../assets/product-img/IMG_1272.jpg";
import twoWfour from "../assets/product-img/IMG_1284.JPG";
import twoWfive from "../assets/product-img/IMG_1285.JPG";
import twoWsix from "../assets/product-img/IMG_1287.JPG";
import fourWnine from "../assets/product-img/IMG_1273.jpg";
import fourWten from "../assets/product-img/IMG_1288.JPG";
import fourWeleven from "../assets/product-img/IMG_1300.JPG";

function Shop() {
  return (
    <>
      <Header />
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
        <h1 className="types">Four Wheelelers tyres</h1>
        <div className="product-lists">
          <div className="lists">
            <a href="">
              <img src={fourWone} alt="" />

              <div className="details">
                <h4>235/75R15(JK Tyre)</h4>
                <span>Rs:10500</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWtwo} alt="" />

              <div className="details">
                <h4>155/70R13(Ceat Tyre)</h4>
                <span>Rs:4500</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWthree} alt="" />

              <div className="details">
                <h4>175/70R14(WestLake)</h4>
                <span>Rs:6000</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWfour} alt="" />

              <div className="details">
                <h4>235/75R15(JK Tyre)</h4>
                <span>RS:10500</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWsix} alt="" style={{ background: "none" }} />
              <div className="details">
                <h4>175/65R14(JK Tyre)</h4>
                <span>Rs:6500</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWfive} alt="" />

              <div className="details">
                <h4>215/65R16(Jk Tyre)</h4>
                <span>Rs:12500</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWseven} alt="" />

              <div className="details">
                <h4>165/65R14(JK Tyre)</h4>
                <span>Rs:5500</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWeight} alt="" />

              <div className="details">
                <h4>155/80R13(Ceat Tyre)</h4>
                <span>Rs:5500</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWnine} alt="" style={{ background: "none" }} />
              <div className="details">
                <h4>195/55R16(JK Tyre)</h4>
                <span>Rs: 7500</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWten} alt="" style={{ background: "none" }} />
              <div className="details">
                <h4>215/60R16(Ceat Tyre)</h4>
                <span>Rs:9000</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={fourWeleven} alt="" style={{ background: "none" }} />
              <div className="details">
                <h4>155D12(MRF Tyre)</h4>
                <span>Rs: 6000</span>
              </div>
            </a>
          </div>
        </div>

        <h1 className="types">Battries</h1>
        <div className="product-lists">
          <div className="lists">
            <a href="">
              <img src={batteryone} alt="" />

              <div className="details">
                <h4>55AH Din Battery</h4>
                <span>Rs:15399</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={batterytwo} alt="" />

              <div className="details">
                <h4>45Ah DIn Battery</h4>
                <span>Rs:12500</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={batterythree} alt="" />

              <div className="details">
                <h4>35Ah Din Battery</h4>
                <span>Rs:7500</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={batteryfour} alt="" />

              <div className="details">
                <h4>Two Wheelers Battery</h4>
                <span>9869050407/98510969097</span>
              </div>
            </a>
          </div>
        </div>
        <h1 className="types">Lubricants</h1>
        <div className="product-lists">
          <div className="lists">
            <a href="">
              <img src={lubricantsone} alt="" />

              <div className="details">
                <h4>5W-40 4L(Total Mobile)</h4>
                <span>Rs: 5800</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={lubricantstwo} alt="" />

              <div className="details">
                <h4>5W-40 4L(Total Mobile)</h4>
                <span>Rs:5800</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={lubricantsthree} alt="" />

              <div className="details">
                <h4>Gear oil (Gulf Mobile)</h4>
                <span>$12.00</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={lubricantsfour} alt="" />

              <div className="details">
                <h4>15W-40 5L(Total Mobile)</h4>
                <span>Rs: 3500</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={lubricantsfive} alt="" />

              <div className="details">
                <h4>5w-40 1L (Total Mobile)</h4>
                <span>Rs: 1500</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={lubricantssix} alt="" />

              <div className="details">
                <h4>Type A (Gulf Mobile)</h4>
                <span>Rs: 650</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={lubricantsseven} alt="" />

              <div className="details">
                <h4>Brake Fluid (Total)</h4>
                <span>Rs: 500</span>
              </div>
            </a>
          </div>
        </div>
        <h1 className="types">Bus and SUV Tyre</h1>
        <div className="product-lists">
          <div className="lists">
            <a href="">
              <img src={BASone} alt="" />

              <div className="details">
                <h4>Bus Tyre</h4>
                <span>9869050407/9851096097</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={BAStwo} alt="" />

              <div className="details">
                <h4>265/65R17 (Triangle Tyre)</h4>
                <span>Rs:10000</span>
              </div>
            </a>
          </div>
        </div>
        <h1 className="types">Two Wheelers Tyre</h1>
        <div className="product-lists">
          <div className="lists">
            <a href="">
              <img src={twoWone} alt="" />

              <div className="details">
                <h4>Two Wheelers Tyre</h4>
                <span>9869050407/9851096097</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={twoWtwo} alt="" />

              <div className="details">
                <h4>110/90-10 (SpeedWheeler Tyre)</h4>
                <span>Rs:3200</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={twoWthree} alt="" />

              <div className="details">
                <h4>110/90-10 (SpeedWheeler Tyre)</h4>
                <span>Rs:3200</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={twoWfour} alt="" />

              <div className="details">
                <h4>90/100-10(SpeedWheeler Tyre)</h4>
                <span>Rs:2200</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={twoWfive} alt="" />

              <div className="details">
                <h4>140/60R17(Ceat Tyre)</h4>
                <span>RS:6000</span>
              </div>
            </a>
          </div>
          <div className="lists">
            <a href="">
              <img src={twoWsix} alt="" />

              <div className="details">
                <h4>3.00-18(SpeedWheeler Tyre)</h4>
                <span>Rs:2800</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Shop;
