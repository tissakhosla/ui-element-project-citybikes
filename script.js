console.log("LIVE")

const url = "http://api.citybik.es/v2/networks/"
const whatCity = "Washington, DC"
const body = document.querySelector("body")
let network
let table

form = document.querySelector("form")
searchText = document.querySelector(".searchtext")

form.addEventListener("submit", function(eo){
	eo.preventDefault()


	table = document.createElement("table")
	console.dir(table)
	
	body.appendChild(table)

	let nameHead = document.createElement("th")
	table.appendChild(nameHead)
	nameHead.innerHTML = "Name"
	let freeHead = document.createElement("th")
	table.appendChild(freeHead)
	freeHead.innerHTML = "Bikes Available"
	let emptyHead = document.createElement("th")
	table.appendChild(emptyHead)
	emptyHead.innerHTML = "Docks Available"
	let latHead = document.createElement("th")
	table.appendChild(latHead)
	latHead.innerHTML = "Latitude"
	let longHead = document.createElement("th")
	table.appendChild(longHead)
	longHead.innerHTML = "Longitude"
	
	findStation(network, searchText.value)
})

var findStation = function(networkObj, streetSearch){
	let stationArray = networkObj.network.stations
	console.dir(stationArray)

	for(let i = 0; i < stationArray.length; i++){

		if(stationArray[i].name.toUpperCase().includes(streetSearch.toUpperCase())) {
			
			let row = document.createElement("tr")
			table.appendChild(row)
			
			let rowName = document.createElement("td")
			row.appendChild(rowName)
			rowName.innerHTML = stationArray[i].name
			let rowFree = document.createElement("td")
			row.appendChild(rowFree)
			rowFree.innerHTML = stationArray[i].free_bikes
			let rowEmpty = document.createElement("td")
			row.appendChild(rowEmpty)
			rowEmpty.innerHTML = stationArray[i].empty_slots
			let rowLat = document.createElement("td")
			row.appendChild(rowLat)
			rowLat.innerHTML = stationArray[i].latitude
			let rowLong = document.createElement("td")
			row.appendChild(rowLong)
			rowLong.innerHTML = stationArray[i].longitude
			let rowTime = document.createElement("td")
			row.appendChild(rowTime)
			rowTime.innerHTML = stationArray[i].timestamp
		} 
	}
}

var findNetwork = function(apiObj, apiStartPoint){			
	for (i = 0; i < apiObj.networks.length; i++){
		if (apiObj.networks[i].location.city === whatCity){
			console.log("apiObj")
			console.dir(apiObj.networks[i])
			let networkId = apiObj.networks[i].id
			// console.log(networkId) 
			// console.log(url + networkId)
			let networkUrl = apiStartPoint + networkId
			console.log("networkUrl\n" + networkUrl)

			fetch(networkUrl)
				.then(res => res.json())
				.then(res => network = res)
				.catch(err => console.log("No More Matches!\n", err))
		} 
	}
}

fetch(url)
		.then(res => res.json())
		// .then(console.log(res))
		.then(res => findNetwork(res, url))
		.catch(err => console.log("ERROR in fetch 1\n", err))
