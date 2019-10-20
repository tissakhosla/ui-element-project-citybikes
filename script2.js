console.log("Wea rel ive")

const url3 = "http://api.citybik.es/v2/networks/capital-bikeshare"

function bikes(stationArray) {
 
    const form = document.querySelector("form")
    
    form.addEventListener("submit", function(eo){
        eo.preventDefault()
        let main = document.querySelector(".page")
        let searchText = document.querySelector(".searchtext")

        for(let i = 0; i < stationArray.length; i++){
            
            if(stationArray[i].name.toUpperCase().includes(searchText.value.toUpperCase()))
                main.appendChild(document.createElement("div")).innerHTML = stationArray[i].name
        }

    })

}

fetch(url3)
    .then(res => res.json())
    .then(res => bikes(res.network.stations))
    .catch(err => console.log("No More Matches!\n", err))

