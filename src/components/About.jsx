import tyre from "/about-img.webp";
import battries from "/about-battery-img.webp";
import gulf from "/about-gulf-img.jpg";
import Footer from "./footer";
import Header from "./header";
function About() {
  return (
    <>
    <Header/>
    <div className="about-section">
      <div className="aboutpart">
        <h1>ABI TRADE LINK PVT LTD</h1>
        <div className="lb-intro">
          <h1 className="head-desc">
            We serve Tyres, batteries, Lubricants for both four wheelers and two
            wheelers
          </h1>
        </div>
        <div className="intro-types">
          <div className="intro-tyres">
            <h2>Tyres</h2>
            <h3>Description:</h3>
            <p>
              {" "}
              Discover a wide range of high-quality tyres for all types of
              vehicles, including cars, motorcycles, and trucks. Our collection
              features top brands known for durability, performance, and safety.
              Whether you're looking for all-season tyres, winter tyres, or
              performance tyres, we have the perfect fit for your needs. Shop
              now to ensure a smooth and safe ride.
            </p>
            <div className="intro-image">
              <img src={tyre} alt="tyre" />
            </div>
            <button className="btn-2">Tyres</button>
          </div>
          <div className="intro-batttries">
            <h2>Battery</h2>
            <h3>Description:</h3>
            <p>
              Power your vehicle with our selection of reliable and long-lasting
              batteries. We offer a variety of options to suit different vehicle
              types and models. From maintenance-free batteries to
              high-performance options, our products are designed to provide
              consistent power and dependability. Find the right battery to keep
              your vehicle running smoothly.
            </p>
            <div className="intro-image">
              <img src={battries} alt="battery" />
            </div>
            <button className="btn-2">Battries</button>
          </div>
          <div className="intro-lubricants">
            <h2>Lubricants</h2>
            <h3>Description:</h3>
            <p>
              Maintain the health and efficiency of your engine with our premium
              lubricants. Our range includes engine oils, transmission fluids,
              and other essential lubricants that ensure optimal performance and
              longevity of your vehicle's components. Choose from top brands
              that offer superior protection against wear and tear, ensuring
              your vehicle runs smoothly and efficiently.
            </p>
            <div className="intro-image">
              <img src={gulf} alt="lubricants" />
            </div>
            <button className="btn-2">lubricants</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
export default About;
