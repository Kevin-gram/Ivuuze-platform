const provinces = document.querySelector("#provinceDropdown");
const districts = document.querySelector("#districtDropdown");
const sectors = document.querySelector("#sectorDropdown");
const cells = document.querySelector("#cellDropdown");
const button = document.querySelector(".Enter-button");
const workersSection = document.querySelector(".workers");

const workersData = [
  {
    firstName: "Habanabakize",
    lastName: "Jean",
    contact: "+2352163463461",
    image: "1.jpeg",
  },
  {
    firstName: "Habarurema",
    lastName: "Smith",
    contact: "+2352163463462",
    image: "2.jpeg",
  },
  {
    firstName: "Iranzi",
    lastName: "Johnson",
    contact: "+2352163463463",
    image: "8.jpeg",
  },
  {
    firstName: "Izibyose",
    lastName: "Williams",
    contact: "+2352163463464",
    image: "4.jpeg",
  },
  {
    firstName: "Iyadukunze",
    lastName: "Jones",
    contact: "+2352163463465",
    image: "5.jpeg",
  },
  {
    firstName: "Irimaso",
    lastName: "Brown",
    contact: "+2352163463466",
    image: "6.jpeg",
  },
  {
    firstName: "Imena",
    lastName: "Davis",
    contact: "+2352163463467",
    image: "7.jpeg",
  },
  {
    firstName: "Rutsinga",
    lastName: "Miller",
    contact: "+2352163463468",
    image: "8.jpeg",
  },
  {
    firstName: "Ruvunantwali",
    lastName: "Wilson",
    contact: "+2352163463469",
    image: "9.jpeg",
  },
  {
    firstName: "Ruvusha",
    lastName: "Moore",
    contact: "+2352163463470",
    image: "10.jpeg",
  },
];

console.log(workersData);

button.addEventListener("click", () => {
  const province = provinces.value;
  const district = districts.value;
  const sector = sectors.value;
  const cell = cells.value;
  const random = Math.ceil(Math.random() * 9);

  workersSection.innerHTML = `
  <div class="CHW-info">
  <div>
    <img src="images/doctors/${
      workersData[random].image
    }" alt="" class="box-image" />
  </div>
  <div class="worker-info">
    <p><strong>Name: </strong>${workersData[random].firstName} ${
    workersData[random].lastName
  }</p>
    <p><strong>Province: </strong>${province}</p>
    <p><strong>District: </strong>${district}</p>
    <p><strong>Sector: </strong>${sector}</p>
    <p><strong>Cell: </strong>${cell}</p>
    <p><strong>Telephone: </strong>${workersData[random].contact}</p>
    <p><strong>Medicine Inventory Status:</strong> In Stock</p>
  </div>
</div>
  
  <div class="CHW-info">
  <div>
    <img src="images/doctors/${
      workersData[random + 1].image
    }" alt="" class="box-image" />
  </div>
  <div class="worker-info">
    <p><strong>Name: </strong>${workersData[random + 1].firstName} ${
    workersData[random + 1].lastName
  }</p>
    <p><strong>Province: </strong>${province}</p>
    <p><strong>District: </strong>${district}</p>
    <p><strong>Sector: </strong>${sector}</p>
    <p><strong>Cell: </strong>${cell}</p>
    <p><strong>Telephone: </strong>- None</p>
    <p><strong>Medicine Inventory Status:</strong> In Stock</p>
  </div>
</div>
  
  <div class="CHW-info">
  <div>
    <img src="images/doctors/${
      workersData[random - 1].image
    }" alt="" class="box-image" />
  </div>
  <div class="worker-info">
    <p><strong>Name: </strong>${workersData[random - 1].firstName} ${
    workersData[random - 1].lastName
  }</p>
    <p><strong>Province: </strong>${province}</p>
    <p><strong>District: </strong>${district}</p>
    <p><strong>Sector: </strong>${sector}</p>
    <p><strong>Cell: </strong>${cell}</p>
    <p><strong>Telephone: </strong>${workersData[random - 1].contact}</p>
    <p><strong>Medicine Inventory Status:</strong> Out Stock</p>
  </div>
</div>
  

`;

  console.log(province, district, sector, cell);
});

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
    const form = document.querySelector(".your-form-class");
  
    burgerIcon.addEventListener("click", function () {
      if (window.innerWidth < 768) {
        navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
        form.style.width = form.style.width === "50%" ? "30%" : "50%"; // Adjust the width as needed
      }
    });
  
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        navLinks.style.display = "flex";
        form.style.width = ""; // Reset the width on larger screens
      } else {
        navLinks.style.display = "none";
      }
    });
  });
  

const image1 = new Image();
image1.src = "images/1.jpg";
const image2 = new Image();
image2.src = "images/3.jpg";
