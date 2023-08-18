function ProductTable({ props }) {
  return (
    <tr className="alert" role="alert">
      <th scope="row">{props.productName}</th>
      <td>{props.internalRef}</td>
      <td>{props.productTags}</td>
      <td>{props.salesPrice}</td>
      <td>{props.inputCost}</td>
      <td>{props.inputExpiryDate}</td>
      <td>{props.qtyOnHand}</td>
    </tr>
  );
}

export default ProductTable;
