import { useState } from "react";
import Form from "../components/Form";
import "../assets/bootstrap.css";
import "../assets/style.css";
import "../assets/responsive.css";
import { Table } from "../components/Table";

function HomePage() {
  const [productList, setProductList] = useState([]);
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") {
    sortedItems = productList;
  }

  if (sortBy === "packed") {
    sortedItems = productList
      .slice()
      .sort((a, b) => Number(a.isPacked) - Number(b.isPacked));
  }

  if (sortBy === "name") {
    sortedItems = productList
      .slice()
      .sort((a, b) => a.productName.localeCompare(b.productName));
  }

  const addProductItem = (item) => {
    setProductList((prodList) => [...prodList, item]);
  };

  const deleteProductItem = (productID) => {
    setProductList((productItems) =>
      productItems.filter((product) => product.id !== productID)
    );
  };

  const handlePackedProductItem = (productID) => {
    setProductList((productItems) =>
      productItems.map((productItem) =>
        productItem.id === productID
          ? (!productItem.isPacked && { ...productItem, isPacked: true }) || {
              ...productItem,
              isPacked: false,
            }
          : productItem
      )
    );
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
              <div className="form-row">
                <span>Sort by </span>

                <div
                  className="form-group col-md-2"
                  onChange={(ev) => setSortBy(ev.target.value)}
                >
                  <select className="form-control wide" id="productTags">
                    <option value="input">Sort by input</option>
                    <option value="packed">Sort by packed</option>
                    <option value="name">Sort by name</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <Table
                  sortedItems={sortedItems}
                  deleteProductItem={deleteProductItem}
                  handlePackedProductItem={handlePackedProductItem}
                ></Table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
