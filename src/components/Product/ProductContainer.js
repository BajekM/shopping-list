import {connect} from 'react-redux';
import Product from './Product';
import {DeleteProduct} from '../../redux/listsRedux';

const mapStateToProps = state => ({
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  deleteListItem: obj => dispatch(DeleteProduct(obj)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Product);
