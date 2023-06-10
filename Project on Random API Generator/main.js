const displayJoke = document.getElementById("display-joke");
const button = document.querySelector("#getJoke");

console.log(displayJoke, button);

button.addEventListener("click", getRandomJoke);

function getRandomJoke() {
    
    const ajax = new XMLHttpRequest();
    const url = "https://api.chucknorris.io/jokes/random";

    ajax.open("GET", url, true);
    // console.log(ajax.open);

    ajax.onreadystatechange = () => {
        if (ajax.status == 200 && ajax.readyState === 4) {
            // readyState Holds the status of the XMLHttpRequest.
            // 0: request not initialized
            // 1: server connection established
            // 2: request recieved
            // 3: processing request
            // 4: request finished and response is ready

            // status 200: "OK"
            // 403: "Forbidden"
            // 404: "Page not found"
            
            console.log(ajax.responseText);

            let data = JSON.parse(ajax.responseText);
            displayJoke.innerHTML = `${data.value}`;
        } else {
            ajax.onerror = onerror();
        }
    };
    ajax.send();
}
// function onerror() {
//     displayJoke.textContent = "This is an error";
// }