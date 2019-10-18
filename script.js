console.log("LIVE")

const url = "http://api.citybik.es/v2/networks/"
const whatCity = "Washington, DC"
// https://open.spotify.com/artist/0fTHKjepK5HWOrb2rkS5Em"

var findNetwork = function(resObj, apiStartPoint){
			// console.dir(resObj)
			for (i = 0; i < resObj.networks.length; i++){
				if(resObj.networks[i].location.city == whatCity){
					console.dir(resObj.networks[i])
					networkId = resObj.networks[i].id
					// console.log(networkId) 
					// console.log(url + networkId)
					networkUrl = apiStartPoint + networkId

					fetch(networkUrl)
					.then(res => res.json())
					.then(res => findNetwork(res))
					.catch(err => console.log("ERROR", err))
				} 
			}
 
}

bikes = document.querySelector("button")
bikes.addEventListener("click", function(eo){
	eo.preventDefault()

	fetch(url)
	.then(res => res.json())
	.then(res => findNetwork(res, url))
	.catch(err => console.log("ERROR", err))
})
