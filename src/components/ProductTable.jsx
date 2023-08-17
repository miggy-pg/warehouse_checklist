function ProductTable({ props }) {
  return (
    <tr className="alert" role="alert">
      <th scope="row">{props.inputProductName}</th>
      <td>{props.inputInternalRef}</td>
      <td>{props.selectProductTags}</td>
      <td>{props.inputSalesPrice}</td>
      <td>{props.inputCost}</td>
      <td>{props.inputExpiryDate}</td>
      <td>{props.qtyOnHand}</td>
    </tr>
  );
}

export default ProductTable;
