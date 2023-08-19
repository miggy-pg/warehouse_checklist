function ProductTableList({
  props,
  deleteProductItem,
  handlePackedProductItem,
}) {
  return (
    <tr
      className="alert"
      role="alert"
      style={props.isPacked ? { color: "red" } : { color: "black" }}
    >
      <th>
        <input
          type="checkbox"
          value={props.isPacked}
          onClick={() => handlePackedProductItem(props.id)}
        />
      </th>
      <th scope="row">{props.productName}</th>
      <td>{props.internalRef}</td>
      <td>{props.productTags}</td>
      <td>{props.salesPrice}</td>
      <td>{props.inputCost}</td>
      <td>{props.inputExpiryDate}</td>
      <td>{props.qtyOnHand}</td>
      <td onClick={() => deleteProductItem(props.id)}>
        <span type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </span>
      </td>
    </tr>
  );
}

export default ProductTableList;
