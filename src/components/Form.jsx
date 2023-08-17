import { useState } from "react";
import { FormSelect } from "./FormSelect";

function Form() {
  const [product, setProduct] = useState({});

  return (
    <form>
      <h4>
        Warehouse <span>Checklist</span>
      </h4>
      <div className="form-row">
        <div className="form-group col-lg-4">
          <label>Product Name </label>
          <input
            type="text"
            className="form-control"
            id="inputProductName"
            placeholder=""
          />
        </div>
        <div className="form-group col-lg-4">
          <label>Internal Reference</label>
          <input
            type="text"
            className="form-control"
            id="inputInternalRef"
            placeholder=""
          />
        </div>
        <div className="form-group col-lg-4">
          <label>Product Tags</label>
          <FormSelect />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-lg-4">
          <label>Sales Price</label>
          <input
            type="number"
            className="form-control"
            id="inputPhone"
            placeholder="XXXXXXXXXX"
          />
        </div>
        <div className="form-group col-lg-4">
          <label>Cost</label>
          <input
            type="number"
            className="form-control"
            id="inputSymptoms"
            placeholder=""
          />
        </div>
        <div className="form-group col-lg-4">
          <label>Expiration Date </label>
          <div
            className="input-group date"
            id="inputDate"
            data-date-format="mm-dd-yyyy"
          >
            <input type="text" className="form-control" readOnly />
            <span className="input-group-addon date_icon">
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div className="form-group col-lg-4">
          <label>Quantity on Hand </label>
          <div
            className="input-group date"
            id="inputDate"
            data-date-format="mm-dd-yyyy"
          >
            <input type="text" className="form-control" readOnly />
            <span className="input-group-addon date_icon">
              <i className="fa fa-calendar" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <button type="submit" className="btn">
          Submit Now
        </button>
      </div>
    </form>
  );
}

export default Form;
