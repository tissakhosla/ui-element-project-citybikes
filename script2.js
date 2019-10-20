console.log("Wea rel ive")

const url3 = "http://api.citybik.es/v2/networks/capital-bikeshare"
function bikes(stationArray) {
    console.dir(stationArray)
}

fetch(url3)
    .then(res => res.json())
    .then(res => bikes(res.network.stations))
    .catch(err => console.log("No More Matches!\n", err))

