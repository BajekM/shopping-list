import {connect} from 'react-redux';
import List from './List';
import {DeleteList} from '../../redux/listsRedux';

const mapStateToProps = state => ({
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  deleteShoppingList: productName => dispatch(DeleteList(productName)),
});


export default connect(mapStateToProps, mapDispatchToProps)(List);
