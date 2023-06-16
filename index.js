const formControl = document.getElementById("name");
const form = document.getElementById("todo-form");
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById("list-container")

//console.log(form);

function addToDo(event) {

    event.preventDefault();

	// task variable is for storing the value of the input (whatever input the user types)
    // task stores user form input
    let task = formControl.value;
    if (!task){
        alert ("Do something nice today!");
        return;
    }
	//console.log(task);

	// this is for reseting the input value
	formControl.value = "";

/* 	1) Create DOM Elements */
	const newItem = document.createElement("li");
	const span = document.createElement("span"); // for us to easily manipulate when we are editing, li will have 2 children
	span.innerText = task;
	//li text, add text to li 
    listContainer.appendChild(newItem);
	newItem.appendChild(span);


	/* Create delete button */
	const deleteButton = document.createElement("button");
    // a class -- deleteButton.classList.add('');
	deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
	newItem.appendChild(deleteButton);

	deleteButton.addEventListener('click', () => {
		listContainer.removeChild(newItem);
	})


	/* Create a check button */
	const checkBox = document.createElement("button")
	// class needs to be added
	checkBox.innerHTML = '<i class="fa fa-check"></i>';
	newItem.appendChild(checkBox);

	checkBox.addEventListener("click", () => {
		newItem.classList.toggle("completed");
	})

    // innerText is aware of the rendered appearance of text - while textContent is not.

    const editBox = document.createElement("button")
	// class needs to be added
	editBox.innerHTML = '<i class="fa fa-edit"></i>';
	newItem.appendChild(editBox);

	editBox.addEventListener("click", () => {
        // replace the task text with an input field for editing

        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = span.innerText;
        newItem.innerText = ""; //clear the text of the task
		newItem.replaceChild(editInput, span);

        // create a save button 
        const saveButton = document.createElement("button");
        saveButton.innerText = "Save";
        newItem.appendChild(saveButton);

        saveButton.addEventListener("click", () => {
            const newTask = editInput.value;
            span.innerText = newTask;
			newItem.replaceChild(span, editInput);
			newItem.replaceChild(editBox, saveButton);
            // need to reattach the Listeners for the Check box and the delete one.
		});

		newItem.replaceChild(saveButton, editBox);
    })

}


function updateToDo(event) {

    // when click ing on pencil icon    

}




// This event listener is listening the submit event & triggering the addToDo function
// add ToDo on button click
form.addEventListener("submit", addToDo);



 











// CREATE
// target elements with querySelector
// add a ul with some li todos
// append text


// TODO : UX
/** 
 * 1 STEP
 * We type in some input
 * When we click to the button (submit), we want to add our input value to the list
 * We want to show the list we created on the screen
 * 
 * 2 STEP
 * We want to modify/update the list element directly on the UI
 * 
 * 3 STEP 
 * We want to delete/ remove the item from the list
 * 
 * BONUS ?
 * 4 STEP
 * mark as completed
*/

// https://getbootstrap.com/docs/5.3/components/list-group/#active-items


let btnToAdd = document.getElementById('button-addon2');
let inputValue = document.getElementById('input');

























// READ

// UPDATE
// replace

// DELETE
// removeChild

// Bonus:

// strike through - style=“text-decoration: strikethrough;”

// checkbox
