import React from "react";
import Products from "./Products";
const Home = () => {
  return (
    <div>
      <h2 className="heading">welcome to the RTK store</h2>
      <section>
        <h5>products</h5>
        <Products />
      </section>
    </div>
  );
};

export default Home;
