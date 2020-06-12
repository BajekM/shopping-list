import React from 'react';
import {initalData} from '../../data';
import List from '../List/List';
import ListInput from '../ListInput/ListInput';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>{initalData.title}</h1>
        <ListInput />
        <div className='row'>
          <List />
        </div>
      </main>
    );
  }
}

export default App;
