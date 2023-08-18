import { useState } from "react";
import Form from "../components/Form";
import ProductTable from "../components/ProductTable";
import "../assets/bootstrap.css";
import "../assets/style.css";
import "../assets/responsive.css";

function HomePage() {
  const [productList, setProductList] = useState([]);

  const addProductItem = (item) => {
    setProductList((prodList) => [...prodList, item]);
  };

  return (
    <div>
      <section className="product_form_section layout_padding2-top">
        <div className="container">
          <div className="row">
            <div className="col">
              <Form addProductItem={addProductItem} />
            </div>
          </div>
        </div>
      </section>
      <section className="item_list_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              <span>Product</span> List
            </h2>
          </div>
          <div className="carousel-wrap">
            <div className="container">
              <div className="row">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th>Product Name</th>
                      <th>Internal Ref</th>
                      <th>Product Tags</th>
                      <th>Sales Price</th>
                      <th>Cost</th>
                      <th>Exp Date</th>
                      <th>Qty on Hand</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((product) => (
                      <ProductTable props={product} key={product.id} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
