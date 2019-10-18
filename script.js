console.log("LIVE")

const url = "http://api.citybik.es/v2/networks/"
const whatCity = "Washington, DC"

var findStation = function(networkObj, networkEndPoint){
	console.log("networkEndPoint\n" + networkEndPoint)
	console.log("networkObj")
	console.dir(networkObj)
	console.dir(networkObj.network.gbfs_href)
	let stationUrl = networkObj.network.gbfs_href

	fetch(stationUrl)
		.then(res => res.json())
		.then(res => console.log(res))
		.catch(err => console.log("where we at?!\n", err))
}

var findNetwork = function(apiObj, apiStartPoint){
			// console.dir(resObj)
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
		.then(res => findNetwork(res, url))
		.catch(err => console.log("Acceptable ERROR\n", err))
})
