import React from 'react';
import product1 from '../images/product-1.png';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Products = () => {
  return (
    <section className="products">
      <div className="card">
        <img className="card__img" src={product1} alt="suitcase"/>
        <p className="card__description">American Tourister Polyester 80 cm Navy Softsided Suitcase)</p>
        <div className="card__row">
          <div className="card__price">$212.00</div>
          <button type="button" className="card__btn">
            <AddShoppingCartIcon style={{ color: '#3acdd5' }}/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;