function ErrorMessage({ items }) {
  return (
    items.length === 0 && <h3 className="text-center">No Items Found...</h3>
  );
}
export default ErrorMessage;
