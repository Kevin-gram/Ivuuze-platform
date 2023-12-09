const provinces = document.querySelector("#provinceDropdown");
const districts = document.querySelector("#districtDropdown");
const sectors = document.querySelector("#sectorDropdown");
const cells = document.querySelector("#cellDropdown");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    sectors.addEventListener("change", () => {
      const arrCells = Object.keys(
        data[provinces.value][districts.value][sectors.value]
      ).map((cell) => `<option value="${cell}">${cell}</option>`);
      cells.innerHTML = arrCells.join(" ");
    });
    districts.addEventListener("change", () => {
      const arrSectors = Object.keys(
        data[provinces.value][districts.value]
      ).map((sector) => `<option value="${sector}">${sector}</option>`);
      sectors.innerHTML = arrSectors.join(" ");
    });
    districts.addEventListener("change", () => {
      const arrSectors = Object.keys(
        data[provinces.value][districts.value]
      ).map((sector) => `<option value="${sector}">${sector}</option>`);
      sectors.innerHTML = arrSectors.join(" ");
    });
    provinces.addEventListener("change", () => {
      const arrDistricts = Object.keys(data[provinces.value]).map(
        (district) => `<option value="${district}">${district}</option>`
      );
      districts.innerHTML = arrDistricts.join(" ");
    });

    const arrProvinces = Object.keys(data).map(
      (province) => `<option value="${province}">${province}</option>`
    );
    provinces.innerHTML = arrProvinces.join(" ");
  });

document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("burger-icon");
  const navLinks = document.querySelector(".nav-links");

  burgerIcon.addEventListener("click", function () {
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      navLinks.style.display = "flex";
    } else {
      navLinks.style.display = "none";
    }
  });
});

const image1 = new Image();
image1.src = 'images/1.jpg';
const image2 = new Image();
image2.src = 'images/3.jpg';