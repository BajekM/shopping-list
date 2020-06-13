import React from 'react';
import styles from './List.module.scss';
import PropTypes from 'prop-types';
import Product from '../Product/ProductContainer';
import ProductInput from '../ProductInput/ProductInputContainer';

class List extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    products: PropTypes.array,
  }
  render() {
    const {name, products} = this.props;
    return (
      <div className={`${styles.root} col-sm-6 col-md-4 col-lg-3`}>
        <div className={styles.page}>
          <h2>{name}</h2>
          <ul className={styles.productList}>
            {products.map(product =>
              <Product key={product} name={product} listId={name}/>
            )}
          </ul>
          <ProductInput listId={name}/>
        </div>
      </div>
    );
  }
}

export default List;
