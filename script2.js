// console.log("Wea rel ive")

// const url3 = "http://api.citybik.es/v2/networks/capital-bikeshare"

function bikesFetch(response) {
    let stationArray = response.network.stations
    let myObj = document.getElementById("searchResults")
    
    if(myObj != null){
        myObj.remove()
    }

    let main = document.querySelector(".page")
    // main.removeChild(main.childNodes[1])
    let results = document.createElement("div")
    results.setAttribute("id", "searchResults")
    main.appendChild(results)

    let searchText = document.querySelector(".searchtext")

    for(let i = 0; i < stationArray.length; i++){
        if(stationArray[i].name.toUpperCase().includes(searchText.value.toUpperCase())){
            console.log(stationArray[i].name)
            results.appendChild(document.createElement("div")).innerHTML = stationArray[i].name
    
        }
    }
}

function fetchFail(response) {
    console.log(response)
}

function buttonClick(eo){
    eo.preventDefault()
    const url3 = "http://api.citybik.es/v2/networks/capital-bikeshare"
    
    fetch(url3)
        .then(res => res.json())
        .then(bikesFetch)
        .catch(fetchFail)
}


console.log("Wea rel ive")

document.querySelector("form").addEventListener("submit", buttonClick)