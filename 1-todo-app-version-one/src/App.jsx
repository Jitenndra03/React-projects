import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import "./App.css"
import TodoItems from "./components/TodoItems.jsx";

function App() {
    const todoItems = [
        {
            name: "Buy Milk",
            dueDate: "16/04/2024",
        },
        {
            name: "Go to college",
            dueDate: "12/08/24",
        },
        {
            name: "Like this video",
            dueDate: "right now",
        }
    ]


    return <center
        className='todo-container'>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <TodoItems todoItems={todoItems}/>
    </center>
}

export default App;