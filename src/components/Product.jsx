import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product, handleAddToCart }) => (
  <div className="Products-item">
    <img src={product.image} alt={product.title} />
    <div className="Products-item-info">
      <h2>
        {product.title}
        <span>${product.price}</span>
      </h2>
      <p>{product.description}</p>
    </div>
    <button type="button" onClick={handleAddToCart(product)}>
      Comprar
    </button>
  </div>
);

Product.propTypes = {
  product: PropTypes.object,
  handleAddToCart: PropTypes.func,
};

Product.defaultProps = {
  product: {},
  handleAddToCart: () => {},
};

export default Product;
