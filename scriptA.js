function bikes(resp) {
    console.log("okay")

    let street = document.querySelector(".searchtext").value
    let stations = resp.network.stations

    console.log(street)
    console.log(stations)
}

function fail(resp) {
    console.log("fail")
    console.log(resp)
}

const BIKESERVER = 'http://api.citybik.es/v2/networks/capital-bikeshare'

document.querySelector("form").addEventListener("submit", function(evt) {
    evt.preventDefault()

    fetch(BIKESERVER)
        .then(res => res.json())
        .then(bikes)
        .catch(fail)
})