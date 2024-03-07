const TODO_LIST = []

function add_task(event) {
    const input_elem = document.getElementById('input_task');
    const text = input_elem.value
    input_elem.value = ''
    if (text) {
        TODO_LIST.push({
            title: text,
            status: false
        })
        render()
    }
}


function render() {
    todo_list_elem.innerHTML= ''
    for (let i=0; i < TODO_LIST.length; i++) {
        const item = TODO_LIST[i]
        const todo = `<li class="list-group-item bg-secondary text-white d-flex justify-content-between"><span class="${item.status ? `text-decoration-line-through` : ''}">${item.title}</span><span><span class="btn btn-light" data-type="toggle" data-index="${i}">&check;</span><span class="btn btn-danger" data-type="delete" data-index="${i}">&times</span></span></li>`
        todo_list_elem.insertAdjacentHTML("beforeend", todo)
    }
}

function check_task(event) {
    const elem = event.target
    if (elem.dataset.index) {
        const index = elem.dataset.index
        const type = elem.dataset.type
        if (type === 'toggle') {
            TODO_LIST[index].status = !TODO_LIST[index].status
        } else if (type === "delete") {
            TODO_LIST.splice(index, 1)
        }
        render()
    }
}

const todo_list_elem = document.getElementById('todo_list');
todo_list_elem.onclick = check_task
document.getElementById('btn_add').onclick = add_task
render()
