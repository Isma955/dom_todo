const input = document.getElementById('input')
const button = document.getElementById('button')
const list = document.getElementById('list')


button.addEventListener('click', (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    const spanText = document.createElement('span')
 
    spanText.textContent = input.value;
    const buttonTodo = document.createElement('button')
    buttonTodo.textContent = 'X'
    const checkTodo = document.createElement('input')
    checkTodo.type = 'checkbox'
  

    buttonTodo.addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })
    li.append(spanText,buttonTodo)
    li.prepend(checkTodo)
    list.append(li)
    input.value = ''

    li.style.display = 'flex'
    li.style.justifyContent = 'space-between'
    li.style.width = '300px'
    li.style.margin = 'auto'   
   
    checkTodo.addEventListener('click', (e) => {
        if(checkTodo.checked) {
            spanText.style.textDecoration = 'line-through'
        } else {
            spanText.style.textDecoration = 'none'
        }
    })
})