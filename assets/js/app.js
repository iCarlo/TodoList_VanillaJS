const userInput = document.querySelector('#user-input')
const addBtn = document.querySelector('#add-btn')
const todoList = document.querySelector('.todo-list')


addBtn.addEventListener('click', () => {
    if (userInput.value) {
        const todoItem = userInput.value
        const listItem = `<li>${todoItem}</li>`

        // afterbegin - append as first child
        // beforeend - append as last child
        todoList.insertAdjacentHTML("afterbegin", listItem)
        userInput.value = null
    }

})

