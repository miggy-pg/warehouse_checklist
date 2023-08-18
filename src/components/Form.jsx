import { useState } from "react";
import { FormSelect } from "./FormSelect";

function Form({ addProductItem }) {
  const [product, setProduct] = useState({});
  const [productID, setProductID] = useState(0);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setProductID(productID + 1);

    const addProductID = { ...product, id: productID };
    addProductItem(addProductID);

    // reset all values after submitting form
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    const selectProductTags = document.getElementById("productTags");
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
              id="productName"
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
              id="internalRef"
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
              id="productTags"
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
              id="salesPrice"
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
    </>
  );
}

export default Form;
