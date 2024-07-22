import Footer from "./footer";
import Header from "./header";

function Home() {
  return (
    <>
    <Header/>
    <div className="home-section">
      <div className="homepart">
        <div className="bodypart">
          <h1>Welcome to abi trade link pvt ltd</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            mollitia vero aliquam assumenda labore. Voluptatibus pariatur
            eveniet ducimus delectus rerum.
          </p>
          <button className="h-btm">visit shop</button>
        </div>
        <div className="h-img">
            <img src="../homeimg.jpg" alt="" />
        </div>
        
      </div>
    </div>
    <Footer/>
    </>
  );
}
export default Home;
