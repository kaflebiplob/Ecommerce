import Footer from "./footer";

function Shop({ products }) {
   return (
    <>
     
      <section className="product-section">
        <div className="product-container mainproductcontainer">
          <div className="container product-container">
            {/* <h1>
              <span>Our</span> Product
            </h1>
            <p>
              Our products are quality products directly imported. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sequi quam autem,
              nulla odio facere perferendis!
            </p> */}
          </div>
        </div>
        <h2>On sale</h2>
        <div className="product-lists">
          {products.map((Tproduct) => (
            <div className="lists" key={Tproduct.id}>
              <a href="">
                <img src={Tproduct.image} alt={Tproduct.name} />
                <div className="details">
                  <h4>{Tproduct.name}</h4>
                  <span>{Tproduct.price}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Shop;
