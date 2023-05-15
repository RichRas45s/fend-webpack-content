function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou",
        "Richard"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    } else( alert( "Ah Yuh tAYO"))
}

export { checkForName }
