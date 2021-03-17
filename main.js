
//Main Variables
let container = document.querySelector(".container");
let add_item = document.querySelector(".add_item");
let delete_item = document.querySelector('.delete_item');
let check_item = document.querySelector(".check_item");
let show_items = document.querySelector(".show_items");
let results_container = document.querySelector(".results");
let key_input = document.getElementById("key_input");
let value_input = document.getElementById("value_input");

//Check empty input 
function show_message() {

    results_container.innerHTML = "<span class='message'>Attention please, input field is empty!!</span>";
}

add_item.addEventListener('click', function () {

    if (key_input.value != "" && value_input.value != "") {

        localStorage.setItem(key_input.value, value_input.value);
        results_container.innerHTML = `<span class="message"> Local Storage Item key : ${key_input.value} && Item value : ${value_input.value} are added</span> `;

        key_input.value = "";
        value_input.value = "";
    }

    else {
        show_message();

    }
});

check_item.addEventListener('click', function () {


    if (key_input.value != "") {
        if (localStorage.getItem(key_input.value)) {

            results_container.innerHTML = `<span class="message">Local Storage Item is found with key : ${key_input.value}</span>`;

        }

        else {
            results_container.value = `<span class="message">No Local storage Item is found with this key</span>`;
        }
        key_input.value = "";

    }
    else if (value_input.value != "") {
        for (const [key, value] of Object.entries(localStorage)) {

            if (value == value_input.value) {

                results_container.innerHTML = `<span class="message">Local Storage Item is found with value : ${value_input.value}</span>`;
            }
            else {
                results_container.innerHTML = `<span class="message">No Local storage Item is found with this value</span>`;
            }
        }

        value_input.value = "";
    }

    else {
        show_message("<span class='message'>Attention please, input field is empty!!</span>");
    }

});


delete_item.addEventListener('click', function () {

    results_container.innerHTML = "";

    if (key_input.value != "") {
        if (localStorage.getItem(key_input.value)) {

            results_container.innerHTML = `<span class="message">Local Storage Item with key : ${key_input.value} is deleted</span>`;
            localStorage.removeItem(key_input.value);

        }
        else {
            results_container.innerHTML = `<span class="message">No Local storage Item is found with this key</span>`;
        }
        key_input.value = "";

    }

    else if (value_input.value != "") {
        if (localStorage.getItem(value_input.value)) {

            localStorage.removeItem(value_input.value);
            results_container.innerHTML += `<span class="message">Local Storage Item with value: ${value_input.value} is deleted</span>`;

        }
        else {
            results_container.innerHTML = `<span class="message">No Local storage Item is found with this value</span>`;
        }
        key_input.value = "";
    }

    else {
        show_message("<span class='message'>Attention please, input field is empty!!</span>");
    }

});

show_items.addEventListener('click', function () {


    results_container.innerHTML = "";

    if (localStorage.length) {
        let items = Object.entries(localStorage);
        for (const [key, value] of items) {

            results_container.innerHTML += `<span class="key">Key:${key}</span> <span class="value"> Value:${value}</span>`
        }
    }
    else {
        results_container.innerHTML = "No Items To Show"
    }
});


