//Get the Values from the page
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;


    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = genNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert("You must enter numbers between 1 and 100");
    }


}

//Generate numbers from startValue and endValue
function genNumbers(startValue, endValue) {
    let numbers = [];

    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index);
    }
    return numbers;
}

//Display numbers and mark Even in BOLD
function displayNumbers() {
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let number = numbers[index];
        templateRows += `<tr><td>${number}</td></tr>`;

    }

    document.getElementById("results").innerHTML = templateRows;
}