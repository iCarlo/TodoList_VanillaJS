const userInput = document.querySelector('#user-input')
const addBtn = document.querySelector('#add-btn')
const todoList = document.querySelector('.todo-list')


addBtn.addEventListener('click', () => {
    if (userInput.value) {
        const todoItem = userInput.value
        const listItem = `<li>
        <div class="todo-item"><span>${todoItem}</span><div class="todo-actions"><button class="todo-edit"><i class="fas fa-edit"></i></button><button class="todo-delete"><i class="fas fa-trash-alt"></i></button></div></div>
    </li>`

        // afterbegin - append as first child
        // beforeend - append as last child
        todoList.insertAdjacentHTML("afterbegin", listItem)
        userInput.value = null
    }

})

