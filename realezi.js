const properties = [
  {
    priceRange: "Rs. 1 Cr - Rs. 3.5 Cr",
    propertyType: "Apartment",
    bhkType: "1BHK",
    area: "2100 sq. ft",
    averagePricePerSqFt: "Rs. 6.65k/sq.ft",
    possessionStage: "Under construction",
    sizes: "900 sq.ft - 1400 sq.ft",
    saleType: "New projects",
    owner: "By Owner",
    managedBy: "Managed by Realezi",
    developer: "By Suri ",
    developerType: "Developer",
    image: "./assets/image/bedroom.png",
    developerImage: "./assets/image/devimg.png",
    btnType: "View Phone",
    extra: true,
    priceRangeFilter: "1CR",
    advBathroom: "1+",
    link: "https://housing.com/buy-600-sqft-1-rk-villa-in-rau-for-rs-2400000-rid-13923543",
    advAgeOfProperty: "Less than 10 year",
    advFacing: "East Facing",
  },
  {
    priceRange: "Rs. 1 Cr - Rs. 3.5 Cr",
    propertyType: "Independent",
    bhkType: "3BHK",
    area: "2100 sq. ft",
    averagePricePerSqFt: "Rs. 6.65k/sq.ft",
    possessionStage: "Under construction",
    sizes: "900 sq.ft - 1400 sq.ft",
    saleType: "Resale projects",
    owner: "By Owner",
    managedBy: "Managed by Realezi",
    developer: "By Suri",
    developerType: "Developer",
    image: "./assets/image/bedroom.png",
    developerImage: "./assets/image/devimg.png",
    btnType: "Download Brochure",
    link: "https://housing.com/buy-600-sqft-1-rk-villa-in-rau-for-rs-2400000-rid-13923543",
    advBathroom: "2+",
    advAgeOfProperty: "Less than 5 year",
    advFacing: "West Facing",
  },
  {
    priceRange: "Rs. 4 Cr - Rs. 5 Cr",
    propertyType: "Villa",
    bhkType: "4BHK",
    area: "2100 sq. ft",
    averagePricePerSqFt: "Rs. 6.65k/sq.ft",
    possessionStage: "Under construction",
    sizes: "900 sq.ft - 1400 sq.ft",
    saleType: "Resale projects",
    owner: "By Owner",
    managedBy: "Managed by Realezi",
    developer: "By Suri",
    developerType: "Developer",
    image: "./assets/image/bedroom.png",
    developerImage: "./assets/image/devimg.png",
    btnType: "Download Brochure",
    extra: true,
    link: "https://housing.com/buy-600-sqft-1-rk-villa-in-rau-for-rs-2400000-rid-13923543",
    advBathroom: "3+",
    advAgeOfProperty: "Less than 3 year",
    advFacing: "North Facing",
    advAmenities: "Housekeeping",
  },
  {
    priceRange: "Rs. 1 Cr - Rs. 3.5 Cr",
    propertyType: "Studio",
    bhkType: "2BHK",
    area: "2100 sq. ft",
    averagePricePerSqFt: "Rs. 6.65k/sq.ft",
    possessionStage: "Under construction",
    sizes: "900 sq.ft - 1400 sq.ft",
    saleType: "Resale projects",
    owner: "By Owner",
    managedBy: "Managed by Realezi",
    developer: "By Suri",
    developerType: "Developer",
    image: "./assets/image/bedroom.png",
    developerImage: "./assets/image/devimg.png",
    btnType: "Download Brochure",
    link: "https://housing.com/buy-600-sqft-1-rk-villa-in-rau-for-rs-2400000-rid-13923543",
    advBathroom: "4+",
    advAgeOfProperty: "Less than 1 year",
    advFacing: "South Facing",
    advAmenities: "Wifi",
  },
];

let filters = {};

function createPropertyListing(property) {
  console.log(property);
  return `
  
  <div class="propertyListingGrid">
  <a href=${property.link}
target="_blank"
rel="noreferrer">
    <div class="leftImage">
      <img src="${property.image}" alt="bedroom" />
    </div>
    </a>
    <div class="rightText">
       <div class="btnsMAin">
       <a href=${property.link}
target="_blank"
rel="noreferrer">
            <p class="priceRange">${property.priceRange}</p></a>
            <div class="icons">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="black"
                  class="bi bi-share"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
                  />
                </svg>
              </span>
              <span id="toggleIcon" onclick="handleClick(this)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#E38238"
                  class="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"
                  />
                </svg>
              </span>
            </div>
          </div>
<a href=${property.link}
target="_blank"
rel="noreferrer">
  <div class="rera">
      <p class="propertyType">${property.propertyType}</p>
          <div class="icons">
            <button>
             <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="green"
                class="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"
                />
              </svg>
              RERA</button>
          </div>
        </div>

      <div class="ownerDiv">
        <p class="owner">${property.owner}</p>
        <p class="manBtn">${property.managedBy}</p>
      </div>
      <div class="specification">
        <div class="specs">
          <p>AREA</p>
          <p>${property.area}</p>
        </div>
        <div class="specs">
          <p>AVERAGE PRICE</p>
          <p>${property.averagePricePerSqFt}</p>
        </div>
        <div class="specs">
          <p>POSSESSION STARTS</p>
          <p>${property.possessionStage}</p>
        </div>
        <div class="specs">
          <p>SIZES</p>
          <p>${property.sizes}</p>
        </div>
      </div>
      <div class="dashed-line"></div>
      <div class="lastFold">
        <div class="devImg">
          <div class="img">
            <img src="${property.developerImage}" alt="developer" />
          </div>
          <div class="details">
            <p>${property.developer}</p>
            <span>${property.developerType}</span>
          </div>
        </div>
        <div class="btns">
          <button class="cta">${property.btnType}</button>
          <button class="seller">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              Contact Seller</button>
        </div>
      </div>
    </div>
    </div>
    ${
      property.extra
        ? `
      <div class="bottomMain">
        <div class="bottomCont">
          <div class="bottomDtl">
            <p>See more properties from Suri</p>
            <p class="linkBtn">See all properties</p>
          </div>
          <div class="bottomDetails">
            <div class="btFirst">
              <div class="leftImage">
                <img src="./assets/image/bedroom.png" alt="bedroom" />
              </div>
              <div class="rightText">
                <p class="priceRange">Rs.2 Cr - Rs.3.5 Cr</p>
                <p class="propertyType">6 BHK Independent Building Floor</p>
                <p class="propertyType">
                  2000 sq ft • Sector 24 Rohini, New Delhi
                </p>
              </div>
            </div>
            <div class="btFirst">
              <div class="leftImage">
                <img src="./assets/image/bedroom.png" alt="bedroom" />
              </div>
              <div class="rightText">
                <p class="priceRange">Rs.2 Cr - Rs.3.5 Cr</p>
                <p class="propertyType">6 BHK Independent Building Floor</p>
                <p class="propertyType">
                  2000 sq ft • Sector 24 Rohini, New Delhi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
</a>
    `
        : ""
    }
`;
}

function renderPropertyListings(properties) {
  const container = document.getElementById("propertyListingsContainer");

  if (properties.length === 0) {
    container.innerHTML = `<h2 class="noresult">No Results Found</h2>`;
  } else {
    container.innerHTML = properties.map(createPropertyListing).join("");
  }
}

function filterProperties() {
  let filteredProperties = properties;
  for (const [key, value] of Object.entries(filters)) {
    filteredProperties = filteredProperties.filter(
      (property) => property[key] === value
    );
  }
  renderPropertyListings(filteredProperties);
}

function updateFilters(key, value, buttonId) {
  filters[key] = value;
  document.getElementById(buttonId).textContent = value;
  filterProperties();
  //   filters = {};
}

document.addEventListener("DOMContentLoaded", () => {
  renderPropertyListings(properties);
});

function handleClick(element) {
  const svg = element.querySelector("svg");

  if (svg.classList.contains("bi-send")) {
    svg.innerHTML = `
          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
        `;
    svg.setAttribute("fill", "#E38238");
    svg.classList.remove("bi-send");
    svg.classList.add("bi-send-fill");
  } else {
    svg.innerHTML = `
          <path
            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"
          />
        `;
    svg.setAttribute("fill", "#E38238");
    svg.classList.remove("bi-send-fill");
    svg.classList.add("bi-send");
  }
}
