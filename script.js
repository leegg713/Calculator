const mathDiv = document.getElementById("mathDiv");

        // Create button elements for math buttons
        const addition = document.createElement("button");
        addition.textContent = "+";
        addition.style.backgroundColor = 'green';
        addition.addEventListener("click", () => {
            //Will have to change the alert to do the addition
            alert("Addition clicked");
        });

        const subtraction = document.createElement("button");
        subtraction.textContent = "-";
        subtraction.style.backgroundColor = 'purple';
        subtraction.addEventListener("click", () => {
                   //Will have to change the alert to do the subtraction
            alert("Subtraction clicked");
        });

        const multiplication = document.createElement("button");
        multiplication.textContent = "*";
        multiplication.style.backgroundColor = 'blue';
        multiplication.addEventListener("click", () => {
                   //Will have to change the alert to do the multiplication
            alert("Mutliplication clicked");
        });

        const division = document.createElement("button");
        division.textContent = "/";
        division.style.backgroundColor = 'yellow';
        division.addEventListener("click", () => {
                   //Will have to change the alert to do the division
            alert("Division clicked");
        });

        const clear = document.createElement("button");
        clear.textContent = "Clear";
        clear.style.backgroundColor = 'orange';
        clear.addEventListener("click", () => {
            //Will have to change the alert to do the clear
            alert("Clear clicked");
        });

        const equal = document.createElement("button");
        equal.textContent = "=";
        equal.style.backgroundColor = 'red';
        equal.addEventListener("click", () => {
            //Will have to change the alert to do the clear
            alert("Equals clicked");
        });
        //Adds the buttons to the div
        mathDiv.appendChild(addition);
        mathDiv.appendChild(subtraction);
        mathDiv.appendChild(multiplication);
        mathDiv.appendChild(division);
        mathDiv.appendChild(clear);
        mathDiv.appendChild(equal);

        //Numbers Div

        const numberDiv = document.getElementById("numberDiv");

        // Create number buttons with the "number-button" class
        const buttons = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0","."
        ];

        buttons.forEach(number => {
            const button = document.createElement("button");
            button.textContent = number;
            button.classList.add("number-button"); // Add the "number-button" class
            button.addEventListener("click", () => {
                // Handle button click (you can replace the alert here)
                alert(number + " clicked");
            });
            numberDiv.appendChild(button);
        });





