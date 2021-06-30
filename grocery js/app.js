// select items
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const clearBtn = document.querySelector('.clear-btn');
const list = document.querySelector(".grocery-list");
// vars
let editElement;
let editFlag = false;
let editID = "";


window.addEventListener('DOMContentLoaded', setupItems());
form.addEventListener('submit', addItem);
// clear items

clearBtn.addEventListener('click', clearItem);
function addItem(e) {
	e.preventDefault();
	console.log(grocery.value);
	const value = grocery.value;
	const id = new Date().getTime().toString();
	
	if(value && !editFlag) {
		createListItem(id, value);
        displayALert('item added to list', 'success');
        // show container
        container.classList.add('show-container');
        //add to local storage
        addToLocalStorage(id,value);
        // set back to default
        setBackToDefault();
		console.log('add');
	} else if (value && editFlag) {
		editElement.innerHTML = value;
		displayALert('value', 'success');
		//edt local storage
		editLocalStorage(editID, value);
		setBackToDefault();
	} else {
		displayALert('please enter value', 'danger');
	}
}

// clear items

function clearItem() {
	const items = document.querySelectorAll('.grocery-item');
	if (items.length > 0) {
		items.forEach(function(item) {
			list.removeChild(item);
		});
	}
	container.classList.remove("show-container");
	displayALert('empty list', 'danger');
	setBackToDefault();	
	localStorage.removeItem('list');
}
//display alert

function displayALert(text, action) {
		alert.textContent = 'empty value';
		alert.classList.add(`alert-${action}`);	


setTimeout(function() {
	alert.textContent = "";
	alert.classList.remove(`alert-${action}`);

}, 1000);
}
//set back to default
function setBackToDefault() {
	
	grocery.value = "";
	editFlag = false;
	editID = "";
	submitBtn.textContent = 'submit';
}


function deleteItem(e) {
	const element = e.currentTarget.parentElement.parentElement;
	const id = element.dataset.id;
	list.removeChild(element);
	if (list.children.length === 0) {
		container.classList.remove('show-container');
	}
	displayALert('item removed', 'danger');
	setBackToDefault();
	// remove from local storage
	removeFromLocalStorage(id);
}
function editItem(e) {
	const element = e.currentTarget.parentElement.parentElement;
	editElement = e.currentTarget.parentElement.previousElementSibling;
	//set form value
	grocery.value = editElement.innerHTML;
	editFlag = true;
	editID = element.dataset.id;
	submitBtn.textContent = 'edit';
}

// local storage
// local storage api
// key:value pairs
// local storage API
// setITem, getItem, removeItem (as strings)

function addToLocalStorage(id, value){
	console.log('added to local storage');
	// localStorage.setItem("orange", JSON.stringify(['item', 'item2']));
	// let oranges = JSON.parse(localStorage.getItem('orange',));
	// localStorage.removeItem('orange');
	const grocery = {id, value};
	// IES Shortcat ID:ID = :ID (becaue same name)
	let items = getLocalStorage();
	items.push(grocery);
	console.log(items);
	localStorage.setItem('list', JSON.stringify(items));

}


function removeFromLocalStorage(id) {
	let items = getLocalStorage();

	items = items.filter(function(item) {
		if(item.id !== id) {
			return item;
		}
	});
	localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id,value){
	let items = getLocalStorage();
	items = items.map(function(item) {
		if (item.id === id) {
			item.value = value;
		}
		return item;
	});

}

function getLocalStorage() {
	return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}


function setupItems() {
	let items = getLocalStorage();
	if (items.length > 0){
		items.forEach(function(item) {
			createListItem(item.id, item.value)
		});
	container.classList.add('show-container');
	}
}


function createListItem(id, value) {

		const element = document.createElement('article');
		element.classList.add('grocery-item');
		const attr = document.createAttribute('data-id');
		attr.value = id;
		element.setAttributeNode(attr);
		element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);
        list.appendChild(element);

}