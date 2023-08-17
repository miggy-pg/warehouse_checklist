import React from "react";

function Table() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-wrap">
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
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr className="alert" role="alert">
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <a
                    href="#"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="fa fa-close"></i>
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
