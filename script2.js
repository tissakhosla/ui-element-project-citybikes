console.log("Wea rel ive")
const url = "http://api.citybik.es/v2/networks/capital-bikeshare"

fetch(url)
    .then(res => res.json())
    .then(console.log(res))
    .catch(err => "Something's up...", err)