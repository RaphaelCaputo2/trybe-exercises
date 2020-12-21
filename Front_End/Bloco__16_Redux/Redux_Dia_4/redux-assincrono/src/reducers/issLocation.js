import { RECEIVE_ISS_LOCATION } from '../action';
export const issLocation = (state = {}, action) {
  switch(action.type) {
    case RECEIVE_ISS_LOCATION:
     return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
      }
      default:
        return state
  }
}