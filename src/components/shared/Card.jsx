import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  return <div className={reverse ? 'card reverse' : 'card'}>{children}</div>;
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
