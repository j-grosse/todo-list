const form = document.getElementById('form');
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const list = document.getElementById('list');


function addToDo(e){

	e.preventDefault();

	let task = input.value;

	if (!task)
	{
		alert("please add a task-- write to remember");
		return ;
	}
	//console.log(task);
	input.value = "";
	
	/* Create DOM elements */
	const item = document.createElement("li");
	const span= document.createElement("span");
	item.classList.add('list-item');
	span.innerText = task;
	item.appendChild(span);
	list.appendChild(item);

	//console.log(list);

	/* Create delete button */
	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add('delete-btn');
	deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
	item.appendChild(deleteBtn);

	deleteBtn.addEventListener('click', () => list.removeChild(item))

	
/* 	Edit Button */
	const editBtn = document.createElement("button");
	editBtn.classList.add('edit-btn');
	editBtn.innerHTML = '<i class="fa fa-edit"></i>';
	item.appendChild(editBtn);
	
	
	editBtn.addEventListener('click', () => {
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
	});

/* 	Check Button */
	const checkBtn = document.createElement("button");
	checkBtn.classList.add('check-btn');
	checkBtn.innerHTML = '<i class="fa fa-check"></i>';
	item.appendChild(checkBtn);

	checkBtn.addEventListener('click', () => item.classList.toggle("completed"))

}



form.addEventListener('submit', addToDo);
