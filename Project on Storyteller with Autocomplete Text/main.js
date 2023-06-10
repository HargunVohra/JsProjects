const storyOutput = document.getElementById("story");
const speedInput = document.querySelector("#speed");

console.log(storyOutput, speedInput);

let storyText = "This is my story! There are many like it, but this one is mine";

// const cars = ["BMW", "Tesla", "Audi", "Mercedes", "Ford"];

// console.log(cars[3].slice(0, 4));

let speedValue = 1;
let speed = 200 / speedInput.value;

writeStory();
function writeStory() {
    storyOutput.innerText = storyText.slice(0, speedValue);

    speedValue++;
    if (speedValue > storyText.length) {
        speedValue = 1;
    }
    setTimeout(writeStory, speed);
}
speedInput.addEventListener("input", (e) => {
    console.log(e.target.value);

    speed = 200 / e.target.value;
});
