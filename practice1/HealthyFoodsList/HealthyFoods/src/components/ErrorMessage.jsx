import PropTypes from "prop-types";
function ErrorMessage({ items }) {
  return (
    items.length === 0 && <h3 className="text-center">No Items Found...</h3>
  );
}
ErrorMessage.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ErrorMessage;
