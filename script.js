const fetchJSON = async () => {
    const response = await fetch("data.json");
    const json = await response.json();

    displayVals(json);
}

const displayVals = (array) => {
    let total = 0;
    array.forEach((obj) => {
        total += obj.score;
        if (obj.category === "Reaction") {
            $("#reaction-value").text(`${obj.score}`);
        }
        else if (obj.category === "Memory") {
            $("#memory-value").text(`${obj.score}`);
        }
        else if (obj.category === "Verbal") {
            $("#verbal-value").text(`${obj.score}`);
        }
        else if (obj.category === "Visual") {
            $("#visual-value").text(`${obj.score}`);
        }

        $("#average").text(`${Math.floor(total / 4)}`)

    })
}

fetchJSON();
