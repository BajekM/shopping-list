import React from 'react';
import styles from './ListInput.module.scss';


class ListInput extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <input type='text' placeholder='List name'></input>
        <button>Add List</button>
      </div>
    );
  }
}

export default ListInput;
