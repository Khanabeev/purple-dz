"use strict";

function getGeolocation() {
  return new Promise((resolve, reject) => {
    const successCallback = (position) => {
      resolve(position);
    };

    const errorCallback = (error) => {
      reject(new Error("Position Unavailable"));
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  });
}

getGeolocation()
  .then((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
  })
  .catch((error) => console.log(error));
