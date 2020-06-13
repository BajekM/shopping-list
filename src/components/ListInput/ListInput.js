import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListInput.module.scss';


class ListInput extends React.Component {
  static propTypes = {
    addShoppingList: PropTypes.func,
    lists: PropTypes.array,
  }
  state = {
    inputValue: '',
  }
  render() {
    const {addShoppingList, lists} = this.props;
    const {inputValue} = this.state;
    return (
      <div className={styles.root}>
        <input type='text' placeholder='List name' value={inputValue} onFocus={() => this.setState({inputValue: ''})} onChange={(e) => this.setState({inputValue: e.currentTarget.value})}></input>
        <button onClick={() => lists.find(list => list.name === inputValue) || !inputValue  ? window.alert('You already have this list or you did not put new list name') : addShoppingList({
          name: inputValue,
          products: [],
        })}>
          Add List
        </button>
      </div>
    );
  }
}

export default ListInput;
