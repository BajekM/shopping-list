import React from 'react';
import PropTypes from 'prop-types';
import List from '../List/ListContainer';
import ListInput from '../ListInput/ListInputContainer';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    lists: PropTypes.array,
  }
  render() {
    const {title, lists} = this.props;

    return (
      <main>
        <h1>{title}</h1>
        <ListInput />
        <div className='row'>
          {lists.map(list =>
            <List key={list.name} name={list.name} products={list.products}/>
          )}
        </div>
      </main>
    );
  }
}

export default App;
