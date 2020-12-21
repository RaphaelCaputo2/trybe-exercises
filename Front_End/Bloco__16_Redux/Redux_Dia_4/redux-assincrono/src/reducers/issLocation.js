import {  RECEIVE_ISS_LOCATION_SUCESS, REQUEST_ISS_LOCATION } from '../action';


const INITTIAL_STATE = {
  isFetching: false,
}
const issLocation = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_ISS_LOCATION_SUCESS:
     return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
        isFetching: false,
      };
      case REQUEST_ISS_LOCATION:
        return ({
          ...state,
          isFetching: true,
        });
      default:
        return state;
  }
};

export default issLocation;