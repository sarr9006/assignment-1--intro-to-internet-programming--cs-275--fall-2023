window.onload = () => {
    let firstOutput = document.getElementById(`output`);
    let content = ``;
    let counter = 1;

    let input = window.prompt(`What is the size of the matrix?`);
    input = parseInt(input);
    console.log(typeof input);

    let inputArray = new Array(input);
    console.log(`The size of the array is ${inputArray.length}`);

    content = `<table>`;

    for(let i = 0; i < inputArray.length; i++) {
        content += `<tr>`;

        for(let j = 0; j < inputArray.length; j++) {
            content += `<td>${counter++}</td>`;
        }

        content += `</tr>`;
    }

    content += `</table>`;

    firstOutput.innerHTML = content;

    //Flipped matrix

    content = `<table>`;

    for(let i = 0; i < inputArray.length; i++) {
        content += `<tr>`;

        for(let j = i; j < inputArray.length - i - 1; j++) {

            let temp = 
            content += `<td>${counter++}</td>`;

        }

        content += `</tr>`;
    }






};
