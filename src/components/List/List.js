import React from 'react';
import styles from './List.module.scss';
import Product from '../Product/Product';
import ProductInput from '../ProductInput/ProductInput';

class List extends React.Component {
  render() {
    return (
      <div className={`${styles.root} col-sm-6 col-md-4 col-lg-3`}>
        <div className={styles.page}>
          <h2>Owoce</h2>
          <ul className={styles.productList}>
            <Product />
          </ul>
          <ProductInput />
        </div>
      </div>
    );
  }
}

export default List;
