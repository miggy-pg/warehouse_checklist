export function FormSelect({ tag }) {
  return (
    <option value={tag} key={tag}>
      {tag}
    </option>
  );
}
