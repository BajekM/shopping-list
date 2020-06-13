import {connect} from 'react-redux';
import ProductInput from './ProductInput';
import {AddProduct} from '../../redux/listsRedux';

const mapStateToProps = state => ({
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  addNewProduct: obj => dispatch(AddProduct(obj)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductInput);
