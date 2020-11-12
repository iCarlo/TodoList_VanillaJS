const userInput = document.querySelector('#user-input')
const addBtn = document.querySelector('#add-btn')
const todoList = document.querySelector('.todo-list')



addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (userInput.value) {
        const newItem = userInput.value
        const todoItem = `<div class="todo-item"><span>${newItem}</span><div class="todo-actions"><button data-todo=${newItem} class="todo-edit" type="button"><i class="fas fa-edit"></i></button><button data-todo=${newItem} class="todo-delete" type="button"><i class="fas fa-trash-alt"></i></button></div></div>`

        const listItem = document.createElement('li')
        listItem.innerHTML = todoItem

        // afterbegin - append as first child
        // beforeend - append as last child
        todoList.insertAdjacentHTML("afterbegin", todoItem)
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
    const query = e.target.getAttribute('data-todo')
    const todos = document.getElementsByClassName('todo-item')
    const deleteItem = Array.from(todos).find(x => x.innerText === query)
    deleteItem.remove()


}