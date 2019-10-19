console.log("LIVE")

const url = "http://api.citybik.es/v2/networks/"
const whatCity = "Washington, DC"

var stationData = function(stationObj){
	console.log("these are these 6 things urls\n")
	// for(let i = 0; i < 6; i++){
		console.dir(stationObj.data.en.feeds[1].url)
		let data0 = stationObj.data.en.feeds[1].url
		fetch(data0)
			// .then(res => res.json())
			.then(console.dir(res))
			.catch(err => console.log("uh oh"), err)
}

var findStation = function(networkObj, networkEndPoint){
	console.log("networkEndPoint\n" + networkEndPoint)
	console.log("networkObj")
	console.dir(networkObj)
	console.log("WHAT IS THIS??")
	// console.dir(networkObj.network.stations)
	let mysteryObj = networkObj.network.stations
	console.dir(mysteryObj)
	
	// Logs all station names without bikes
	// for(let i = 0;i < mysteryObj.length; i++){
	// 	if (mysteryObj[i].free_bikes === 0){
	// 		console.dir(mysteryObj[i].name)
	// 	}
	
	// console.dir(networkObj.network.gbfs_href)
	let stationUrl = networkObj.network.gbfs_href
	console.log(stationUrl)	

	fetch(stationUrl)
		.then(res => res.json())
		.then(res => stationData(res))
		.catch(err => console.log("ERROR in fetch 3\n", err))
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
						.then(res => findStation(res, networkUrl))
						.catch(err => console.log("No More Matches!\n", err))
				} 

			}
}

bikes = document.querySelector("button")
bikes.addEventListener("click", function(eo){
	eo.preventDefault()

	fetch(url)
		.then(res => res.json())
		// .then(console.log(res))
		.then(res => findNetwork(res, url))
		.catch(err => console.log("ERROR in fetch 1\n", err))
})
