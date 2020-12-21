import { RECEIVE_ISS_LOCATION } from '../action';

const issLocation = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ISS_LOCATION:
     return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
      };
      default:
        return state;
  }
};

export default issLocation;