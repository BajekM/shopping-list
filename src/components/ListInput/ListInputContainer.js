import {connect} from 'react-redux';
import ListInput from './ListInput';
import {AddList} from '../../redux/listsRedux';

const mapStateToProps = state => ({
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  addShoppingList: obj => dispatch(AddList(obj)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ListInput);
