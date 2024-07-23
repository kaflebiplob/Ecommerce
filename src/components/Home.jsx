import Footer from "./footer";
import Header from "./header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <div className="home-section">
        <div className="homepart">
          <div className="bodypart">
            <h1 className="body-h1">Welcome to abi trade link pvt ltd</h1>
            <p className="body-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              mollitia vero aliquam assumenda labore. Voluptatibus pariatur
              eveniet ducimus delectus rerum.
            </p>
            <button className="h-btm"><Link to={"/shop"}> visit shop</Link></button>
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
