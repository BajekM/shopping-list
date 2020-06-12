import React from 'react';
import styles from './ProductInput.module.scss';


class ProductInput extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <input type='text' placeholder='Product name'></input>
        <button>Add Product</button>
      </div>
    );
  }
}

export default ProductInput;
