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
    let j = 0
    for(let i = 0; i < stationArray.length; i++){

    function search(){
        stationArray[i].name.toUpperCase().includes(searchText.value.toUpperCase())
    } 
        if(search){
            console.log(stationArray[i].name)
            let stationName = document.createElement("div")
            stationName.setAttribute("class", "eachStation")
            results.appendChild(stationName)
            
            j++
            stationName.innerHTML = j + ". " + stationArray[i].name
            
            stationName.addEventListener("click", function(eo){
                let myDiv = document.getElementById("bikeResults")
    
                if(myDiv != null){
                    myDiv.remove()
                }

                let stationData = document.createElement("div")
                stationData.setAttribute("class", "stationData")
                let dataFree = document.createElement("div")
                dataFree.setAttribute("id", "inline")
                dataFree.innerHTML = "Bikes: " + stationArray[i].free_bikes
                let dataEmpty = document.createElement("div")
                dataEmpty.setAttribute("id", "inline")
                dataEmpty.innerHTML = "Docks: " + stationArray[i].empty_slots

                stationData.appendChild(dataFree)
                stationData.appendChild(dataEmpty)
                stationData.setAttribute("id", "bikeResults")

                stationName.appendChild(stationData) 
            }) 
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