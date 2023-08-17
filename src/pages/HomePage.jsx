import React from "react";
import "../assets/bootstrap.css";
import "../assets/style.css";
import "../assets/responsive.css";
import Form from "../components/Form";

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
    </div>
  );
}

export default HomePage;
