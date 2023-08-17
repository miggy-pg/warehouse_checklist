import React from "react";
import "../assets/bootstrap.css";
import "../assets/style.css";
import "../assets/responsive.css";
import Form from "../components/Form";
import Table from "../components/Table";

function HomePage() {
  return (
    <div>
      <section className="product_form_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section className="item_list_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              <span>Product List</span>
            </h2>
          </div>
          <div className="carousel-wrap">
            <Table />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
