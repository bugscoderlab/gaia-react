const todoList = [
    {"title": "todo 1", "status": "done"},
    {"title": "todo 2", "status": "wip"},
    {"title": "todo 3", "status": "wip"},
    {"title": "todo 4", "status": "pending"},
    {"title": "todo 5", "status": "pending"},
]

function TodoList() {
    const listDone = todoList.filter(val => val.status == "done")
    const listWIP  = todoList.filter(val => val.status == "wip")
    const listPend = todoList.filter(val => val.status == "pending")

    return(<>
        { listDone.length > 0 && (<>
            Done
            <ul>
            { listDone.map((val, key) => (
                <li key={key}>{val.title}</li>
            )) }
            </ul>
        </>)}

        { listWIP.length > 0 && (<>
            WIP
            <ul>
            { listWIP.map((val, key) => (
                <li key={key}>{val.title}</li>
            )) }
            </ul>
        </>)}

        { listPend.length > 0 && (<>
            Pending
            <ul>
            { listPend.map((val, key) => (
                <li key={key}>{val.title}</li>
            )) }
            </ul>
        </>)}
    </>)
}

export default TodoList