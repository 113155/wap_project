window.onload = addProduct;
  var array = [
    {
      name: "Apple MacBook Air",
      category: "Electronics",
      quantity: 10,
      price: 929,
      brand: "Apple	MB13",
      id: "MB13",
      ratings: 5,
      description:'2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold',
      imageName:"images/appleMac.jpg"
    },
    {
      name: "Dog RopeTies",
      category: "Dog",
      quantity: 5,
      price: 12,
      brand: "QiLongHao",
      id: "Q12",
      ratings: 4,
      description:'Youngever 3.5 Feet Dog Rope Toys for Aggressive Chewers, Tough Rope Chew Toys for XL, Large and',
      imageName:"images/pet.jpg"
    },
    {
      name: "Toys",
      category: "Kids",
      quantity: 10,
      price: 32,
      brand: "Melisa Dong",
      id: "MD21",
      ratings: 3,
      description:'Melissa & Doug Deluxe Jumbo Cardboard Blocks, 40Piece (E-Commerce Packaging)',
      imageName:"images/toys.jpg"
    },
    {
      name: "Jacket",
      category: "Men",
      quantity: 20,
      price: 79,
      brand: "Whitetails",
      id: "WT15",
      ratings: 4,
      description:"Legendary Whitetails Men's Journeyman Shirt Jacket",
      imageName:"images/jacket.jpg"
    },
    {
      name: "Shoes",
      category: "women",
      quantity: 30,
      price: 29,
      brand: "TOMS",
      id: "TS36",
      ratings: 4,
      description:"TOMS Darcy Women's",
      imageName:"images/shoes.jpg"
    },
    {
      name: "Flash Drive",
      category: "Electronics",
      quantity: 80,
      price: 16,
      brand: "SanDisk",
      id: "SDCZ73",
      ratings: 2,
      description:'SanDisk 128GB Ultra Flair USB 3.0 Flash Drive - SDCZ73-128G-G46',
      imageName:"images/flashDrive.jpg"
    },
    {
      name: "Fridge",
      category: "Appliances",
      quantity: 6,
      price: 260,
      brand: "Generic",
      id: "GF112",
      ratings: 5,
      description:'Rainfally Portable Refrigerator, 3.2 cu ft. Unit 2-Door Mini Freezer Cooler Fridge w/Reversible Door, Removable GlassShelves, Mechanical Control, Upright Freezer for Dorm, Home & Office (Black)',
      imageName:"images/fridge.jpg"
    },
    {
      name: "iPhone13 Case",
      category: "Electronics",
      quantity: 50,
      price: 14,
      brand: "Qbool",
      id: "Qb115",
      ratings: 3,
      description:'Qbool Qbool Liquid Silicone Case Compatible with iPhone 13 [6.1',
      imageName:"images/iPhone13Case.jpg"
    },
    {
      name: "Down and Out in Paris and London",
      category: "Book",
      quantity: 70,
      price: 14,
      brand: "Classic",
      id: "CB70s",
      ratings: 5,
      description:'Down and Out in Paris and London by George Orwell',
      imageName:"images/DownParisLondon.jpg"
    },
    {
      name: "Coffee Mug",
      category: "Household",
      quantity: 10,
      price: 28,
      brand: "Boelter Brands",
      id: "BBNFL13",
      ratings: 4,
      description:'Boelter Brands NFL Sculpted Relief Mug, 14-Ounce',
      imageName:"images/mug.jpg"
    },
  ];
  
  function addProduct() {
    buildCards(array)
  }
  
  function buildCards(arr) {
  
    let cards = document.getElementById("cards");
  
    let html = "";
  
    arr.forEach(function (item) {
      html +=
        '<div class="card" style="width: 18rem;">' +
        '<img src="' +
        item.imageName +
        '" class="card-img-top" alt="...">' +
        '<div class="card-body" style="text-align: center;">' +
        item.name +
        '<p class="card-text">' +
        item.description +
        "</p>" +
        item.ratings +
        "</div> </div>";
    });
  
    cards.innerHTML = html;
  }
  let newArray = [...array];
  var modal = document.getElementById("iddd");

  var modal2 = document.getElementById("finish");
  function handleAddressClick() {
    modal.style.display = "block";
  }
  function handleDone() {
    modal.style.display = "none";
  }

  function sortLowHigh() {
     let lowHigh= array.sort((item1, item2) => Number(item1.price) - Number(item2.price));
    JSON.stringify(lowHigh);
    buildCards(lowHigh);
  }

  function sortHighLow() {
    
     let highLow = array.sort((item1, item2) => Number(item2.price) - Number(item1.price));
    JSON.stringify(highLow);
    buildCards(highLow);
  }
  function sortHighRate(arr) {
   let sorted = arr.sort(
      (item1, item2) => Number(item2.ratings) - Number(item1.ratings)
    ); 
    JSON.stringify(sorted)
    buildCards(filteredArray); 

  }
  function filterInRange1() {
    
    let filteredArray = array.filter((item) => Number(item.ratings)>=1);
  JSON.stringify(filteredArray);
   buildCards(filteredArray);
 }
function filterInRange2(arr) {
  let filteredArray = arr.filter((item) => Number(item.ratings)>=2);
JSON.stringify(filteredArray);
 buildCards(filteredArray);
}
  function filterInRange3() {
    
    let filteredArray = array.filter((item) => Number(item.ratings) >=3);
  JSON.stringify(filteredArray);
   buildCards(filteredArray);
 }
 
 function filterInRange4() {
    
let filteredArray = array.filter((item) => Number(item.ratings) >=4);
JSON.stringify(filteredArray);
 buildCards(filteredArray);
}
function filterInRange5() {
    
  let filteredArray = array.filter((item) => Number(item.ratings) === 5);

JSON.stringify(filteredArray);
 buildCards(filteredArray);
}