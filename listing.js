const inputTitle = document.querySelector("#title");
const inputStreet = document.querySelector("#street");
const inputCity = document.querySelector("#city");
const inputCountry = document.querySelector("#country");
const inputPrice = document.querySelector("#price");
const inputLimit = document.querySelector("#limit");
const inputSize = document.querySelector("#size");
const inputBedrooms = document.querySelector("#bedrooms");
const inputBathrooms = document.querySelector("#bathrooms");
const inputMinNights = document.querySelector("#min-nights");
const inputMaxNights = document.querySelector("#max-nights");
const inputMsg = document.querySelector("#msg");
const btnSubmit = document.querySelector("#btn-submit");

const apiListing = `https://open-api.guesty.com/v1/listings`;
const apiSpace = `https://open-api.guesty.com/v1/properties/spaces/unit-type/{unitTypeId}/add`; // To obtain the needed parameters, I'd have received the list of ROOMS and beds from their respective APIs and created the needed space object to incorporate as needed with the listing
const TOKEN = ""; // was unable to obtain

const listingObject = {
  title: inputTitle.text,
  nickname: ``,
  address: {
    full: `${this.street}, ${this.city}, ${this.country}`,
    street: inputStreet.text,
    city: inputCity.text,
    country: inputCountry.text,
  },
  prices: {
    basePrice: inputPrice.value,
    currency: "USD",
  },
  terms: {
    minNights: inputMinNights.value,
    maxNights: inputMaxNights.value,
  },
  accommodates: inputLimit.value,
  propertyType: "Apartment",
  type: "SINGLE",
  roomType: "Entire home/apartment",
  otaRoomType: "apartment",
};

const submitForm = () => {
  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("content-type", "application/json");
  myHeaders.append("Authorization", `Bearer ${TOKEN}`);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: listingObject,
    redirect: "manual",
  };

  const res = fetch(apiListing, requestOptions)
    .then((data) => data.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  return res;
};

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let res = submitForm();
  inputMsg.innerHTML = res.text; // Here the response would've been displayed
});

// const getToken = () => {

//   const myHeaders = new Headers();
//   myHeaders.append("accept", "application/json");
//   myHeaders.append("content-type", "application/x-www-form-urlencoded");
//   // myHeaders.append("Authorization", `Bearer ${TOKEN}`);

//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: {
//       grant_type: "client_credentials",
//       scope: "open-api",
//       client_secret:"",
//       client_id: "",
//     },
//   };

//   const res = fetch(apiListing, requestOptions)
//     .then((data) => data.json())
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));
// };
