
//variables

const todo = document.getElementById('todo');
const form = document.getElementById('addForm');
// console.log(todo.value)

const todoList = document.getElementById('todos');

const filter = document.getElementById('filter')

//event listners

form.addEventListener('submit', addToDo)

todoList.addEventListener('click', removeToDo)


filter.addEventListener('keyup', filterTodos)


//search
function filterTodos(e) {

    // console.log('working')

    //get the user input
    let searchText = e.target.value.toLowerCase();

    // console.log(searchText)

    let listItems = document.getElementsByTagName('li');

    // console.log('listItems', listItems)

    //convert it into array
    Array.from(listItems).forEach(function (item) {
        // console.log(item.firstChild.textContent);

        let todoName = item.firstChild.textContent

        // console.log(todoName.toLowerCase().indexOf(searchText))


        if (todoName.toLowerCase().indexOf(searchText) != -1) {
            console.log('block')
            item.style.display = 'flex'
        } else {
            console.log('none')

            item.classList.remove('d-flex');
            item.style.display = 'none'
        }

    })

}


//add a todo
//get the user input
function addToDo(event) {
    event.preventDefault();
    // console.log(event)
    //not allow on empty todo

    if (todo.value == '') {
        alert('Put a valid todo');
        return;
    }

    //get the user input
    const newTodo = todo.value;
    //create a new li element
    let li = document.createElement('li');

    //add same classes to the li

    li.className = "list-group-item d-flex justify-content-between"

    //add new todo to li element
    li.innerText = newTodo;

    //create del button element
    let deleteBtn = document.createElement('button');

    //add same classes to del button

    deleteBtn.className = 'btn btn-danger btn-sm delete';

    //add delete txt to the button

    deleteBtn.innerText = 'delete';

    //append del button to li

    li.append(deleteBtn);

    //append li to todolist
    todoList.append(li);

    todo.value = '';

}



//remove a todo

function removeToDo(e) {

    // console.log(e)
    // console.log('e', { target: e.target, class: e.target.classList })

    if (e.target.classList.contains('delete')) {
        // console.log('proceed')

        let result = confirm('Are you sure u want to delete?');

        console.log('result', result)
        if (result) {
            let li = e.target.parentElement;

            todoList.removeChild(li);


        }



    }
}