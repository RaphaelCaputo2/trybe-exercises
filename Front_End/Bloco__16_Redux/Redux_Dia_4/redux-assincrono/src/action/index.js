import   getCurrentISSLocation  from '../services/issAPI';
export const RECEIVE_ISS_LOCATION = 'RECEIVE_ISS_LOCATION';
export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const RECEIVE_ISS_LOCATION_SUCESS = 'RECEIVE_ISS_LOCATION_SUCESS';
export const receiveISSLocation = () => ({
  type: RECEIVE_ISS_LOCATION, latitude: 22.2, logintude: -65.8,
})

export const requestISSLocation = () => ({
  type: REQUEST_ISS_LOCATION
})

 export const receiveISSLocationSucess = (latitude, longitude) => ({
  type: RECEIVE_ISS_LOCATION_SUCESS,
  latitude,
  longitude
 })

export function fetchingISSLocation () {
  return async (dispatch) => {
    dispatch(requestISSLocation());
    const { iss_position: { latitude, longitude} } = await getCurrentISSLocation();
    dispatch(receiveISSLocationSucess(latitude, longitude));
  }
}