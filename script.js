



function calculate() {
    
    let outputDiv = document.getElementById("output");
    let usedText = document.getElementById("inputValue").value.toUpperCase();
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let shiftedText = "";

    outputDiv.innerHTML = ""; // clear the previous calculation


    for(let i = 0; i < 25; i++){
        let element = document.createElement("p");

        for(let c = 0; c < usedText.length; c++){
            let indexOfChar = alphabet.indexOf(usedText[c]);
            if(indexOfChar == -1){
                element.innerText = "Invalid characters in text to be deciphered";
                outputDiv.appendChild(element);
                return;
            }

            if(indexOfChar == 0){
                indexOfChar = alphabet.length-2; // skipping Z when rotating left
            } else {
                indexOfChar = (indexOfChar - 1);
            }

            shiftedText += alphabet[indexOfChar];
        }
        
    
        usedText = shiftedText;
        shiftedText = "";
        element.innerText = "shift " + i+1 + ": " + usedText;
        outputDiv.appendChild(element);
    }




}