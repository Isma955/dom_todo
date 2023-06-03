const input = document.getElementById('input')
const button = document.getElementById('button')
const list = document.getElementById('list')



const arr = [{
    text : 'первое дело',
    done : true
},
{
    text : 'второе дело',
    done : true
},
{
    text : 'третье дело',
    done : true
},
{
    text : 'четвертое дело',
    done : true
},
{
    text : 'пятое дело',
    done : true
},
]

function render (arr) {
    list.textContent = ''
    for (let i = 0; i< arr.length; i++) {
       const newLi = document.createElement('li') 
       const deleteBut = document.createElement('button')
       deleteBut.classList.add('deleteBut')
       deleteBut.textContent = 'X'
       const check = document.createElement('input')
       check.type = 'checkbox'
       const textToDo = document.createElement('span')
       textToDo.textContent = arr[i].text
        newLi.append(textToDo,deleteBut)
        newLi.prepend(check)
       list.append(newLi)
       newLi.style.display = 'flex'
       newLi.style.justifyContent = 'space-between'
       newLi.style.width = '300px'
       newLi.style.margin = 'auto'


       deleteBut.addEventListener('click', (e) => {
        e.target.parentElement.remove()
        remove(i)
    })
    check.addEventListener('click', (e) => {
        checkTodo(i)
        if(check.checked) {
            newLi.style.backgroundColor = 'red'
        }else {
            newLi.style.backgroundColor = 'transparent'
        }
        

    })
    
    }
}
render(arr)

function checkTodo (i) {
    arr[i].done = !arr[i].done
}


function remove(arr, index) {
    arr.splice(index, 1)
    render(arr)
}
// remove()

function addTodo(text) {
    arr.push({text:text, done: true})
    render(arr)
}




button.addEventListener('click', (e) => {
    e.preventDefault()
    addTodo(input.value)
    input.value = ''
})

