// const inputBox= document.getElementById("inputbox");
// const listContainer = document.getElementById("list-container");
// let count=1;

// function addTask(){
//     if(inputBox.value === ''){
//         alert("Dont mess around and write something this instant....!!");
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         li.onclick = checked();
//         listContainer.appendChild(li);
//         let button = document.createElement("button");
//         button.innerHTML = "x";
//         button.onclick = function() {
//         li.remove();
//         }
//         li.appendChild(button);

//     }
//     inputBox.value = "";
// }

// function checked(){
//     count.toggle;
//     if(count == 1){
//         <span class="green-checkmark">&#10003;</span>
//     }
//     else{
        
//     }
// }





const inputBox= document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");
let count = 1;

function addTask() {
    if(inputBox.value === '') {
        alert("Dont mess around and write something this instant....!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.onclick = checked; // Assign the function correctly

        listContainer.appendChild(li);
        
        let button = document.createElement("button");
        button.innerHTML = "x";
        button.onclick = function() {
            li.remove(); // Removes the whole task
        };

        li.appendChild(button);
       
    }
    inputBox.value = ""; // Clears the input field
    saveData();
}

// function checked() {
//     count = count === 1 ? 0 : 1; // Toggle between 0 and 1
//     if (count === 1) {
//         this.innerHTML = `<span class="green-checkmark">&#10003;</span> ` + this.innerHTML; // Add the checkmark
//     } else {
//         this.innerHTML = this.innerHTML.replace(`<span class="green-checkmark">&#10003;</span> `, ''); // Remove the checkmark
        
//     }
// }


// function checked() {
//     // Toggle between 1 and 0
//     count = count === 1 ? 0 : 1;

//     // Check if the checkmark already exists
//     let checkmark = this.querySelector(".green-checkmark");

//     if (count === 1) {
//         // Only add the checkmark if it doesn't exist
//         if (!checkmark) {
//             let checkmarkSpan = document.createElement("span");
//             checkmarkSpan.classList.add("green-checkmark");
//             checkmarkSpan.innerHTML = "&#10003;"; // Checkmark symbol
//             this.appendChild(checkmarkSpan);
//         }
//     } else {
//         // Remove the checkmark if count is 0
//         if (checkmark) {
//             checkmark.remove();
//         }
//     }
// }



function checked() {
    // Toggle between 1 and 0
    count = count === 1 ? 0 : 1;

    // Check if the checkmark already exists
    let checkmark = this.querySelector(".green-checkmark");

    if (count === 1) {
        // Only add the checkmark if it doesn't exist
        if (!checkmark) {
            let checkmarkSpan = document.createElement("span");
            checkmarkSpan.classList.add("green-checkmark");
            checkmarkSpan.innerHTML = "&#10003;"; // Checkmark symbol
            this.insertBefore(checkmarkSpan, this.firstChild); // Insert the checkmark at the start
            saveData();
        }
    } else {
        // Remove the checkmark if count is 0
        if (checkmark) {
            checkmark.remove();
            saveData();
        }
    }
}

function saveData(){
    localStorage.setItem("to-do-list-data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("to-do-list-data");
}
