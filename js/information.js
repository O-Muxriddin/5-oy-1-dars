let elLoaderSkeleton = document.getElementById("loaderSkeleton");
let elSkeleton = document.getElementById("skeleton");

fetch(
  "https://json-api.uz/api/project/fn44-amaliyot/cars/" +
    new URLSearchParams(location.search).get("id")
)
  .then((res) => res.json())
  .then((res) => ui(res))
  .catch(() => {})
  .finally(() => {});
function ui(data) {
  let clone = document.querySelector("#ui_template").cloneNode(true).content;
  clone.querySelector(".js-data-name").innerText = data.name ? data.name : "No name";
  clone.querySelector(".trim").innerText = data.trim ? data.trim : "No trim";
  clone.querySelector(".generation").innerText = data.generation ? data.generation : "No generation";
  clone.querySelector(".year").innerText = Number.parseInt(data.year)? data.year : "No year";

  clone.querySelector(".colorName").innerText = data.colorName? data.colorName : "No color name";
  clone.querySelector(".category").innerText = data.category? data.category : "No category";
  clone.querySelector(".doorCount").innerText = data.doorCount? data.doorCount : "No door count";
  clone.querySelector(".seatCount").innerText = data.seatCount? data.seatCount : "No seat count";
  clone.querySelector(".maxSpeed").innerText = data.maxSpeed? data.maxSpeed : "No max speed";
  clone.querySelector(".acceleration").innerText = data.acceleration? data.acceleration : "No acceleration";
  clone.querySelector(".engine").innerText = data.engine? data.engine : "No engine";
  clone.querySelector(".horsePower").innerText = data.horsepower? data.horsepower : "No horsepower";
  clone.querySelector(".fuelType").innerText = data.fuelType? data.fuelType : "No fuel type";

  document.querySelector(".js-details-box").append(clone);
}
