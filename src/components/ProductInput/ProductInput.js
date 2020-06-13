import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductInput.module.scss';


class ProductInput extends React.Component {
  static propTypes = {
    addNewProduct: PropTypes.func,
    lists: PropTypes.array,
    listId: PropTypes.string,
  }
  state = {
    inputValue: '',
  }
  render() {
    const {addNewProduct, lists, listId} = this.props;
    const {inputValue} = this.state;
    return (
      <div className={styles.root}>
        <input type='text' placeholder='Product name' onChange={(e) => this.setState({inputValue: e.currentTarget.value})}></input>
        <button onClick={() => (lists.find(list => list.name === listId)).products.includes(inputValue) || !inputValue  ? window.alert('You already have this product or you did not put new product name') : addNewProduct({
          name: inputValue,
          listId,
        })}>
          Add Product
        </button>
      </div>
    );
  }
}

export default ProductInput;
