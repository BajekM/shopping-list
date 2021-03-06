
// action name creator
const reducerName = 'lists';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_LIST = createActionName('ADD_LIST');
export const ADD_PRODUCT = createActionName('ADD_PRODUCT');
export const DELETE_PRODUCT = createActionName('DELETE_PRODUCT');
export const DELETE_LIST = createActionName('DELETE_LIST');

// action creators
export const AddList = payload => ({ payload, type: ADD_LIST });
export const AddProduct = payload => ({ payload, type: ADD_PRODUCT });
export const DeleteProduct = payload => ({ payload, type: DELETE_PRODUCT });
export const DeleteList = payload => ({ payload, type: DELETE_LIST });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, action.payload];
    case ADD_PRODUCT: {
      return statePart.map(list => list.name === action.payload.listId ? {...list, products: [...list.products, action.payload.name]} : list);
    }
    case DELETE_PRODUCT: {
      return statePart.map(list => list.name === action.payload.listId ? {...list, products: list.products.filter(product => product !== action.payload.product)} : list);
    }
    case DELETE_LIST: {
      return statePart.filter(list => list.name !== action.payload.listName);
    }
    default:
      return statePart;
  }
}
