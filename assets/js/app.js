const userInput = document.querySelector('#user-input')
const addBtn = document.querySelector('#add-btn')
const todoList = document.querySelector('.todo-list')

let data = ''


addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (userInput.value && addBtn.innerText == 'Add') {
        const newItem = userInput.value
        const dataItem = newItem.replaceAll(' ', '-')
        const todoItem = `<div class="todo-item"><span>${newItem}</span><div class="todo-actions"><button data-todo=${dataItem} class="todo-edit" type="button"><i class="fas fa-edit"></i></button><button data-todo=${dataItem} class="todo-delete" type="button"><i class="fas fa-trash-alt"></i></button></div></div>`

        const listItem = document.createElement('li')
        listItem.innerHTML = todoItem

        // afterbegin - append as first child
        // beforeend - append as last child
        todoList.insertAdjacentHTML("afterbegin", todoItem)
        userInput.value = null


    } else if (userInput.value && addBtn.innerText == 'Edit') {
        const newTodo = userInput.value
        const todos = document.getElementsByClassName('todo-item')
        const EditItem = Array.from(todos).find(x => x.innerText === data)

        const spanText = EditItem.children[0]
        spanText.innerText = newTodo

        const todoActions = EditItem.children[1].children
        Array.from(todoActions).forEach(action => action.setAttribute('data-todo', newTodo.replaceAll(' ', '-')))

        addBtn.innerText = 'Add'
        userInput.value = null

    }
})


todoList.addEventListener('click', (e) => {
    if (e.target.className === "todo-edit") {
        editTodo(e)
    } else if (e.target.className === "todo-delete") {
        deleteTodo(e)
    }
})


const deleteTodo = (e) => {
    const query = e.target.getAttribute('data-todo').replaceAll('-', ' ')
    const todos = document.getElementsByClassName('todo-item')
    const deleteItem = Array.from(todos).find(x => x.innerText === query)
    deleteItem.remove()
}

const editTodo = (e) => {
    data = e.target.getAttribute('data-todo').replaceAll('-', ' ')
    userInput.value = data
    addBtn.innerText = 'Edit'
}