import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions';
import Product from './Product';

const Products = (props) => {
  const { products, addToCart } = props;

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ products: state.products });

const mapDispatchToProps = {
  addToCart: actions.addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
