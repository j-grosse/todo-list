const form = document.getElementById('form');
const toDoInput = document.getElementById('toDoInput');
const toDoList = document.getElementById('toDoList');

let toDos = [];
/* let toDos = [{ toDo: "buy groceries", isDone: false},
	 { toDo: "read book", isDone: false} ] */

const saveToLocalStorage = () => {
	const strToDos = JSON.stringify(toDos);
	localStorage.setItem("toDos", strToDos);
	
}

const getFromLocalStorage = () => {
	const parsedToDos = JSON.parse(localStorage.getItem("toDos"));
	if (parsedToDos){
		toDos = parsedToDos;
	}else{
		toDos = [];
	}
	render();
}

const render = (e) => {

	toDoList.innerHTML = "";
	
	/* Create DOM elements for the each toDos */
	toDos.forEach( (toDoObj) => {
		const listItem = document.createElement("li");
		const span = document.createElement("span");
		listItem.classList.add('list-item');
		span.innerText = toDoObj.toDo; // textContent
		listItem.appendChild(span);
		toDoList.appendChild(listItem);

			/* Create delete button */
		const deleteBtn = document.createElement("button");
		deleteBtn.classList.add('delete-btn');
		deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
		listItem.appendChild(deleteBtn);
		/* add an event listener to the delete button  */
		deleteBtn.addEventListener('click', () => {

			toDos = toDos.filter((item) => item.toDo !== toDoObj.toDo ); // update the toDos array
			saveToLocalStorage(toDos);
			toDoList.removeChild(listItem);
		});

		/* 	Create Check/done Button */
		const checkBtn = document.createElement("button");
		checkBtn.classList.add('check-btn');
		checkBtn.innerHTML = '<i class="fa fa-check"></i>';
		listItem.appendChild(checkBtn);
		/* add an event listener to the check button  */
		checkBtn.addEventListener('click', () => {

			toDoObj.isDone = true;
			toDos = toDos.filter((item) => item.isDone !== true );
			saveToLocalStorage(toDos);
			listItem.classList.toggle("completed")
		});

		/* Create Edit Button */
		const editBtn = document.createElement("button");
		editBtn.classList.add('edit-btn');
		editBtn.innerHTML = '<i class="fa fa-edit"></i>';
		listItem.appendChild(editBtn);
		
		/* add an event listener to the edit button  */
		editBtn.addEventListener('click', () => {
			const inputEdit = document.createElement('input');
			inputEdit.type = 'text';
			inputEdit.value = toDoObj.toDo;
			listItem.replaceChild(inputEdit, span);

			const saveBtn = document.createElement("button");
			saveBtn.classList.add('edit-btn');
			saveBtn.innerHTML = '<i class="fa fa-save"></i>';
	
			saveBtn.addEventListener('click', () => {
				const newToDo = inputEdit.value;
				const oldToDo = span.textContent;
				span.innerText = newToDo;

				toDos = toDos.map( (item) => {
					if ( item.toDo === oldToDo )
						return { toDo: newToDo, isDone: item.isDone};
					return item;
				});
				saveToLocalStorage(toDos);
				listItem.replaceChild(span, inputEdit);
				listItem.replaceChild(editBtn, saveBtn);
				render();
			})
			listItem.replaceChild(saveBtn, editBtn);
		});
	
	});

}

const addToDo = (e) => {
	e.preventDefault(); // prevents reloading the page after the submit

	let task = toDoInput.value; // or let task = e.target.toDo.value;
	if (!task){
		alert("please add a task -- write to remember!");
		return ;
	}

	const newTaskItem = { toDo: task, isDone: false};
	toDos.push(newTaskItem);
	saveToLocalStorage();
	console.log(toDos);
	toDoInput.value = ""; //reset the form inputs typed in on the input field or e.target.reset();
	render(); // render the book on the DOM
}

// Func. call as event listener 
form.addEventListener('submit', addToDo);
getFromLocalStorage();







	/* Create delete button */
	/* const deleteBtn = document.createElement("button");
	deleteBtn.classList.add('delete-btn');
	deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
	item.appendChild(deleteBtn);

	deleteBtn.addEventListener('click', () => toDoList.removeChild(item)) */

	
/* 	Edit Button */
/* 	const editBtn = document.createElement("button");
	editBtn.classList.add('edit-btn');
	editBtn.innerHTML = '<i class="fa fa-edit"></i>';
	item.appendChild(editBtn); */
	
	
/* 	editBtn.addEventListener('click', () => {
		if ( editBtn.innerHTML === '<i class="fa fa-edit"></i>' )
		{
			const spanEdit = item.firstElementChild;
			const inputEdit = document.createElement('input');
			inputEdit.type = 'text';
			inputEdit.value = item.textContent;
			item.insertBefore(inputEdit, spanEdit); // item = li
			item.removeChild(spanEdit);
			editBtn.innerHTML= '<i class="fa fa-save"></i>';
		}
		else if (editBtn.innerHTML === '<i class="fa fa-save"></i>')
		{
				const inputSave = item.firstElementChild;
				const spanSave= document.createElement("span");
				spanSave.textContent= inputSave.value;
				item.insertBefore(spanSave, inputSave);
				item.removeChild(inputSave);
				editBtn.innerHTML = '<i class="fa fa-edit"></i>';
			}
	}); */

/* 	Check Button */
	/* const checkBtn = document.createElement("button");
	checkBtn.classList.add('check-btn');
	checkBtn.innerHTML = '<i class="fa fa-check"></i>';
	item.appendChild(checkBtn);

	checkBtn.addEventListener('click', () => item.classList.toggle("completed")) */