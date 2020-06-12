import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';

class Product extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  }
  render() {
    const {name} = this.props;
    return (
      <li className={styles.root}>
        <label htmlFor={name}>
          <input type='checkbox' value={name} id={name}></input>
          <div className={styles.icon}><i className='fas fa-check'></i></div>
          {name}
        </label>
        <i className={`${styles.delete} fas fa-trash-alt`}></i>
      </li>
    );
  }
}

export default Product;
