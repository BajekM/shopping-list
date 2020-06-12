import React from 'react';
import styles from './Product.module.scss';

class Product extends React.Component {
  render() {
    return (
      <li className={styles.root}>
        <label htmlFor='gruszki'>
          <input type='checkbox' value='Gruszki' id='gruszki'></input>
          <div className={styles.icon}><i className='fas fa-check'></i></div>
          Gruszki
        </label>
        <i className={`${styles.delete} fas fa-trash-alt`}></i>
      </li>
    );
  }
}

export default Product;
