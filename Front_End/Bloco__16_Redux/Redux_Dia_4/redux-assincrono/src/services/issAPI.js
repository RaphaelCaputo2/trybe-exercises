const ISS_BASE_API = 'http://api.open-notify.org/';
const getCurrentISSLocation = async () => {
 const issRequest = await fetch(`${ISS_BASE_API}/iss-now.json`);
 const issJson = await issRequest.json();
 return issJson;
}

export default getCurrentISSLocation;