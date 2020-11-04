function fetchDog() {
  fetch('').then(response =>
    response.json().then(data => (response.ok ? Promise.resolve(json) : Promise.reject(data))),
  );
}

module.exports = fetchDog;
