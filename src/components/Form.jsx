import { useState } from "react";
import { FormSelect } from "./FormSelect";

import ProductTable from "./ProductTable";

function Form() {
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setProductList((prodList) => [...prodList, product]);
    setSubmitted(true);

    // reset all values after submitting form
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    const selectProductTags = document.getElementById("selectProductTags");
    selectProductTags.value = "Clothing";
  };

  const productTags = [
    "Clothing",
    "Apparel",
    "Casual",
    "Shoes",
    "Footwear",
    "Sports",
    "Electronics",
    "Technology",
    "Computers",
  ];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>
          Warehouse <span>Checklist</span>
        </h4>
        <div className="form-row">
          <div className="form-group col-lg-4">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              id="inputProductName"
              onChange={(ev) =>
                setProduct({
                  ...product,
                  ...{ [ev.target.id]: ev.target.value },
                })
              }
            />
          </div>
          <div className="form-group col-lg-4">
            <label>Internal Reference</label>
            <input
              type="text"
              className="form-control"
              id="inputInternalRef"
              onChange={(ev) =>
                setProduct({
                  ...product,
                  ...{ [ev.target.id]: ev.target.value },
                })
              }
            />
          </div>
          <div className="form-group col-lg-4">
            <label>Product Tags</label>
            <select
              className="form-control wide"
              id="selectProductTags"
              onChange={(ev) =>
                setProduct({
                  ...product,
                  ...{ [ev.target.id]: ev.target.value },
                })
              }
            >
              {productTags.map((tag) => (
                <FormSelect tag={tag} key={tag} />
              ))}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-lg-4">
            <label>Sales Price</label>
            <input
              type="number"
              className="form-control"
              id="inputSalesPrice"
              onChange={(ev) =>
                setProduct({
                  ...product,
                  ...{ [ev.target.id]: ev.target.value },
                })
              }
            />
          </div>
          <div className="form-group col-lg-4">
            <label>Cost</label>
            <input
              type="number"
              className="form-control"
              id="inputCost"
              onChange={(ev) =>
                setProduct({
                  ...product,
                  ...{ [ev.target.id]: ev.target.value },
                })
              }
            />
          </div>
          <div className="form-group col-lg-4">
            <label>Expiration Date</label>
            <div className="input-group date">
              <input
                type="date"
                className="form-control"
                onChange={(ev) =>
                  setProduct({
                    ...product,
                    ...{ [ev.target.id]: ev.target.value },
                  })
                }
                id="inputExpiryDate"
              />
              <span className="input-group-addon date_icon">
                <i className="fa fa-calendar" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div className="form-group col-lg-4">
            <label>Quantity on Hand</label>
            <div className="input-group date" data-date-format="mm-dd-yyyy">
              <input
                type="number"
                id="qtyOnHand"
                className="form-control"
                onChange={(ev) =>
                  setProduct({
                    ...product,
                    ...{ [ev.target.id]: ev.target.value },
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="btn-box">
          <button type="submit" className="btn">
            Submit Now
          </button>
        </div>
      </form>
      <section className="item_list_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              <span>Product List</span>
            </h2>
          </div>
          <div className="carousel-wrap">
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
                  {isSubmitted &&
                    productList.map((product) => (
                      <ProductTable props={product} key={product.id} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
