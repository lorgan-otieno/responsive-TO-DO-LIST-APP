// IIFE
(() => {
    //state variables
    let toDOListArray = [];
    //ui variables
    const form = document.querySelector(".form");
    const input = form.querySelector(".form_input");
    const ul = document.querySelector(".toDoList");
    // event listeners
    form.addEventListener("submit", (e) => {
        // preventdefault behaviour -page reload
        e.preventDefault();
        // give items a unique ID
        let itemId = String(Date.now());
        // get/assign input value 
        let toDoItem = input.value;
        // pass ID and item into functions
        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);
        // clear the input box.
        input.value = "";
    });

    ul.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        if (!id) return; //user clicked something else
        //pass id through to functions
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });

    //functions
    function addItemToDOM(itemId, toDoItem) {
        // create an li
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        // add toDoitem text to li
        li.innerText = toDoItem;
        // add li to the DOM
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
        // add item to array as an object with an iD so we can find and delete it later
        toDOListArray.push({itemId, toDoItem});
        console.log(toDOListArray); 
    }

    function removeItemFromDOM(id) {
        // get the list item by data ID
        var li = document.querySelector('[data-id="'+ id + '"]');
        // remove list item
        ul.removeChild(li);
    }
    function removeItemFromArray(id) {
        // create a new todolistarray with all li's that don't match the ID
        toDOListArray = toDOListArray.filter((item) => item.itemId !==id);
        console.log(toDOListArray);
    }

    

})();