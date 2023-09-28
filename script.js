let key = "42e1f29b6da9f55423db82b7ac1b636d"


function putInScreen(data) {

    console.log(data)

    document.querySelector(".city-name").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = data.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + data.main.humidity + "%"
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"

}


async function searchCity(city) {

    let data = await fetch(

        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        key +
        "&lang=pt_br" +
        "&units=metric"

    ).then(resposta => resposta.json())

    putInScreen(data)

}

function searchButton() {

    let city = document.querySelector(".searchInput").value

    searchCity(city)

}