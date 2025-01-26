import PropTypes from "prop-types";

const QuoteCard = ({ quoteData }) => {
  const { quote, author } = quoteData;

  return (
    <div onClick={() => window.location.reload()}>
      <p>{quote}</p>
      <p>- {author}</p>
    </div>
  );
};

QuoteCard.propTypes = {
  quoteData: PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuoteCard;
//simple basic with no UI
