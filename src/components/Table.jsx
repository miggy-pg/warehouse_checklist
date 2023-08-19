import ProductTableList from "./ProductTableList";

export function Table(props) {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th>Item Packed</th>
          <th>Product Name</th>
          <th>Internal Ref</th>
          <th>Product Tags</th>
          <th>Sales Price</th>
          <th>Cost</th>
          <th>Exp Date</th>
          <th>Qty on Hand</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {!props.sortedItems.length ? (
          <tr>
            <td colSpan={9}>
              <h5>START ADDING PRODUCTS</h5>
            </td>
          </tr>
        ) : (
          props.sortedItems.map((product) => (
            <ProductTableList
              props={product}
              deleteProductItem={props.deleteProductItem}
              handlePackedProductItem={props.handlePackedProductItem}
              key={product.id}
            />
          ))
        )}
      </tbody>
    </table>
  );
}
