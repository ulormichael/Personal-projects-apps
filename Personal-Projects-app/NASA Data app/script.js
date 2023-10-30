let searchButton = document.querySelector("#get");

searchButton.addEventListener("click", () => {
    sendApiRequest();
});

async function sendApiRequest() {
    let API_KEY = "How to get api key from official nasa website check below";
    let response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );
    let data = await response.json();
    useApiData(data);
}

function useApiData(data) {
    document.querySelector("#container").innerHTML = data.explanation;
    document.querySelector("#container").innerHTML += `<img src = "${data.url}">`;
}