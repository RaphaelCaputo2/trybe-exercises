const INITTIAL_STATE = [];

function listReducer(state = INITTIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_ELEMENT':
    return [...state, action.value];
    default:
      return state;

  }
}

export default listReducer;