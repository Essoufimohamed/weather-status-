let temperateOption = document.getElementById("temperate");
let inputTemperate = document.getElementById("number");
let statusWeather = document.getElementById("statusWeather");
let imgStatus = document.getElementById("imgStatus");
let messageStatus = document.getElementById("messageStatus");

function celsiusStatus(tp) {
    if (tp <= 0) {
        console.log("the weather is could");
        imgStatus.src = "./imgs/snowy.png";
        messageStatus.innerText = "the weather is cold";
    } else if (tp >= 1 && tp <= 10) {
        console.log("the weather is chilly");
        imgStatus.src = "./imgs/cloud.png";
        messageStatus.innerText = "the weather is chilly";
    } else if (tp >= 11 && tp <= 21) {
        console.log("the weather is Warm");
        imgStatus.src = "./imgs/cloudy.png";
        messageStatus.innerText = "the weather is Warm";
    } else {
        console.log("the weather is very hot");
        imgStatus.src = "./imgs/sun.png";
        messageStatus.innerText = "the weather is very hot";
    }
}

function weatherStatus() {
    let temp = inputTemperate.value;
    let convert = document.getElementById("convertTemerature");

    if (temperateOption.value == "celsius") {
        convert.innerHTML = `${temp}°C => ${(temp * 9) / 5 + 32}°F`;
        celsiusStatus(temp);
    } else if (temperateOption.value == "fahrenheit") {
        let tempp = (temp - 32) * (5 / 9);
        convert.innerHTML = `${temp}°F => ${((temp - 32) * (5 / 9)).toFixed(
            2
        )}°C`;
        celsiusStatus(tempp);
    }
}
