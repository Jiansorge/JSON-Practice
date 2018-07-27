var house = {
  exterior: "wood siding",
  roof: "spanish tile",
  bedrooms: 2,
  bathrooms: 2,
  sqft: 1200,
  hasYard: true,
}

let neighborhood = [
  house,
  {
    exterior: "brick",
    roof: "galvanized aluminum",
    bedrooms: 4,
    bathrooms: 2,
    sqft: 1700,
    hasYard: true,
  },
  {
    exterior: "river rock",
    roof: "asphault shingle",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 800,
    hasYard: false,
  }
]

for(let i=0; i<neighborhood.length; i++){
  build(neighborhood[i], container)
  let divider = document.createElement("p")
  divider.innerHTML = "-------------"
  container.appendChild(divider)
}


//create function to loop through items and create
function build(obj, container) {

  for(let key in obj) {
    // console.log("Key: ", key, " value:", obj[key])
    // create a <p> with key and value
    let p = document.createElement("p")
    p.innerHTML = key + ": " + obj[key]

    //append p to body
    container.appendChild(p)
  }
}
